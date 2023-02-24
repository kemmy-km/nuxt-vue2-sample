import jsonData from '~/assets/json/menu.json'
// import { FETCH_JSON_URL } from '~/constants/common.js'
// https://qiita.com/hiroyukiwk/items/badc53274da94ff3865b

/**
 * Vuex モジュールモード
 */

// 状態の管理
export const state = () => ({
  data: jsonData,
  jsonFetchData: {},
})

// stateをgetする
export const getters = {
  getAll: (state) => {
    return state.data
  },

  getFetchAll: (state) => {
    return state.jsonFetchData
  },
}

// 状態変更
export const mutations = {
  // setJson: (state, jsonFetchData) => (state.jsonFetchData = jsonFetchData)
  // NOTE 下記の省略形が上記（ES6の省略構文）
  setJson: (state, jsonFetchData) => {
    state.jsonFetchData = jsonFetchData
  }
}

// API、非同期通信を行い、mutationsのメソッドを`commit()`メソッドで呼び出す
export const actions = {
  async fetchJson({ commit }) {
    // NOTE ここでは`fetch()`メソッドで非同期通信をしているが、現場では`axios.get()`で呼び出すことが多い
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    // const response = await fetch(FETCH_JSON_URL) // 定数読み込みをするのが理想だが、できないため断念
    const fetchedJsonData = await response.json()
    // console.log(fetchedJsonData) //
    commit("setJson", fetchedJsonData)
  }
}
