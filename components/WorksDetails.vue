<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto overscroll-contain bg-background bg-opacity-70 text-copy"
    @click.self="closeModal"
  >
    <div class="relative m-8 w-full rounded-2xl bg-foreground" @wheel.stop>
      <button
        class="bg-transparent absolute right-2.5 top-2.5 z-[1001] cursor-pointer border-none px-2.5 py-1.5 text-2xl"
        @click="closeModal"
      >
        &times;
      </button>

      <div class="rounded-2xl bg-border">
        <div
          class="relative h-72 w-full overflow-hidden rounded-2xl bg-background"
        >
          <figure>
            <img
              :width="workData.thumbnail.width"
              :height="workData.thumbnail.height"
              :src="workData.thumbnail.url"
              :alt="workData.title"
              class="absolute inset-0 h-full w-full scale-105 transform object-cover blur-sm filter"
            />
          </figure>
          <div class="absolute inset-0 bg-background bg-opacity-50"></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center p-12"
          >
            <h2 class="text-center text-lg font-bold sm:text-3xl">
              {{ workData.title }}
            </h2>
            <span v-if="workData.date" class="mt-4 whitespace-nowrap text-sm">
              公開日:
              <time
                :datetime="workData.date"
                v-text="$dateFns.format(new Date(workData.date), 'yyyy.MM.dd')"
              >
              </time>
            </span>
          </div>
        </div>
        <div
          v-if="workData.images"
          v-for="(i, index) in workData.images"
          :key="`workData[${index}]`"
          :class="{ hidden: index !== activeIndex }"
          class="relative flex items-center justify-center p-8"
        >
          <figure class="h-full w-full">
            <img
              :src="i.url"
              :alt="`${workData.title}(${index})`"
              class="h-auto max-h-[300px] w-full object-contain"
            />
          </figure>
          <div
            v-if="workData.images.length > 1"
            class="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 space-x-2"
          >
            <button
              v-for="(_, indicator_index) in workData.images"
              :key="`indicator_index[${indicator_index}]`"
              :class="
                indicator_index === activeIndex ? 'bg-copy' : 'bg-copy-lighter'
              "
              class="h-3 w-3 rounded-full transition"
              @click="changeSlide(indicator_index)"
            ></button>
          </div>
          <button
            v-if="workData.images.length > 1"
            class="absolute left-10 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-copy-lighter bg-opacity-50 hover:bg-opacity-80"
            @click="prevSlide"
            aria-label="Previous"
          >
            <svg
              class="h-6 w-6"
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
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
          <button
            v-if="workData.images.length > 1"
            class="absolute right-10 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-copy-lighter bg-opacity-50 hover:bg-opacity-80"
            @click="nextSlide"
            aria-label="Next"
          >
            <svg
              class="h-6 w-6"
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
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="m-8 p-8 text-center">
        <div
          class="whitespace-pre-wrap [&>span+span]:before:mx-2 [&>span+span]:before:inline-block [&>span+span]:before:content-['/']"
          v-html="workData.description"
        ></div>
        <div v-if="workData.googleMap" class="mt-8">
          <iframe
            :src="workData.googleMap"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    workData: {
      type: Object,
    },
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        // モーダルが開いた時
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100vh'
        document.body.style.paddingRight = this.getScrollbarWidth() + 'px' // スクロールバーの幅だけpadding-rightを追加

        // Twitterウィジェットの再読み込み
        if (window.twttr && window.twttr.widgets) {
          this.$nextTick(() => {
            window.twttr.widgets.load()
          })
        }
      } else {
        // モーダルが閉じた時
        document.body.style.overflow = ''
        document.body.style.height = ''
        document.body.style.paddingRight = ''
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    // スクロールバーの幅を取得するメソッド
    getScrollbarWidth() {
      const outer = document.createElement('div')
      outer.style.visibility = 'hidden'
      outer.style.overflow = 'scroll'
      document.body.appendChild(outer)

      const inner = document.createElement('div')
      outer.appendChild(inner)

      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
      outer.parentNode.removeChild(outer)

      return scrollbarWidth
    },
    changeSlide(index) {
      this.activeIndex = index
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.workData.images.length
    },
    prevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.workData.images.length) %
        this.workData.images.length
    },
  },
  mounted() {
    // Twitterウィジェットの読み込み
    if (typeof twttr === 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.onload = () => {
        if (window.twttr && twttr.widgets) {
          twttr.widgets.load()
        }
      }
      document.body.appendChild(script)
    } else {
      twttr.widgets.load()
    }
  },
  beforeDestroy() {
    // コンポーネント破棄時にスタイルをリセット
    document.body.style.overflow = ''
    document.body.style.height = ''
    document.body.style.paddingRight = ''
  },
}
</script>
