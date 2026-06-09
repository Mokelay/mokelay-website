<script setup lang="ts">
import {
  BACCARAT_RANK_VALUES,
  baccaratCardLabel,
  calculateBaccaratProbabilities,
  countBaccaratCards,
  createBaccaratShoe,
  type BaccaratCounts,
  type BaccaratProbabilities,
  type BaccaratRankValue,
} from '~/utils/baccarat'

const deckInput = ref(8)
const activeDecks = ref<number | null>(null)
const shoeCounts = ref<BaccaratCounts | null>(null)
const history = ref<BaccaratRankValue[]>([])
const probabilities = ref<BaccaratProbabilities | null>(null)
const errorMessage = ref('')
const ready = ref(false)

useSeoMeta({
  title: '百家乐概率分析',
  description: '按牌靴剩余牌计算百家乐庄、闲、和概率。',
})

onMounted(() => {
  ready.value = true
})

const initialCounts = computed(() => (activeDecks.value ? createBaccaratShoe(activeDecks.value) : null))
const remainingCards = computed(() => (shoeCounts.value ? countBaccaratCards(shoeCounts.value) : 0))
const drawnCards = computed(() => history.value.length)
const hasCalculated = computed(() => probabilities.value !== null)
const probabilityTotal = computed(() => {
  if (!probabilities.value) {
    return 0
  }

  return probabilities.value.banker + probabilities.value.player + probabilities.value.tie
})

const outcomeCards = computed(() => {
  const current = probabilities.value ?? { banker: 0, player: 0, tie: 0 }

  return [
    { key: 'banker', label: '庄', value: current.banker },
    { key: 'player', label: '闲', value: current.player },
    { key: 'tie', label: '和', value: current.tie },
  ]
})

const rankButtons = computed(() =>
  BACCARAT_RANK_VALUES.map((value) => {
    const remaining = shoeCounts.value?.[value] ?? 0
    const initial = initialCounts.value?.[value] ?? 0

    return {
      value,
      label: String(value),
      detail: baccaratCardLabel(value),
      remaining,
      drawn: initial - remaining,
    }
  }),
)

function startAnalysis() {
  const decks = Math.trunc(Number(deckInput.value))

  if (!Number.isFinite(decks) || decks < 1 || decks > 16) {
    errorMessage.value = '请输入 1-16 之间的牌副数'
    probabilities.value = null
    activeDecks.value = null
    shoeCounts.value = null
    history.value = []
    return
  }

  activeDecks.value = decks
  shoeCounts.value = createBaccaratShoe(decks)
  history.value = []
  updateProbabilities()
}

function recordCard(value: BaccaratRankValue) {
  if (!shoeCounts.value) {
    startAnalysis()
  }

  if (!shoeCounts.value) {
    return
  }

  if (shoeCounts.value[value] <= 0) {
    errorMessage.value = `${baccaratCardLabel(value)} 已经没有剩余牌`
    return
  }

  const nextCounts = [...shoeCounts.value] as BaccaratCounts
  nextCounts[value] -= 1
  shoeCounts.value = nextCounts
  history.value = [...history.value, value]
  updateProbabilities()
}

function undoLastCard() {
  const lastCard = history.value.at(-1)

  if (lastCard === undefined || !shoeCounts.value) {
    return
  }

  const nextCounts = [...shoeCounts.value] as BaccaratCounts
  nextCounts[lastCard] += 1
  shoeCounts.value = nextCounts
  history.value = history.value.slice(0, -1)
  updateProbabilities()
}

function resetCurrentShoe() {
  if (!activeDecks.value) {
    return
  }

  shoeCounts.value = createBaccaratShoe(activeDecks.value)
  history.value = []
  updateProbabilities()
}

function updateProbabilities() {
  if (!shoeCounts.value) {
    probabilities.value = null
    return
  }

  if (remainingCards.value < 6) {
    probabilities.value = null
    errorMessage.value = '剩余牌不足 6 张，无法完整计算下一局'
    return
  }

  probabilities.value = calculateBaccaratProbabilities(shoeCounts.value)
  errorMessage.value = ''
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(4)}%`
}
</script>

<template>
  <section class="baccarat-page section-tight">
    <div class="container baccarat-shell">
      <div class="baccarat-heading">
        <p class="eyebrow">Baccarat</p>
        <h1>百家乐概率分析</h1>
        <p>按当前牌靴精确计算下一局庄、闲、和概率。</p>
      </div>

      <form class="baccarat-control" @submit.prevent="startAnalysis">
        <label class="deck-field" for="deck-count">
          <span>牌副数</span>
          <input id="deck-count" v-model.number="deckInput" type="number" min="1" max="16" inputmode="numeric" />
        </label>
        <button class="button button-primary" type="submit" :disabled="!ready">计算概率</button>
      </form>

      <p v-if="errorMessage" class="status-message" role="status">{{ errorMessage }}</p>

      <div v-if="hasCalculated" class="probability-grid" aria-label="百家乐概率">
        <article v-for="outcome in outcomeCards" :key="outcome.key" class="probability-card" :class="`is-${outcome.key}`">
          <span>{{ outcome.label }}</span>
          <strong>{{ formatPercent(outcome.value) }}</strong>
        </article>
      </div>

      <div v-if="hasCalculated" class="shoe-summary" aria-label="牌靴状态">
        <div>
          <span>当前牌靴</span>
          <strong>{{ activeDecks }} 副</strong>
        </div>
        <div>
          <span>已出现</span>
          <strong>{{ drawnCards }} 张</strong>
        </div>
        <div>
          <span>剩余</span>
          <strong>{{ remainingCards }} 张</strong>
        </div>
        <div>
          <span>合计</span>
          <strong>{{ formatPercent(probabilityTotal) }}</strong>
        </div>
      </div>

      <div v-if="hasCalculated" class="rank-panel">
        <div class="rank-panel-head">
          <div>
            <h2>记录已出现牌</h2>
            <p>0 代表 10、J、Q、K。</p>
          </div>
          <div class="rank-actions">
            <button class="small-button" type="button" :disabled="history.length === 0" @click="undoLastCard">撤销</button>
            <button class="small-button" type="button" @click="resetCurrentShoe">重置</button>
          </div>
        </div>

        <div class="rank-grid">
          <button
            v-for="rank in rankButtons"
            :key="rank.value"
            class="rank-button"
            type="button"
            :data-testid="`baccarat-rank-${rank.value}`"
            :disabled="rank.remaining <= 0"
            @click="recordCard(rank.value)"
          >
            <strong>{{ rank.label }}</strong>
            <span>{{ rank.detail }}</span>
            <small>已出 {{ rank.drawn }} / 剩 {{ rank.remaining }}</small>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.baccarat-page {
  min-height: calc(100vh - 180px);
}

.baccarat-shell {
  display: grid;
  gap: 22px;
}

.baccarat-heading {
  max-width: 780px;
}

.baccarat-heading h1 {
  margin: 14px 0 12px;
  font-family: var(--font-display);
  font-size: 4rem;
  line-height: 1;
}

.baccarat-heading p:last-child {
  margin: 0;
  color: var(--ink-soft);
  font-size: 1.12rem;
  line-height: 1.7;
}

.baccarat-control {
  display: flex;
  align-items: end;
  gap: 14px;
  width: min(100%, 560px);
  border: 1px solid var(--line);
  border-radius: 26px;
  background: var(--surface);
  box-shadow: var(--shadow);
  padding: 16px;
}

.deck-field {
  display: grid;
  flex: 1;
  gap: 8px;
  color: var(--ink-soft);
  font-weight: 800;
}

.deck-field input {
  width: 100%;
  min-height: 48px;
  border: 1px solid rgba(16, 35, 31, 0.18);
  border-radius: 16px;
  background: var(--control-bg);
  color: var(--ink);
  font-size: 1.2rem;
  font-weight: 900;
  outline: none;
  padding: 0 14px;
}

.deck-field input:focus {
  border-color: var(--cedar);
  box-shadow: 0 0 0 4px rgba(207, 93, 54, 0.14);
}

.baccarat-control .button:disabled {
  cursor: wait;
  opacity: 0.58;
  transform: none;
}

.status-message {
  width: fit-content;
  margin: 0;
  border: 1px solid rgba(207, 93, 54, 0.24);
  border-radius: 999px;
  background: rgba(207, 93, 54, 0.1);
  color: var(--cedar-dark);
  font-weight: 800;
  padding: 9px 14px;
}

.probability-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.probability-card {
  display: grid;
  gap: 14px;
  min-height: 150px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: var(--surface-strong);
  box-shadow: var(--shadow);
  padding: 22px;
}

.probability-card span {
  color: var(--ink-soft);
  font-size: 1rem;
  font-weight: 900;
}

.probability-card strong {
  align-self: end;
  color: var(--ink);
  font-size: 2.6rem;
  line-height: 1;
}

.probability-card.is-banker {
  border-color: rgba(207, 93, 54, 0.26);
}

.probability-card.is-player {
  border-color: rgba(110, 198, 182, 0.48);
}

.probability-card.is-tie {
  border-color: rgba(215, 245, 107, 0.62);
}

.shoe-summary {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.shoe-summary div {
  display: grid;
  gap: 5px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface-soft);
  padding: 14px;
}

.shoe-summary span {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 800;
}

.shoe-summary strong {
  color: var(--ink);
  font-size: 1.15rem;
}

.rank-panel {
  display: grid;
  gap: 18px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--surface);
  box-shadow: var(--shadow);
  padding: 22px;
}

.rank-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.rank-panel h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.8rem;
  line-height: 1.1;
}

.rank-panel p {
  margin: 6px 0 0;
  color: var(--ink-soft);
}

.rank-actions {
  display: flex;
  gap: 8px;
}

.small-button {
  min-height: 38px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--control-bg);
  color: var(--ink);
  cursor: pointer;
  font-weight: 900;
  padding: 0 14px;
}

.small-button:disabled,
.rank-button:disabled {
  cursor: not-allowed;
  opacity: 0.48;
}

.rank-grid {
  display: grid;
  grid-template-columns: repeat(10, minmax(86px, 1fr));
  gap: 10px;
}

.rank-button {
  display: grid;
  gap: 6px;
  min-height: 112px;
  border: 1px solid rgba(16, 35, 31, 0.14);
  border-radius: 18px;
  background: var(--paper-warm);
  color: var(--ink);
  cursor: pointer;
  padding: 12px 10px;
  text-align: left;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.rank-button:hover:not(:disabled) {
  transform: translateY(-2px);
  border-color: rgba(207, 93, 54, 0.42);
  box-shadow: 0 14px 32px rgba(15, 48, 40, 0.1);
}

.rank-button strong {
  font-size: 1.6rem;
  line-height: 1;
}

.rank-button span {
  min-height: 18px;
  color: var(--ink-soft);
  font-size: 0.82rem;
  font-weight: 800;
}

.rank-button small {
  align-self: end;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 800;
}

@media (max-width: 980px) {
  .rank-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .baccarat-heading h1 {
    font-size: 2.45rem;
  }

  .baccarat-control {
    align-items: stretch;
    flex-direction: column;
  }

  .probability-grid,
  .shoe-summary {
    grid-template-columns: 1fr;
  }

  .probability-card strong {
    font-size: 2.1rem;
  }

  .rank-panel-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .rank-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
