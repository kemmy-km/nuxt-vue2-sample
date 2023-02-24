export const state = () => ({
  counter: 0,
  message: "これはVuexストアのstateに定義されている文字列です",
})

// export const getters = {
// }

export const mutations = {
  countUp: function (state) {
    state.counter++
  },
  countReset: function (state) {
    state.counter = 0
  }
}

// export const actions = {
// }
