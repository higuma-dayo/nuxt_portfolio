<template>
  <div>
    <div class="fixed inset-0 -z-10 h-full w-full" :style="mainVisualStyle">
      <GltfView />
    </div>

    <div id="model-top" style="padding-bottom: 50em">
      <section id="top"></section>
    </div>
    <div id="model-about" class="lg:grid lg:grid-cols-2">
      <div class="lg:col-span-1 lg:col-start-1" style="margin-top: 100em">
        <section id="about">
          <div class="bg-foreground py-2 shadow-2xl lg:rounded-r-2xl">
            <div
              class="flex -translate-x-2 flex-col rounded-r-2xl border-8 border-solid border-background bg-about bg-no-repeat px-10 py-32 max-sm:pt-0"
              style="background-size: 100% auto"
            >
              <div class="h-48 w-full py-8 sm:hidden">
                <div
                  class="h-full w-[150%] -translate-x-[40%] -skew-x-[25deg] rounded-2xl bg-primary"
                ></div>
              </div>
              <h2
                class="font-rajdhani text-7xl tracking-tight text-copy sm:text-9xl"
              >
                01 About
              </h2>
              <div
                class="relative max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center"
              >
                <div class="absolute z-0 h-full w-full py-8 max-sm:hidden">
                  <div
                    class="h-full w-full -translate-x-[55%] -skew-x-[25deg] rounded-2xl bg-primary"
                  ></div>
                </div>
                <div
                  class="relative z-10 my-28 grid-cols-2 items-center px-2.5 max-sm:my-20 sm:grid"
                >
                  <div
                    class="relative col-span-1 col-start-1 mx-auto max-w-lg sm:-translate-x-1/4"
                  >
                    <input
                      id="article-01"
                      type="radio"
                      name="slider"
                      class="peer/01 sr-only"
                      checked
                    />
                    <input
                      id="article-02"
                      type="radio"
                      name="slider"
                      class="peer/02 sr-only"
                    />
                    <div
                      class="absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-checked/01:relative peer-checked/01:z-50 peer-checked/02:z-40 peer-checked/01:translate-x-0 peer-checked/02:-translate-x-5 peer-checked/02:-translate-y-5 peer-checked/01:scale-100 peer-checked/02:scale-[83.75%] peer-checked/01:[&>label]:pointer-events-none peer-focus-visible/01:[&_article]:ring peer-focus-visible/01:[&_article]:ring-copy"
                    >
                      <label class="absolute inset-0" for="article-01"></label>
                      <img
                        class="inset-0 mb-0 mb-4 ml-0 inline-flex !h-32 h-24 !w-32 w-24 rounded-2xl border-4 border-solid border-copy object-cover shadow-2xl"
                        for="article-01"
                        :src="settings.profileImage.url"
                        :alt="'ProfileImage'"
                      />
                    </div>
                    <div
                      class="absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-checked/02:relative peer-checked/01:z-40 peer-checked/02:z-50 peer-checked/01:translate-x-5 peer-checked/01:translate-y-5 peer-checked/02:translate-x-0 peer-checked/01:scale-[83.75%] peer-checked/02:scale-100 peer-checked/02:[&>label]:pointer-events-none peer-focus-visible/02:[&_article]:ring peer-focus-visible/02:[&_article]:ring-copy"
                    >
                      <label class="absolute inset-0" for="article-02"></label>
                      <img
                        class="mb-0 mb-4 ml-0 inline-flex !h-32 h-24 !w-32 w-24 rounded-2xl border-4 border-solid border-copy object-cover shadow-2xl"
                        :src="settings.subProfileImage.url"
                        :alt="'SubProfileImage'"
                      />
                    </div>
                  </div>
                  <div
                    class="col-span-1 col-start-2 text-justify text-copy-light max-sm:mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center sm:-skew-x-[25deg]"
                  >
                    <h1 class="mb-5 mt-2 text-5xl font-bold text-primary">
                      {{ settings.nickname }}
                    </h1>
                    <h2>name: {{ settings.nameEnglish }}</h2>
                    <h2>business name: {{ settings.bizname }}</h2>
                    <ul class="mt-2 flex flex-row sm:skew-x-[25deg]">
                      <li class="mr-4">
                        <a
                          href="https://github.com/higuma-dayo"
                          target="_blank"
                          aria-label="GitHub"
                        >
                          <svg
                            class="h-6 hover:text-copy-lighter"
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
                          aria-label="X"
                        >
                          <svg
                            class="h-6 hover:text-copy-lighter"
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
                class="mb-2 pl-2.5 text-left text-lg font-semibold text-copy sm:mt-10"
                >Main Skills</span
              >
              <div class="rounded-2xl bg-background p-2.5">
                <li
                  v-for="mainSkill in settings.mainSkills"
                  :key="mainSkill.skill"
                  class="m-1 inline-block text-left text-copy-light"
                >
                  <span>{{ mainSkill.skill }}</span>
                </li>
              </div>
              <span
                class="mb-2 mt-5 mt-8 pl-2.5 text-left text-lg font-semibold text-copy"
                >Sub Skills</span
              >
              <div class="rounded-2xl bg-background p-2.5">
                <li
                  v-for="subSkill in settings.subSkills"
                  :key="subSkill.skill"
                  class="m-1 inline-block text-left text-copy-light"
                >
                  <span>{{ subSkill.skill }}</span>
                </li>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div id="model-history" class="lg:grid lg:grid-cols-2">
      <div class="lg:col-span-1 lg:col-start-2" style="margin-top: 150em">
        <section id="history">
          <History />
        </section>
      </div>
    </div>
    <div id="model-works" class="lg:grid lg:grid-cols-2">
      <div class="lg:col-span-1 lg:col-start-1" style="margin-top: 150em">
        <section id="works">
          <Works />
        </section>
      </div>
    </div>
    <div id="model-bottom" style="padding-bottom: 100em">
      <section id="bottom" />
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
    }
  },
  computed: {
    mainVisualStyle() {
      if (!this.ishigherLg) return {}
      switch (this.currentSection) {
        case 'model-about':
          return {
            margin: `0 0 0 ${50 * this.splitProgress}%`,
            width: `${50 + 50 * (1 - this.splitProgress)}%`,
          }
        case 'model-history':
          return {
            margin: `0 0 0 ${50 * (1 - this.splitProgress)}%`,
            width: `50%`,
          }
        case 'model-works':
          return {
            margin: `0 0 0 ${50 * this.splitProgress}%`,
            width: `50%`,
          }
        case 'model-bottom':
          return {
            margin: `0 0 0 ${50 * (1 - this.splitProgress)}%`,
            width: `${50 + 50 * this.splitProgress}%`,
          }
        default:
          return {}
      }
    },
    // aboutSlideStyle() {
    //   return {
    //     transform: `translateX(${-100 + this.splitProgress * 100}%)`,
    //   }
    // },
    // historySlideStyle() {
    //   return {
    //     transform: `translateX(${100 - this.splitProgress * 100}%)`,
    //   }
    // },
    // worksSlideStyle() {
    //   return {
    //     transform: `translateX(${-100 + this.splitProgress * 100}%)`,
    //   }
    // },
  },
  mounted() {
    // セクションの位置を取得
    this.calculateSectionPositions()

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.calculateSectionPositions)

    // 画面幅の監視
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    this.ishigherLg = mediaQuery.matches
    mediaQuery.addEventListener('change', this.handleMediaChange)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.calculateSectionPositions)

    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    mediaQuery.removeEventListener('change', this.handleMediaChange)
  },
  methods: {
    handleMediaChange(event) {
      this.ishigherLg = event.matches
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
