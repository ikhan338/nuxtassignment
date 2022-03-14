import vue from 'vue'

const state = () =>({
    user: JSON.parse(window.localStorage.getItem('demoApp')),
    collapsed:null
})

const getters = {
    auth(state){
        return state.user
    },
    getCollapsed(state){
        if(state.collapsed==null){
            return localStorage.getItem('collapse') === 'true'
        }
        return state.collapsed
    }
}

const mutations = {
    setUserStatus(state,user){
        state.user = user
        window.localStorage.setItem('demoApp',JSON.stringify(user))
    },
    setCollapsed(state,value){
        console.log('calling set collapse')
        state.collapsed = value
        window.localStorage.setItem('collapse',String(value))
    }
}

const actions ={
    loginUser({commit},status){
        commit('setUserStatus',status)
    },
    logoutUser(){
        localStorage.removeItem('demoApp')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}