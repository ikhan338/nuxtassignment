<template>
  <el-row>
    <el-col :span="getCollapsed==false? 4 : 1" style="background:#f4f4f4">
      <el-container >
        <SideNavBar  />
      </el-container>
    </el-col>
    <el-col :span="getCollapsed==false? 20 : 23" >
        <HeaderTemplate />
        <Nuxt />
    </el-col>
  </el-row>
</template>

<script>
import auth from '../middleware/auth'
import { mapGetters } from 'vuex'
export default {
  name: 'app-layout',
  data(){
    return {
      sideBarSize:1,
      rightBarSize:23
    }
  },
  computed:{
    ...mapGetters('authenticated',['getCollapsed']),
  },


}
</script>
<style >
  body{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB"
  }
</style>