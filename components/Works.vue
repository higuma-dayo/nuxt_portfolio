<template>
  <div>
    <div class="bg-foreground py-2 shadow-2xl lg:rounded-r-2xl">
      <div
        class="flex -translate-x-2 flex-col rounded-r-2xl border-8 border-solid border-background bg-works bg-no-repeat px-10 py-32 2xl:px-40 2xl:py-64"
        style="background-size: 100% auto"
      >
        <h2
          class="font-rajdhani text-7xl tracking-tight text-copy sm:text-9xl 2xl:text-[18rem]"
        >
          03 Shumi
        </h2>
        <div
          class="relative mt-20 w-full overflow-hidden rounded-full border-4 border-primary bg-foreground text-sm font-bold max-sm:text-[0.6rem] 2xl:mt-40 2xl:text-3xl"
        >
          <div
            class="flex w-[105%] flex-auto -translate-x-[2.5%] transform justify-evenly text-copy"
          >
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none py-1 pl-5 pr-2 2xl:py-2 2xl:pl-10 2xl:pr-4"
              :class="{ 'bg-primary text-foreground': !filterFlg }"
              @click="filterReset"
            >
              <div class="skew-x-[25deg]">
                <label class="cursor-pointer">All</label>
              </div>
            </button>
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1 2xl:px-4 2xl:py-2"
              :class="{
                'bg-primary text-primary-content':
                  filterFlg && filterContentsType === 'code',
              }"
              @click="filterByContentsType('code')"
            >
              <div class="skew-x-[25deg]">
                <label class="cursor-pointer">Code</label>
              </div>
            </button>
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1 2xl:px-4 2xl:py-2"
              :class="{
                'bg-primary text-foreground':
                  filterFlg && filterContentsType === 'model',
              }"
              @click="filterByContentsType('model')"
            >
              <div class="skew-x-[25deg]">
                <label class="cursor-pointer">Model</label>
              </div>
            </button>
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1 2xl:px-2 2xl:py-2"
              :class="{
                'bg-primary text-foreground':
                  filterFlg && filterContentsType === 'photo',
              }"
              @click="filterByContentsType('photo')"
            >
              <div class="skew-x-[25deg]">
                <label class="cursor-pointer">Photo</label>
              </div>
            </button>
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1 max-sm:pr-5 2xl:px-2 2xl:py-2"
              :class="{
                'bg-primary text-foreground':
                  filterFlg && filterContentsType === 'article',
              }"
              @click="filterByContentsType('article')"
            >
              <div class="skew-x-[25deg]">
                <label class="cursor-pointer">Article</label>
              </div>
            </button>
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none py-1 pl-2 pr-5 max-sm:hidden 2xl:py-2 2xl:pl-4 2xl:pr-10"
              :class="{
                'bg-primary text-foreground':
                  filterFlg && filterContentsType === 'other',
              }"
              @click="filterByContentsType('other')"
            >
              <div class="skew-x-[25deg]">
                <label class="cursor-pointer">Other</label>
              </div>
            </button>
          </div>
        </div>
        <ol
          class="mt-10 grid list-none grid-cols-2 gap-6 rounded-xl p-2.5 text-copy-light max-[400px]:grid-cols-1 sm:grid-cols-3 2xl:mt-20 2xl:grid-cols-4 2xl:p-5 min-[3000px]:grid-cols-5"
        >
          <li v-for="work in filteredWorks" :key="work.id" class="w-full">
            <a
              href="#"
              class="relative block h-52 rounded-xl bg-border 2xl:h-[26rem]"
              @click.prevent="openWorkModal(work)"
            >
              <div class="rounded-xl bg-secondary">
                <figure class="overflow-hidden rounded-xl">
                  <img
                    :width="work.thumbnail.width"
                    :height="work.thumbnail.height"
                    :src="work.thumbnail.url"
                    :alt="work.title"
                    class="duration-400 inset-0 h-24 w-full object-cover transition-all delay-300 ease-in hover:scale-125 2xl:h-48"
                  />
                </figure>
                <p
                  class="py-1 pl-2 text-xs font-bold text-border 2xl:py-2 2xl:pl-4 2xl:text-2xl"
                >
                  <time
                    :datetime="work.date"
                    v-text="$dateFns.format(new Date(work.date), 'yyyy.MM.dd')"
                  />
                </p>
              </div>
              <div class="h-14 p-2 2xl:h-28 2xl:p-4">
                <p class="line-clamp-2 text-sm font-bold 2xl:text-3xl">
                  {{ work.title }}
                </p>
              </div>
              <div class="flex items-center p-2 2xl:p-4">
                <span class="ml-auto text-left text-xs font-bold 2xl:text-2xl">
                  もっと詳しく
                </span>
                <svg
                  class="h-4 w-4 2xl:h-8 2xl:w-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
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
            </a>
          </li>
        </ol>
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
    <WorksDetails
      :isOpen="isModalOpen"
      :workData="selectedWork"
      @close="closeWorkModal"
    />
  </div>
</template>

<script>
import WorkModal from './WorksDetails.vue'

export default {
  components: {
    WorkModal,
  },
  data() {
    return {
      filterContentsType: '',
      filterFlg: false,
      displayedWorks: [], // 表示用の配列
      currentIndex: 0,
      limit: 10, // 1回で取得するデータの数
      isModalOpen: false,
      selectedWork: null,
    }
  },
  computed: {
    allWorks() {
      return this.$store.state.microcms.works
    },
    filteredWorks() {
      if (!this.filterFlg) return this.displayedWorks
      return this.displayedWorks.filter((work) =>
        work.type.includes(this.filterContentsType),
      )
    },
    hasMoreData() {
      return this.currentIndex < this.allWorks.length
    },
  },
  created() {
    // 初期データを取得
    this.loadMore()
  },
  methods: {
    openWorkModal(workData) {
      this.selectedWork = workData
      this.isModalOpen = true
    },
    closeWorkModal() {
      this.isModalOpen = false
      this.selectedWork = null
    },
    // カテゴリーで絞る
    async filterByContentsType(contentsType) {
      this.filterContentsType = contentsType
      this.filterFlg = true

      // データを取得しながら、filteredWorksにデータが追加されるまで繰り返す
      while (this.filteredWorks.length === 0 && this.hasMoreData) {
        this.loadMore()
        // filteredWorksが更新されるのを待つ
        await this.$nextTick()
      }
    },
    // フィルターをリセット
    filterReset() {
      this.filterFlg = false
    },
    // 追加データ取得(10件ずつ)
    loadMore() {
      const newItems = this.allWorks.slice(
        this.currentIndex,
        this.currentIndex + this.limit,
      )
      this.displayedWorks = [...this.displayedWorks, ...newItems]
      this.currentIndex += this.limit
    },
  },
}
</script>
