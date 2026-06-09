export type BaccaratRankValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type BaccaratCounts = [number, number, number, number, number, number, number, number, number, number]

export interface BaccaratProbabilities {
  banker: number
  player: number
  tie: number
}

export const BACCARAT_RANK_VALUES: BaccaratRankValue[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const emptyOutcome = (): BaccaratProbabilities => ({
  banker: 0,
  player: 0,
  tie: 0,
})

export function createBaccaratShoe(decks: number): BaccaratCounts {
  return [16 * decks, 4 * decks, 4 * decks, 4 * decks, 4 * decks, 4 * decks, 4 * decks, 4 * decks, 4 * decks, 4 * decks]
}

export function countBaccaratCards(counts: readonly number[]) {
  return counts.reduce((total, count) => total + count, 0)
}

export function baccaratCardLabel(value: BaccaratRankValue) {
  return value === 0 ? '10/J/Q/K' : String(value)
}

export function calculateBaccaratProbabilities(inputCounts: readonly number[]): BaccaratProbabilities {
  const counts = inputCounts.slice() as BaccaratCounts
  const outcomes = emptyOutcome()
  const initialCardCount = countBaccaratCards(counts)

  if (initialCardCount < 6) {
    return outcomes
  }

  const settle = (playerTotal: number, bankerTotal: number, probability: number) => {
    if (playerTotal > bankerTotal) {
      outcomes.player += probability
    } else if (bankerTotal > playerTotal) {
      outcomes.banker += probability
    } else {
      outcomes.tie += probability
    }
  }

  const drawCard = (
    remainingCards: number,
    probability: number,
    onCard: (card: BaccaratRankValue, nextProbability: number, nextRemainingCards: number) => void,
  ) => {
    for (const rank of BACCARAT_RANK_VALUES) {
      const available = counts[rank]

      if (available <= 0) {
        continue
      }

      counts[rank] -= 1
      onCard(rank, probability * (available / remainingCards), remainingCards - 1)
      counts[rank] += 1
    }
  }

  drawCard(initialCardCount, 1, (playerFirst, playerFirstProbability, afterPlayerFirst) => {
    drawCard(afterPlayerFirst, playerFirstProbability, (bankerFirst, bankerFirstProbability, afterBankerFirst) => {
      drawCard(afterBankerFirst, bankerFirstProbability, (playerSecond, playerSecondProbability, afterPlayerSecond) => {
        drawCard(afterPlayerSecond, playerSecondProbability, (bankerSecond, bankerSecondProbability, afterBankerSecond) => {
          const playerInitial = baccaratTotal(playerFirst, playerSecond)
          const bankerInitial = baccaratTotal(bankerFirst, bankerSecond)

          if (isNatural(playerInitial) || isNatural(bankerInitial)) {
            settle(playerInitial, bankerInitial, bankerSecondProbability)
            return
          }

          if (playerInitial <= 5) {
            drawCard(afterBankerSecond, bankerSecondProbability, (playerThird, playerThirdProbability, afterPlayerThird) => {
              const playerFinal = baccaratTotal(playerInitial, playerThird)

              if (shouldBankerDraw(bankerInitial, playerThird)) {
                drawCard(afterPlayerThird, playerThirdProbability, (bankerThird, bankerThirdProbability) => {
                  settle(playerFinal, baccaratTotal(bankerInitial, bankerThird), bankerThirdProbability)
                })
                return
              }

              settle(playerFinal, bankerInitial, playerThirdProbability)
            })
            return
          }

          if (bankerInitial <= 5) {
            drawCard(afterBankerSecond, bankerSecondProbability, (bankerThird, bankerThirdProbability) => {
              settle(playerInitial, baccaratTotal(bankerInitial, bankerThird), bankerThirdProbability)
            })
            return
          }

          settle(playerInitial, bankerInitial, bankerSecondProbability)
        })
      })
    })
  })

  return outcomes
}

function baccaratTotal(...cards: number[]) {
  return cards.reduce((total, card) => total + card, 0) % 10
}

function isNatural(total: number) {
  return total >= 8
}

function shouldBankerDraw(bankerTotal: number, playerThirdCard: BaccaratRankValue) {
  if (bankerTotal <= 2) {
    return true
  }

  if (bankerTotal === 3) {
    return playerThirdCard !== 8
  }

  if (bankerTotal === 4) {
    return playerThirdCard >= 2 && playerThirdCard <= 7
  }

  if (bankerTotal === 5) {
    return playerThirdCard >= 4 && playerThirdCard <= 7
  }

  if (bankerTotal === 6) {
    return playerThirdCard === 6 || playerThirdCard === 7
  }

  return false
}
