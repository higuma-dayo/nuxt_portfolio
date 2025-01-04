export const state = () => ({
  works: [],
  histories: [],
  settings: null,
})

export const mutations = {
  setWorks(state, works) {
    state.works = works
  },
  setHistories(state, histories) {
    state.histories = histories
  },
  setSettings(state, settings) {
    state.settings = settings
  },
}

export const actions = {
  async fetchAllData({ commit }) {
    try {
      // 全データを取得する関数
      const getAllItems = async (endpoint, limit = 10) => {
        let allItems = []
        let offset = 0
        let hasMore = true

        while (hasMore) {
          const response = await this.$microcms.get({
            endpoint,
            queries: {
              offset,
              limit,
            },
          })

          allItems = [...allItems, ...response.contents]

          if (response.contents.length < limit) {
            hasMore = false
          }
          offset += limit
        }

        return allItems
      }

      // 並行してデータを取得
      const [works, histories, settings] = await Promise.all([
        getAllItems('works'),
        getAllItems('history'),
        this.$microcms.get({ endpoint: 'settings' }),
      ])

      commit('setWorks', works)
      commit('setHistories', histories)
      commit('setSettings', settings)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  },
}
