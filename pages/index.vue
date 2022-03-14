<template>
    <div>
        <el-row>
          <el-col :span="10" style="padding:30px">
            <!-- <PieChart /> -->
            <el-card shadow="hover" style="psadding:10px;">
              <h1>Total Aggregate</h1>
              <h3 style="color:gray">21,212</h3>
            </el-card>
            <el-card shadow="hover" style="padding:10px;margin-top:20px">
              <h1>Total Count</h1>
              <h3 style="color:gray">21,432</h3>
            </el-card>
          </el-col>
          <el-col :span="14" style="padding:30px">
            <PlanetChart />
          </el-col>
          <el-col :span="24" style="margin-top:10px">
            <!-- <UserData /> -->
            <FakeData />
          </el-col>
        </el-row>
    </div>
</template>

<script>
import auth from '../middleware/auth'

export default {
  name: 'IndexPage',
  layout:'app',
  data(){
    return {
      sideBarSize:1,
      rightBarSize:23
    }
  },
  middleware:['auth']
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