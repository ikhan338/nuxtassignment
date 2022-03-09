import vue from 'vue'
import userData from './userData'

const state = () => (
    { 
        usersList:[],
        pageNum:1,
        pageSize:10,
        searchName:""
    }
)

const mutations = {
    setUsersList(state,usersList){
        state.usersList = usersList
    },
    setPageNum(state,pageNum){
        state.pageNum = pageNum
    },
    setPageSize(state,pageSize){
        console.log("set page size:"+pageSize)
        state.pageSize = pageSize
        console.log(state.pageSize)
    },
    setSearchName(state,text){
        state.searchName = text
    }
}

const getters = {
    allUsers(state) {
        return state.usersList
    },
    getPageNum(state){
        return state.pageNum
    },
    getPageSize(state){
        return state.pageSize
    },
    getSearchName(state){
        return state.searchName
    }
}

const actions ={
    async fetchUsers({commit,state}){
        const response =  await this.$axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${state.pageNum}&_limit=${state.pageSize}`).then((res)=>{
            console.log(res)
            commit('setUsersList',res.data)
        })
        console.log("done")
    },
    setPageNum({commit},pageNum){
        commit('setPageNum',pageNum)
    },
    setPageSize({commit},size){
        commit('setPageSize',size)
    },
    async searchByName({commit,state},text){
        console.log(text)
        console.log(state.pageNum)
        console.log(state.pageSize)
        const response = await this.$axios.get(`https://jsonplaceholder.typicode.com/comments?name_like=${text}&_page=${state.pageNum}&_limit=${state.pageSize}`).then((res)=>{
            commit('setUsersList',res.data)
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}