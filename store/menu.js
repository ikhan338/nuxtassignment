import vue from 'vue'
import menuItems from './menuItems'

const state = () => (
    { 
        menuList:[]
    }
)

const mutations = {
    setMenuList(state,menuList){
        state.menuList = menuList
    }
}

const getters = {
    allMenus(state) {
        return state.menuList
    }
}

const actions ={
    async fetchMenuItems({commit}){
        console.log("calling API")
        // const response =  await this.$axios.get('http://localhost:3000/menu').then((res)=>{
            commit('setMenuList',menuItems)
        // })
        console.log(menuItems)
        console.log("done")
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}