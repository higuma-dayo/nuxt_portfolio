<template>
  <div>
    <div class="fixed inset-0 -z-10 h-full w-full" :style="mainVisualStyle">
      <GltfView />
    </div>

    <div id="model-top" style="padding-bottom: 50em">
      <section id="top"></section>
    </div>
    <div id="model-about" class="lg:grid lg:grid-cols-2 2xl:block">
      <div class="lg:col-span-1 lg:col-start-1" style="margin-top: 100em">
        <section id="about">
          <div class="bg-foreground py-2 shadow-2xl lg:rounded-r-2xl">
            <div
              class="flex -translate-x-2 flex-col rounded-r-2xl border-8 border-solid border-background bg-about bg-no-repeat px-10 py-32 max-sm:pt-0 2xl:px-40 2xl:py-64"
              style="background-size: 100% auto"
            >
              <div class="h-48 w-full py-8 sm:hidden">
                <div
                  class="h-full w-[150%] -translate-x-[40%] -skew-x-[25deg] rounded-2xl bg-primary"
                ></div>
              </div>
              <h2
                class="font-rajdhani text-7xl tracking-tight text-copy sm:text-9xl 2xl:text-[18rem]"
              >
                01 About
              </h2>
              <div
                class="relative max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center"
              >
                <div
                  class="absolute z-0 h-full w-full py-8 max-sm:hidden 2xl:py-32"
                >
                  <div
                    class="h-full w-full -translate-x-[55%] -skew-x-[25deg] rounded-2xl bg-primary 2xl:-translate-x-[70%]"
                  ></div>
                </div>
                <div
                  class="relative z-10 my-28 grid-cols-2 items-center px-2.5 max-sm:my-20 sm:grid 2xl:my-56 2xl:grid-cols-3 2xl:px-6"
                >
                  <div
                    class="relative col-span-1 col-start-1 mx-auto max-w-lg sm:-translate-x-1/4"
                  >
                    <input
                      id="image-01"
                      type="radio"
                      name="slider"
                      class="peer/01 sr-only"
                      checked
                    />
                    <input
                      id="image-02"
                      type="radio"
                      name="slider"
                      class="peer/02 sr-only"
                    />
                    <div
                      class="absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-checked/01:relative peer-checked/01:z-50 peer-checked/02:z-40 peer-checked/01:translate-x-0 peer-checked/02:-translate-x-7 peer-checked/02:-translate-y-7 peer-checked/01:scale-100 peer-checked/02:scale-[83.75%] 2xl:peer-checked/02:-translate-x-10 2xl:peer-checked/02:-translate-y-10 peer-checked/01:[&>label]:pointer-events-none peer-focus-visible/01:[&_image]:ring peer-focus-visible/01:[&_image]:ring-copy"
                    >
                      <label
                        class="absolute inset-0 cursor-pointer"
                        for="image-01"
                      ></label>
                      <img
                        class="inset-0 mb-0 mb-4 ml-0 inline-flex !h-32 h-24 !w-32 w-24 rounded-2xl border-4 border-solid border-copy object-cover shadow-2xl 2xl:!h-64 2xl:h-48 2xl:!w-64 2xl:w-48"
                        for="image-01"
                        :src="settings.profileImage.url"
                        :alt="'ProfileImage'"
                      />
                    </div>
                    <div
                      class="absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-checked/02:relative peer-checked/01:z-40 peer-checked/02:z-50 peer-checked/01:translate-x-7 peer-checked/01:translate-y-7 peer-checked/02:translate-x-0 peer-checked/01:scale-[83.75%] peer-checked/02:scale-100 2xl:peer-checked/01:translate-x-10 2xl:peer-checked/01:translate-y-10 peer-checked/02:[&>label]:pointer-events-none peer-focus-visible/02:[&_image]:ring peer-focus-visible/02:[&_image]:ring-copy"
                    >
                      <label
                        class="absolute inset-0 cursor-pointer"
                        for="image-02"
                      ></label>
                      <img
                        class="mb-0 mb-4 ml-0 inline-flex !h-32 h-24 !w-32 w-24 rounded-2xl border-4 border-solid border-copy object-cover shadow-2xl 2xl:!h-64 2xl:h-48 2xl:!w-64 2xl:w-48"
                        :src="settings.subProfileImage.url"
                        :alt="'SubProfileImage'"
                      />
                    </div>
                    <div
                      class="h-6 w-6 scale-x-[-1] transform cursor-pointer text-copy-light sm:text-primary-content 2xl:-ml-6 2xl:h-12 2xl:w-12"
                    >
                      <svg
                        class="h-6 w-6 2xl:h-12 2xl:w-12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 101.8"
                        fill="currentColor"
                        @click="toggleActiveImage"
                      >
                        <path
                          d="M13.56,48.8c-.7-10.22-.24-18.51,3.25-24.34s10.13-9.25,21.58-9.25h2v-5h0c0-2,.36-3.21,1.25-3.7s2.14-.09,3.66,1.36L57.26,19.24A3.44,3.44,0,0,1,58.61,22a4,4,0,0,1-1.48,2.52L45.37,35.78c-1.43,1.44-2.63,1.87-3.61,1.38s-1.35-1.69-1.33-3.59h0V27.49c-11.61-.44-14.11,4.35-14.51,10.72-.12,2-.06,4.23,0,6.46,0,1.44.08,2.89.08,4.12A1.18,1.18,0,0,1,24.83,50H14.73a1.17,1.17,0,0,1-1.17-1.17ZM76.42,0h40.7a5.77,5.77,0,0,1,5.76,5.76V37.4a5.74,5.74,0,0,1-1.69,4.07,3.9,3.9,0,0,1-.38.33,5.68,5.68,0,0,1-3.69,1.36H76.42a5.75,5.75,0,0,1-5.75-5.76V5.76A5.73,5.73,0,0,1,72.35,1.7h0A5.78,5.78,0,0,1,76.42,0ZM5.76,58.64h40.7a5.73,5.73,0,0,1,4,1.69h0a5.75,5.75,0,0,1,1.68,4.06V96a5.74,5.74,0,0,1-1.68,4.07,3.9,3.9,0,0,1-.38.33,5.72,5.72,0,0,1-3.69,1.36H5.76A5.77,5.77,0,0,1,0,96V64.4a5.72,5.72,0,0,1,1.7-4.06h0a5.74,5.74,0,0,1,4.07-1.69Zm97.61-3.51c.7,10.23.24,18.52-3.25,24.35S90,88.72,78.54,88.72H76.49v5h0c0,2-.35,3.21-1.24,3.7s-2.14.09-3.66-1.36L59.67,84.69A3.42,3.42,0,0,1,58.32,82a4.06,4.06,0,0,1,1.48-2.53L71.56,68.16c1.43-1.44,2.63-1.88,3.61-1.38s1.35,1.68,1.32,3.59h0v6.08c11.61.44,14.1-4.35,14.5-10.73.13-2,.07-4.22,0-6.46,0-1.43-.08-2.89-.08-4.12A1.17,1.17,0,0,1,92.09,54h10.1a1.18,1.18,0,0,1,1.18,1.17Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="col-span-1 col-start-2 text-justify text-copy-light max-sm:mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center sm:-skew-x-[25deg] 2xl:col-span-2"
                  >
                    <h1
                      class="mb-5 mt-2 text-5xl font-bold text-primary 2xl:mb-[5rem] 2xl:mt-8 2xl:text-[12rem]"
                    >
                      {{ settings.nickname }}
                    </h1>
                    <h2 class="2xl:mt-8 2xl:text-7xl">
                      name: {{ settings.nameEnglish }}
                    </h2>
                    <h2 class="2xl:mt-8 2xl:text-7xl">
                      business name: {{ settings.bizname }}
                    </h2>
                    <ul class="mt-2 flex flex-row sm:skew-x-[25deg] 2xl:mt-8">
                      <li class="mr-4 2xl:mr-8">
                        <a
                          href="https://github.com/higuma-dayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <svg
                            class="h-6 hover:text-copy-lighter 2xl:h-[3rem]"
                            fill="currentColor"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path
                              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/higuma_dayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="X"
                        >
                          <svg
                            class="h-6 hover:text-copy-lighter 2xl:h-[3rem]"
                            fill="currentColor"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>X</title>
                            <path
                              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span
                class="mb-2 pl-2.5 text-left text-lg font-semibold text-copy sm:mt-10 2xl:mb-4 2xl:pl-10 2xl:text-7xl"
                >Main Skills</span
              >
              <div class="rounded-2xl bg-background p-2.5 2xl:p-5">
                <li
                  v-for="mainSkill in settings.mainSkills"
                  :key="mainSkill.skill"
                  class="m-1 inline-block text-left text-copy-light 2xl:m-2 2xl:text-4xl"
                >
                  <span>{{ mainSkill.skill }}</span>
                </li>
              </div>
              <span
                class="mb-2 mt-8 pl-2.5 text-left text-lg font-semibold text-copy 2xl:mb-4 2xl:pl-10 2xl:text-7xl"
                >Sub Skills</span
              >
              <div class="rounded-2xl bg-background p-2.5 2xl:p-5">
                <li
                  v-for="subSkill in settings.subSkills"
                  :key="subSkill.skill"
                  class="m-1 inline-block text-left text-copy-light 2xl:m-2 2xl:text-4xl"
                >
                  <span>{{ subSkill.skill }}</span>
                </li>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div id="model-history" class="lg:grid lg:grid-cols-2 2xl:block">
      <div class="lg:col-span-1 lg:col-start-2" style="margin-top: 150em">
        <section id="history">
          <History />
        </section>
      </div>
    </div>
    <div id="model-works" class="lg:grid lg:grid-cols-2 2xl:block">
      <div class="lg:col-span-1 lg:col-start-1" style="margin-top: 150em">
        <section id="works">
          <Works />
        </section>
      </div>
    </div>
    <div id="model-bottom" style="padding-bottom: 150em">
      <section id="bottom" />
    </div>

    <div
      class="pointer-events-none fixed inset-0 h-full w-full overflow-hidden"
    >
      <img
        class="h-full w-full object-fill"
        src="/images/crt.png"
        alt="CrtFrame"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('microcms/fetchAllData')

    return {
      settings: store.state.microcms.settings,
    }
  },
  data() {
    return {
      scrollPosition: 0,
      sectionPositions: {},
      splitProgress: 0,
      currentSection: null,
      ishigherLg: false,
      ishigher2xl: false,
      activeImage: 'image-01',
    }
  },
  computed: {
    mainVisualStyle() {
      if (!this.ishigherLg || this.ishigher2xl) return {}
      switch (this.currentSection) {
        case 'model-about':
          return {
            margin: `0 0 0 ${25 * this.splitProgress}%`,
          }
        case 'model-history':
          return {
            margin: `0 0 0 ${25 * (1 - this.splitProgress * 2)}%`,
          }
        case 'model-works':
          return {
            margin: `0 0 0 ${-25 * (1 - this.splitProgress * 2)}%`,
          }
        case 'model-bottom':
          return {
            margin: `0 0 0 ${25 * (1 - this.splitProgress)}%`,
          }
        default:
          return {}
      }
    },
  },
  mounted() {
    // セクションの位置を取得
    this.calculateSectionPositions()

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.calculateSectionPositions)

    // 画面幅の監視 (lg)
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    this.ishigherLg = mediaQuery.matches
    mediaQuery.addEventListener('change', this.handleMediaChange)

    // 画面幅の監視 (2xl)
    const mediaQuery2xl = window.matchMedia('(min-width: 1536px)')
    this.ishigher2xl = mediaQuery2xl.matches
    mediaQuery2xl.addEventListener('change', this.handleMediaChange2xl)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.calculateSectionPositions)

    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    mediaQuery.removeEventListener('change', this.handleMediaChange)

    const mediaQuery2xl = window.matchMedia('(min-width: 1536px)')
    mediaQuery2xl.removeEventListener('change', this.handleMediaChange2xl)
  },
  methods: {
    toggleActiveImage() {
      this.activeImage =
        this.activeImage === 'image-01' ? 'image-02' : 'image-01'

      const radio = document.getElementById(this.activeImage)
      if (radio) {
        radio.checked = true
      }
    },
    handleMediaChange(event) {
      this.ishigherLg = event.matches
    },
    handleMediaChange2xl(event) {
      this.ishigher2xl = event.matches
    },
    calculateSectionPositions() {
      const sections = [
        'model-top',
        'model-about',
        'model-history',
        'model-works',
        'model-bottom',
      ]

      this.sectionPositions = sections.reduce((acc, sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          acc[sectionId] = {
            top: section.offsetTop,
            height: section.offsetHeight,
          }
        }
        return acc
      }, {})
    },
    handleScroll() {
      this.calculateSectionPositions()

      const currentScrollPosition = window.scrollY

      // どのセクションにいるか判定
      const sectionEntries = Object.entries(this.sectionPositions)

      const currentSection = sectionEntries.find(
        ([_, position]) =>
          position && // `position`がundefinedではないことを確認
          currentScrollPosition >= position.top &&
          currentScrollPosition < position.top + position.height,
      )

      if (currentSection) {
        const [sectionName, sectionPosition] = currentSection
        this.currentSection = sectionName

        // 分割の進行度を計算
        const sectionProgress =
          (currentScrollPosition - sectionPosition.top) / sectionPosition.height
        this.splitProgress = Math.min(1, Math.max(0, sectionProgress * 2))
      } else if (
        this.sectionPositions.about &&
        currentScrollPosition < this.sectionPositions.about.top
      ) {
        this.currentSection = null
        this.splitProgress = 0
      } else if (
        this.sectionPositions.works &&
        currentScrollPosition >
          this.sectionPositions.works.top + this.sectionPositions.works.height
      ) {
        this.currentSection = null
        this.splitProgress = 0
      }
    },
  },
}
</script>
