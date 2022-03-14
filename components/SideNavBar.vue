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
      :collapse="getCollapsed" :router="true"
    >
      <el-menu-item  v-if="!getCollapsed" @click="handleCollapse">
        <i class="el-icon-d-arrow-left" />
        <span slot="title">Menu</span>
      </el-menu-item>
      <el-menu-item  v-if="getCollapsed" @click="handleCollapse">
        <i class="el-icon-d-arrow-right" />
      </el-menu-item>

      <template v-for="menu in allMenus">
        <el-submenu v-if="menu.submenu"  :key="menu.id" :index="menu.url">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ menu.title }}</span>
          </template>
          <el-menu-item-group v-for="submenuitem in menu.submenuitems" :key="submenuitem.id">
            <el-menu-item :index="submenuitem.url" > 
              <!-- <NuxtLink :to="submenuitem.url" > </NuxtLink>   -->
              {{submenuitem.title}} 
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item  :key="menu.id" v-else :index="menu.url" >
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
      // isCollapse:false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCollapse(){
      this.$store.commit('authenticated/setCollapsed', !this.getCollapsed)
    },
    ...mapActions('menu',['fetchMenuItems'])
  },
  created () {
    this.fetchMenuItems()
  },
  computed:{
    ...mapGetters('menu',['allMenus']),
    ...mapGetters('authenticated',['getCollapsed']),
    activePath(){
        return this.$route.path
    },
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
