<template>
  <div>
    <div class="bg-foreground py-2 shadow-2xl lg:rounded-r-2xl">
      <div
        class="flex -translate-x-2 flex-col rounded-r-2xl border-8 border-solid border-background bg-works bg-no-repeat px-10 py-32"
        style="background-size: 100% auto"
      >
        <h2 class="font-rajdhani text-7xl tracking-tight text-copy sm:text-9xl">
          03 Works
        </h2>
        <div
          class="relative mt-20 w-full overflow-hidden rounded-full border-4 border-primary bg-foreground text-sm font-bold max-sm:text-[0.6rem]"
        >
          <div
            class="flex w-[105%] flex-auto -translate-x-[2.5%] transform justify-evenly text-copy"
          >
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none py-1 pl-5 pr-2"
              :class="{ 'bg-primary text-foreground': !filterFlg }"
              @click="filterReset"
            >
              <div class="skew-x-[25deg]">
                <label class="cursor-pointer">All</label>
              </div>
            </button>
            <button
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1"
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
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1"
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
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1"
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
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none px-2 py-1 max-sm:pr-5"
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
              class="w-full -skew-x-[25deg] cursor-pointer rounded-md border-none py-1 pl-2 pr-5 max-sm:hidden"
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
          class="mt-10 grid list-none grid-cols-2 gap-6 rounded-xl p-2.5 text-copy-light max-[400px]:grid-cols-1 sm:grid-cols-3"
        >
          <li v-for="work in filteredWorks" :key="work.id" class="w-full">
            <a
              href="#"
              class="relative block h-52 rounded-xl bg-border"
              @click.prevent="openWorkModal(work)"
            >
              <div class="rounded-xl bg-secondary">
                <figure class="overflow-hidden rounded-xl">
                  <img
                    :width="work.thumbnail.width"
                    :height="work.thumbnail.height"
                    :src="work.thumbnail.url"
                    :alt="work.title"
                    class="duration-400 inset-0 h-24 w-full object-cover transition-all delay-300 ease-in hover:scale-125"
                  />
                </figure>
                <p class="py-1 pl-2 text-xs font-bold text-border">
                  <time
                    :datetime="work.date"
                    v-text="$dateFns.format(new Date(work.date), 'yyyy.MM.dd')"
                  />
                </p>
              </div>
              <div class="h-14 p-2">
                <p class="line-clamp-2 text-sm font-bold">{{ work.title }}</p>
              </div>
              <div class="flex items-center p-2">
                <span class="ml-auto text-left text-xs font-bold">
                  もっと詳しく
                </span>
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
            </a>
          </li>
        </ol>
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
