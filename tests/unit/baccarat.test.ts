import { describe, expect, it } from 'vitest'
import { calculateBaccaratProbabilities, countBaccaratCards, createBaccaratShoe } from '../../app/utils/baccarat'

describe('baccarat probability calculator', () => {
  it('creates a baccarat shoe by card point value', () => {
    const shoe = createBaccaratShoe(2)

    expect(shoe[0]).toBe(32)
    expect(shoe[1]).toBe(8)
    expect(shoe[9]).toBe(8)
    expect(countBaccaratCards(shoe)).toBe(104)
  })

  it('calculates the initial eight-deck baccarat probabilities', () => {
    const probabilities = calculateBaccaratProbabilities(createBaccaratShoe(8))

    expect(probabilities.banker).toBeCloseTo(0.458597, 6)
    expect(probabilities.player).toBeCloseTo(0.446247, 6)
    expect(probabilities.tie).toBeCloseTo(0.095156, 6)
  })

  it('keeps outcome probabilities normalized after observed cards are removed', () => {
    const shoe = createBaccaratShoe(1)
    shoe[0] -= 3
    shoe[8] -= 1
    shoe[9] -= 2

    const probabilities = calculateBaccaratProbabilities(shoe)

    expect(probabilities.banker + probabilities.player + probabilities.tie).toBeCloseTo(1, 11)
  })
})
