<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto overscroll-contain bg-background bg-opacity-70 p-8 text-copy 2xl:p-32"
    @click.self="closeModal"
  >
    <div class="relative h-auto w-screen rounded-2xl bg-foreground" @wheel.stop>
      <button
        class="bg-transparent absolute right-2.5 top-2.5 z-[1001] cursor-pointer border-none px-2.5 py-1.5 text-2xl 2xl:right-5 2xl:top-5 2xl:px-5 2xl:py-3 2xl:text-4xl"
        @click="closeModal"
      >
        &times;
      </button>

      <div class="rounded-2xl bg-border">
        <div
          class="relative h-72 w-full overflow-hidden rounded-2xl bg-background 2xl:h-[36rem]"
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
            <h2
              class="text-center text-base font-bold sm:text-3xl 2xl:text-7xl"
            >
              {{ workData.title }}
            </h2>
            <span
              v-if="workData.date"
              class="mt-4 whitespace-nowrap text-sm max-sm:text-xs 2xl:mt-8 2xl:text-3xl"
            >
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
          class="relative flex items-center justify-center p-8 2xl:p-16"
        >
          <figure class="h-full w-full">
            <img
              :src="i.url"
              :alt="`${workData.title}(${index})`"
              class="h-[300px] w-full object-contain 2xl:h-[600px]"
            />
          </figure>
          <div
            v-if="workData.images.length > 1"
            class="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 space-x-2 2xl:bottom-20 2xl:space-x-4"
          >
            <button
              v-for="(_, indicator_index) in workData.images"
              :key="`indicator_index[${indicator_index}]`"
              :class="
                indicator_index === activeIndex ? 'bg-copy' : 'bg-copy-lighter'
              "
              class="h-3 w-3 rounded-full transition 2xl:h-6 2xl:w-6"
              @click="changeSlide(indicator_index)"
            ></button>
          </div>
          <button
            v-if="workData.images.length > 1"
            class="absolute left-10 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-copy-lighter bg-opacity-50 hover:bg-opacity-80 2xl:h-16 2xl:w-16"
            @click="prevSlide"
            aria-label="Previous"
          >
            <svg
              class="h-6 w-6 2xl:h-12 2xl:w-12"
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
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
          <button
            v-if="workData.images.length > 1"
            class="absolute right-10 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-copy-lighter bg-opacity-50 hover:bg-opacity-80 2xl:h-16 2xl:w-16"
            @click="nextSlide"
            aria-label="Next"
          >
            <svg
              class="h-6 w-6 2xl:h-12 2xl:w-12"
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
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="m-8 text-center max-sm:text-sm sm:p-8 2xl:m-16 2xl:p-16 2xl:text-3xl"
      >
        <div
          class="whitespace-pre-wrap [&>span+span]:before:mx-2 [&>span+span]:before:inline-block [&>span+span]:before:content-['/'] 2xl:[&>span+span]:before:mx-4"
          v-html="workData.description"
        ></div>
        <div v-if="workData.googleMap" class="mt-8 2xl:mt-16">
          <iframe
            class="mx-auto aspect-[16/9] w-[50%] max-sm:w-full"
            :src="workData.googleMap"
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
    'workData.description': {
      immediate: true,
      handler() {
        this.loadIframely()
      },
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
    loadIframely() {
      if (typeof window !== 'undefined' && window.iframely) {
        this.$nextTick(() => {
          window.iframely.load()
        })
      }
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
