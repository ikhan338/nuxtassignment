import vue from 'vue'

const state = () =>({
    user: JSON.parse(window.localStorage.getItem('demoApp'))
})

const getters = {
    auth(state){
        return state.user
    }
}

const mutations = {
    setUserStatus(state,user){
        state.user = user
        window.localStorage.setItem('demoApp',JSON.stringify(user))
    }
}

const actions ={
    loginUser({commit},status){
        commit('setUserStatus',status)
    },
    logoutUser(){
        console.log("clear storage")
        localStorage.removeItem('demoApp')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}