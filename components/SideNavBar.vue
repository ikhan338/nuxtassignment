<template>
  <el-aside width="255px" >
    <!-- <el-menu-item  v-if="!isCollapse" @click="handleCollapse">
        <i class="el-icon-d-arrow-left" />
        <span slot="title">Menu</span>
      </el-menu-item>
      <el-menu-item  v-if="isCollapse" @click="handleCollapse">
        <i class="el-icon-d-arrow-right" />
      </el-menu-item> -->
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-menu-item  v-if="!isCollapse" @click="handleCollapse">
        <i class="el-icon-d-arrow-left" />
        <span slot="title">Menu</span>
      </el-menu-item>
      <el-menu-item  v-if="isCollapse" @click="handleCollapse">
        <i class="el-icon-d-arrow-right" />
      </el-menu-item>

      <template v-for="menu in allMenus">
        <el-submenu v-if="menu.submenu"  :key="menu.id" :index="menu.title">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ menu.title }}</span>
          </template>
          <el-menu-item-group v-for="submenuitem in menu.submenuitems" :key="submenuitem.id">
            <el-menu-item index="submenuitem.url" :to="submenuitem.url"> 
              <!-- <NuxtLink :to="submenuitem.url" > </NuxtLink>   -->
              {{submenuitem.title}} 
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item  :key="menu.id" route="/login" v-else :index="menu.title">
          <i :class="menu.icon" />
          <span slot="title" > {{ menu.title }} </span>
        </el-menu-item>
        
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
  name: 'SideNavBar',
  data () {
    return {
      isCollapse:false
    }
  },
  methods: {
    handleCollapse(){
        this.isCollapse = !this.isCollapse
        console.log('calling collapse')
        localStorage.setItem('collapse',String(this.isCollapse))
        if(this.isCollapse==true){
          this.$emit('closed',true)
        }else{
          this.$emit('closed',false)
        }
    },
    ...mapActions('menu',['fetchMenuItems']),
    setcollapse(){
      this.isCollapse=false
      const collapse = localStorage.getItem('collapse')
      if(collapse==null){
        console.log('collapse is null')
        localStorage.setItem('collapse','true')
      }else{

      this.isCollapse=Boolean(localStorage.getItem('collapse'))
      console.log("setting collapse"+this.isCollapse)
      }
    }
  },
  created () {
    this.fetchMenuItems(),
    this.setcollapse()
  },
  computed:{
    ...mapGetters('menu',['allMenus']),
    
  }

}
</script>

<style>
.el-menu-demo{
    height:100vh;
}
.el-menu-vertical-demo{
    height:100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  height: 100vh;
}
body{
  margin:0px;
}
</style>
