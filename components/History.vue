<template>
  <div>
    <div class="overflow-hidden bg-foreground py-2 shadow-2xl lg:rounded-l-2xl">
      <div
        class="translate-x-2 rounded-l-2xl border-8 border-solid border-background bg-history bg-no-repeat px-10 py-32 2xl:px-40 2xl:py-64"
        style="background-size: 100% auto"
      >
        <h2
          class="font-rajdhani text-7xl tracking-tight text-copy sm:text-9xl 2xl:text-[18rem]"
        >
          02 History
        </h2>
        <div class="relative">
          <div class="absolute z-0 h-full w-full">
            <div
              class="ml-auto h-[200%] w-[20%] -translate-y-7 translate-x-20 -skew-y-[25deg] rounded-l-2xl bg-primary pb-20"
            ></div>
          </div>
          <div class="mt-20 flow-root 2xl:mt-40">
            <ul>
              <li v-for="history in displayedHistories" :key="history.id">
                <div class="relative pb-8 2xl:pb-16">
                  <span
                    class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-secondary 2xl:left-10 2xl:top-10 2xl:-ml-[2px] 2xl:w-1"
                    aria-hidden="true"
                  ></span>
                  <div
                    class="relative flex items-start space-x-3 2xl:space-x-6"
                  >
                    <div>
                      <div class="relative px-1 2xl:px-2">
                        <div
                          class="flex h-8 w-8 items-center justify-center 2xl:h-16 2xl:w-16"
                        >
                          <div
                            class="absolute top-1/2 -mt-3 h-5 w-5 rounded-full bg-secondary 2xl:h-10 2xl:w-10"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="min-w-0 py-0">
                      <div
                        class="text-base text-copy-light max-sm:text-sm 2xl:text-7xl"
                      >
                        <div>
                          <div class="flex flex-row items-center">
                            <span class="font-semibold text-copy">{{
                              history.company[0]
                            }}</span>
                            <span
                              v-if="history.position"
                              class="ml-1 font-medium text-copy 2xl:ml-2 2xl:text-7xl"
                              >({{ history.position }})</span
                            >
                            <div
                              class="relative my-0.5 ml-3 inline-flex items-center rounded-full bg-border px-3 py-0.5 text-sm 2xl:ml-6 2xl:px-6 2xl:py-1 2xl:text-3xl"
                            >
                              <div class="font-bold text-primary-light">
                                {{ history.employmentType[0] }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-1 flex flex-row 2xl:mt-4">
                          <span
                            class="whitespace-nowrap text-sm max-sm:text-xs 2xl:text-3xl"
                          >
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
                          <span
                            class="mx-2 whitespace-nowrap text-sm max-sm:text-xs 2xl:text-3xl"
                            >~</span
                          >
                          <span
                            v-if="history.end"
                            class="whitespace-nowrap text-sm max-sm:text-xs 2xl:text-3xl"
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
                          <span
                            v-else
                            class="whitespace-nowrap text-sm max-sm:text-xs 2xl:text-3xl"
                            >現在</span
                          >
                        </div>
                      </div>
                      <div
                        class="mt-4 grid grid-cols-1 text-copy-light max-sm:text-sm 2xl:mt-8"
                      >
                        <div>
                          <span
                            class="text-left text-sm font-semibold text-copy 2xl:text-3xl"
                            >職種</span
                          >
                          <p class="2xl:mt-2 2xl:text-2xl">
                            {{ history.occupation }}
                          </p>
                        </div>
                        <div class="mt-5 2xl:mt-10">
                          <span
                            class="text-left text-sm font-semibold text-copy 2xl:text-3xl"
                            >プロジェクト</span
                          >
                          <p class="2xl:mt-2 2xl:text-2xl">
                            {{ history.title }}
                          </p>
                        </div>
                        <ul class="mt-2 list-none py-1 2xl:mt-4">
                          <li
                            v-for="work in history.works"
                            :key="work"
                            class="my-1 mr-2 inline-block -skew-x-[25deg] rounded-md bg-border px-3 py-1 text-left text-sm shadow-sm max-sm:text-xs 2xl:text-2xl"
                          >
                            <div class="skew-x-[25deg]">
                              <span>{{ work }}</span>
                            </div>
                          </li>
                        </ul>
                        <div class="mt-5 flex items-center 2xl:mt-10">
                          <div>
                            <a
                              href="#"
                              class="text-left text-xs font-bold 2xl:text-2xl"
                              @click.prevent="openHistoryModal(history)"
                            >
                              もっと詳しく
                            </a>
                          </div>
                          <svg
                            class="h-4 w-4 2xl:h-7 2xl:w-7"
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
          <div class="mt-20 text-center 2xl:mt-40">
            <button
              v-if="hasMoreData"
              v-on:click="loadMore"
              class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-solid border-border bg-foreground px-6 font-medium text-copy transition-all duration-100 [box-shadow:5px_5px_rgb(0_199_127)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(0_199_127)] 2xl:h-24 2xl:px-12 2xl:text-4xl 2xl:[box-shadow:10px_10px_rgb(0_199_127)] 2xl:hover:translate-x-[6px] 2xl:hover:translate-y-[6px]"
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
  components: {
    HistoryDetails,
  },
  data() {
    return {
      displayedHistories: [],
      currentIndex: 0,
      limit: 3, // 1回で取得するデータの数
      isModalOpen: false,
      selectedHistory: null,
    }
  },
  computed: {
    allHistories() {
      return this.$store.state.microcms.histories
    },
    hasMoreData() {
      return this.currentIndex < this.allHistories.length
    },
  },
  created() {
    // 初期データを取得
    this.loadMore()
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
    // 追加データ取得(3件ずつ)
    loadMore() {
      const newItems = this.allHistories.slice(
        this.currentIndex,
        this.currentIndex + this.limit,
      )
      this.displayedHistories = [...this.displayedHistories, ...newItems]
      this.currentIndex += this.limit
    },
  },
}
</script>
