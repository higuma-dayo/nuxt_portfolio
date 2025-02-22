<template>
  <header class="fixed z-10">
    <div class="flex w-screen justify-center">
      <div
        class="group relative mt-5 inline-flex rounded-full border-2 border-solid border-primary bg-background p-1"
      >
        <button
          @click="isActiveMenu = !isActiveMenu"
          class="font-pj relative inline-flex h-8 w-28 items-center justify-center rounded-full bg-primary p-2 text-lg font-bold text-primary-content transition-all duration-200"
        >
          Menu
        </button>
        <button
          @click="toggleFastMode"
          :class="fastModeClass"
          class="ml-2 font-pj relative inline-flex h-8 w-28 items-center justify-center rounded-full p-2 text-lg font-bold text-secondary-content transition-all duration-200"
        >
          軽量化
        </button>
      </div>
    </div>
    <div
      v-show="isActiveMenu"
      class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 rounded-2xl border-2 border-solid border-primary bg-background p-1 text-background"
    >
      <div
        class="w-screen max-w-sm flex-auto overflow-hidden rounded-xl bg-primary text-sm"
      >
        <div class="grid grid-cols-2 gap-2 p-4">
          <nuxt-link
            v-scroll-to="'#top'"
            to
            class="menu-link"
            style="width: 100%; padding: 0"
          >
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-background hover:bg-opacity-70"
              @click="isActiveMenu = !isActiveMenu"
            >
              <div
                class="flex size-11 flex-none items-center justify-center rounded-lg bg-background text-primary group-hover:bg-copy group-hover:text-[#525c21]"
              >
                <svg
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
              </div>
              <div>
                <div class="font-bold group-hover:text-copy">Top</div>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            v-scroll-to="'#about'"
            to
            class="menu-link"
            style="width: 100%; padding: 0"
          >
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-background hover:bg-opacity-70"
              @click="isActiveMenu = !isActiveMenu"
            >
              <div
                class="flex size-11 flex-none items-center justify-center rounded-lg bg-background text-primary group-hover:bg-copy group-hover:text-[#525c21]"
              >
                <svg
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <div>
                <div class="font-bold group-hover:text-copy">About</div>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            v-scroll-to="'#history'"
            to
            class="menu-link"
            style="width: 100%; padding: 0"
          >
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-background hover:bg-opacity-70"
              @click="isActiveMenu = !isActiveMenu"
            >
              <div
                class="flex size-11 flex-none items-center justify-center rounded-lg bg-background text-primary group-hover:bg-copy group-hover:text-[#525c21]"
              >
                <svg
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  />
                </svg>
              </div>
              <div>
                <div class="font-bold group-hover:text-copy">History</div>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            v-scroll-to="'#works'"
            to
            class="menu-link"
            style="width: 100%; padding: 0"
          >
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-background hover:bg-opacity-70"
              @click="isActiveMenu = !isActiveMenu"
            >
              <div
                class="flex size-11 flex-none items-center justify-center rounded-lg bg-background text-primary group-hover:bg-copy group-hover:text-[#525c21]"
              >
                <svg
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="font-bold group-hover:text-copy">Works</div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: 900,
      isActiveMenu: false,
      isFastMode: false,
    }
  },
  computed: {
    // TOPページかどうか
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
    // スマホかどうか
    isMobile() {
      return this.windowWidth < 1200
    },
    fastModeClass() {
      return this.isFastMode ? 'bg-secondary' : 'bg-secondary-dark'
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  methods: {
    toggleFastMode() {
      this.isFastMode = !this.isFastMode
      this.$nuxt.$emit('TOGGLE_FAST_MODE')
    }
  }
}
</script>
