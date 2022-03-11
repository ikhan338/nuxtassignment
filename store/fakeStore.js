import vue from 'vue'
import userData from './userData'

const state = () => (
    { 
        fakeList:[],
    }
)

const mutations = {
    setfakeList(state,fakeList){
        state.fakeList = fakeList
    }
    
}

const getters = {
    getfakeList(state) {
        return state.fakeList
    }
}

const actions ={
    async fetchfakeList({commit}){
        const response =  await this.$axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
            console.log(res)
            commit('setfakeList',res.data)
        })
        console.log("done")
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}