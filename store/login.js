import vue from 'vue'
import users from './loginData'

const state = () => ({
    usersList:users
})

const mutations ={
    setUsersList(state,usersList){
        state.usersList = usersList
    }
}

const getters = {
    allUserList(state) {
        return state.usersList
    }
}

export default {
    state,
    mutations,
    getters
}