import vue from 'vue'
import users from './loginData'

const state = () => ({
  usersList: [],
})

const mutations = {
  setUsersList(state, usersList) {
    state.usersList = usersList
  },
}

const getters = {
  allUserList(state) {
    return state.usersList
  },
}

const actions = {
  initializeUserList({ commit }) {
    if (localStorage.getItem('userData') == null) {
      localStorage.setItem('userData', JSON.stringify(users))
    }
    commit('setUsersList', JSON.parse(localStorage.getItem('userData')))
  },
  signUpUser({state }, userInfo) {
    var tempObj = {
      id: Math.floor(Math.random() * 100 + 1),
      username: userInfo.username,
      password: userInfo.password,
    }
    var existingUserArray = state.usersList
    existingUserArray.push(tempObj)
    localStorage.setItem('userData', JSON.stringify(existingUserArray))
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
