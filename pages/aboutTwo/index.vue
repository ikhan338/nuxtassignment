<template>
  <h1>About two</h1>
</template>

<script>
import auth from '@/middleware/auth'

export default {
  name: 'IndexPage',
  data(){
    return {
      sideBarSize:1,
      rightBarSize:23
    }
  },
  middleware:['auth'],
  layout:'app'
  ,
  methods:{
    closed(value){
      console.log(value)
      if(value==false){
        this.sideBarSize=4
        this.rightBarSize=20
      }else{
        this.sideBarSize=1
        this.rightBarSize=23
      }
    }
  }

}
</script>
<style >
  body{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB"
  }
</style>