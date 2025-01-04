<template>
  <div>
    <div class="overflow-hidden bg-foreground py-2 shadow-2xl lg:rounded-l-2xl">
      <div
        class="translate-x-2 rounded-l-2xl bg-history bg-no-repeat border-8 border-solid border-background px-10 py-32"
        style="background-size: 100% auto"
      >
        <h2 class="font-rajdhani text-7xl tracking-tight text-copy sm:text-9xl">
          02 History
        </h2>
        <div class="relative">
          <div class="absolute z-0 h-full w-full">
            <div
              class="ml-auto h-[200%] w-[20%] -translate-y-7 translate-x-20 -skew-y-[25deg] rounded-l-2xl bg-primary pb-20"
            ></div>
          </div>
          <div class="mt-20 flow-root">
            <ul>
              <li v-for="history in histories" :key="history.id">
                <div class="relative pb-8">
                  <span
                    class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-secondary"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex items-start space-x-3">
                    <div>
                      <div class="relative px-1">
                        <div class="flex h-8 w-8 items-center justify-center">
                          <div
                            class="absolute top-1/2 -mt-3 h-5 w-5 rounded-full bg-secondary"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="min-w-0 py-0">
                      <div class="text-md text-copy-light">
                        <div>
                          <div class="flex flex-row items-center">
                            <span class="font-semibold text-copy">{{
                              history.company[0]
                            }}</span>
                            <span
                              v-if="history.position"
                              class="ml-1 font-medium text-copy"
                              >({{ history.position }})</span
                            >
                            <div
                              class="relative my-0.5 ml-3 inline-flex items-center rounded-full bg-border px-3 py-0.5 text-sm"
                            >
                              <div class="font-bold text-primary-light">
                                {{ history.employmentType[0] }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-1 flex flex-row">
                          <span class="whitespace-nowrap text-sm">
                            <time
                              :datetime="history.start"
                              v-text="
                                $dateFns.format(
                                  new Date(history.start),
                                  'yyyy.MM.dd',
                                )
                              "
                            >
                            </time>
                          </span>
                          <span class="mx-2 whitespace-nowrap text-sm">~</span>
                          <span
                            v-if="history.end"
                            class="whitespace-nowrap text-sm"
                          >
                            <time
                              :datetime="history.end"
                              v-text="
                                $dateFns.format(
                                  new Date(history.end),
                                  'yyyy.MM.dd',
                                )
                              "
                            >
                            </time>
                          </span>
                          <span v-else class="whitespace-nowrap text-sm"
                            >現在</span
                          >
                        </div>
                      </div>
                      <div class="mt-4 grid grid-cols-1 text-copy-light">
                        <span class="text-left text-sm font-semibold text-copy"
                          >職種</span
                        >
                        <p>{{ history.occupation }}</p>
                        <span
                          class="mt-5 text-left text-sm font-semibold text-copy"
                          >プロジェクト</span
                        >
                        <p>{{ history.title }}</p>
                        <div class="mt-2 py-1">
                          <li
                            v-for="work in history.works"
                            :key="work"
                            class="my-1 mr-2 inline-block -skew-x-[25deg] rounded-md bg-border px-3 py-1 text-left text-sm shadow-sm"
                          >
                            <div class="skew-x-[25deg]">
                              <span>{{ work }}</span>
                            </div>
                          </li>
                        </div>
                        <div class="mt-5 flex items-center">
                          <a
                            href="#"
                            class="text-left text-xs font-bold"
                            @click.prevent="openHistoryModal(history)"
                          >
                            もっと詳しく
                          </a>
                          <svg
                            class="h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="mt-20 text-center">
            <button
              v-if="hasMoreData"
              v-on:click="loadMore"
              class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-solid border-border bg-foreground px-6 font-medium text-copy transition-all duration-100 [box-shadow:5px_5px_rgb(0_199_127)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(0_199_127)]"
            >
              もっと見る
            </button>
          </div>
        </div>
      </div>
    </div>
    <HistoryDetails
      :isOpen="isModalOpen"
      :historyData="selectedHistory"
      @close="closeHistoryModal"
    />
  </div>
</template>

<script>
import HistoryDetails from './HistoryDetails.vue'

export default {
  props: {
    slideStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    HistoryDetails,
  },
  data() {
    return {
      histories: [], // 初期のデータを格納する配列
      offset: 0, // オフセットの初期値
      limit: 3, // 1回で取得するデータの数
      hasMoreData: true, // データがまだあるかどうかを判定
      isModalOpen: false,
      selectedHistory: null,
    }
  },
  async created() {
    // 初期データを取得
    try {
      const data = await this.$microcms.get({
        endpoint: 'history',
        queries: {
          offset: this.offset,
          limit: this.limit,
        },
      })
      this.histories = data.contents

      // データがlimit未満ならボタンを表示しない
      if (data.contents.length < this.limit) {
        this.hasMoreData = false
      }
    } catch (error) {
      console.error('Error fetching histories:', error)
    }
  },
  methods: {
    openHistoryModal(historyData) {
      this.selectedHistory = historyData
      this.isModalOpen = true
    },
    closeHistoryModal() {
      this.isModalOpen = false
      this.selectedHistory = null
    },
    // 追加データ取得(10件ずつ)
    async loadMore() {
      // offsetを更新して次のデータを取得
      this.offset += this.limit
      const newData = await this.$microcms.get({
        endpoint: 'history',
        queries: {
          offset: this.offset,
          limit: this.limit,
        },
      })
      // 新しく取得したデータを既存のhistoriesに追加
      this.histories = [...this.histories, ...newData.contents]

      // 取得したデータがlimit未満の場合はhasMoreDataをfalseにしてボタンを非表示
      if (newData.contents.length < this.limit) {
        this.hasMoreData = false
      }
    },
  },
}
</script>
