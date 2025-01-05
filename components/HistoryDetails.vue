<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto overscroll-contain bg-background bg-opacity-70 text-copy"
    @click.self="closeModal"
  >
    <div class="relative m-8 rounded-2xl bg-foreground" @wheel.stop>
      <button
        class="absolute right-2.5 top-2.5 z-[1001] cursor-pointer border-none px-2.5 py-1.5 text-2xl"
        @click="closeModal"
      >
        &times;
      </button>

      <div class="rounded-2xl bg-border px-12 py-16">
        <h2 class="text-base font-bold sm:text-3xl">{{ historyData.title }}</h2>
        <div class="mt-2 flex flex-row">
          <span class="whitespace-nowrap text-sm">
            <time
              :datetime="historyData.start"
              v-text="
                $dateFns.format(new Date(historyData.start), 'yyyy.MM.dd')
              "
            >
            </time>
          </span>
          <span class="mx-2 whitespace-nowrap text-sm">~</span>
          <span v-if="historyData.end" class="whitespace-nowrap text-sm">
            <time
              :datetime="historyData.end"
              v-text="$dateFns.format(new Date(historyData.end), 'yyyy.MM.dd')"
            >
            </time>
          </span>
          <span v-else class="whitespace-nowrap text-sm">現在</span>
        </div>
      </div>

      <div class="space-y-12 py-16 pl-8 pr-12 max-sm:pl-1 max-sm:pr-3">
        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex h-12 w-12 items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M15.2 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11.2a1 1 0 0 0 .747-.334l4.46-5a1 1 0 0 0 0-1.332l-4.46-5A1 1 0 0 0 15.2 6Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h4 class="text-lg font-medium max-sm:text-sm">作業内容</h4>
            <div class="mt-2">
              <li
                v-for="work in historyData.works"
                :key="work"
                class="my-1 mr-2 inline-block -skew-x-[25deg] rounded-md bg-primary px-3 py-1 text-left text-sm text-foreground shadow-sm max-sm:text-xs"
              >
                <div class="skew-x-[25deg] max-sm:text-xs">
                  <span>{{ work }}</span>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex h-12 w-12 items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 7h14M5 12h14M5 17h10"></path>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h4 class="text-lg font-medium max-sm:text-sm">業務内容</h4>
            <span
              class="mt-2 whitespace-pre-line max-sm:text-xs"
              v-html="historyData.description"
            ></span>
          </div>
        </div>
        <div v-if="historyData.remarks" class="flex">
          <div class="flex-shrink-0">
            <div class="flex h-12 w-12 items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h4 class="text-lg font-medium max-sm:text-sm">備考</h4>
            <span
              class="mt-2 whitespace-pre-line max-sm:text-xs"
              v-html="historyData.remarks"
            ></span>
          </div>
        </div>
        <div v-if="historyData.tools" class="flex">
          <div class="flex-shrink-0">
            <div class="flex h-12 w-12 items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h4 class="text-lg font-medium max-sm:text-sm">
              使用言語/ツール等
            </h4>
            <span
              class="mt-2 whitespace-pre-line max-sm:text-xs"
              v-html="historyData.tools"
            ></span>
          </div>
        </div>
        <div v-if="historyData.url" class="flex">
          <div class="flex-shrink-0">
            <div class="flex h-12 w-12 items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                ></path>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h4 class="text-lg font-medium max-sm:text-sm">URL</h4>
            <p class="mt-2 max-sm:text-xs">{{ historyData.url }}</p>
          </div>
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
    historyData: {
      type: Object,
    },
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        // モーダルが開いた時
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100vh'
        document.body.style.paddingRight = this.getScrollbarWidth() + 'px' // スクロールバーの幅だけpadding-rightを追加
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
  },
  beforeDestroy() {
    // コンポーネント破棄時にスタイルをリセット
    document.body.style.overflow = ''
    document.body.style.height = ''
    document.body.style.paddingRight = ''
  },
}
</script>
