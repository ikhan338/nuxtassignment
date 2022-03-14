<template>
  <div style="padding:30px;">
    <el-row>
      <el-col :span="12">
        <el-form ref="form" label-width="120px" size="mini">
          <el-form-item  label="No of Records:">
            <el-select v-model="limit" placeholder="No of items" >
              <el-option label="10" value="10"></el-option>
              <el-option label="20" value="20"></el-option>
              <el-option label="30" value="30"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form label-width="120px" size="mini">
          <el-form-item label="Search Item" >
            <el-col :span="24">
              <el-input v-model="searchItem" placeholder="Search"></el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
        :data="filterItems"
        border
        style="width: 100%">
        <el-table-column
        prop="userId"
        label="userId"
        width="180">
        </el-table-column>
        <el-table-column
        prop="title"
        label="Name"
        width="180">
        </el-table-column>
        <el-table-column
        prop="body"
        label="Address">
        </el-table-column>
    </el-table>
    <el-pagination
      :page-size="Number(limit)"
      layout="prev, pager, next"
      :total="noofrows" @current-change="handleCurrentChange" :current-page="pageNum">
    </el-pagination>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import Fuse from 'fuse.js'

export default  {
   name:'FakeData',
   data(){
       return {
           limit:10,
           searchItem:"",
           pageNum:1,
           noofrows:0
       }
   },
   computed:{
       ...mapGetters('fakeStore',['getfakeList']),
       filterItems(){
          const start = Number(this.pageNum) * Number(this.limit) - Number(this.limit)
          const end = Number(start) + Number(this.limit) - 1
          console.log("start:"+start+"end:"+end)
          if(this.searchItem==""){
            const arr = this.getfakeList.filter((item,index) => index >= start && index <=end )
            this.noofrows = this.getfakeList.length
            return arr
          }else{
            this.pageNum=1
            this.limit=10
            const options = {
              keys :[
                "title",
                "body"
              ]
            }
            console.log("initialize")
            const fuse = new Fuse(this.getfakeList,options);
            console.log("filter")
            const arr = []
            fuse.search(this.searchItem).filter((item,index) =>  index >= start && index <=end ).forEach(element => {
              arr.push(element.item)
            });
            this.noofrows = arr.length
            return arr
          }
       }
   },
   methods:{
       ...mapActions('fakeStore',['fetchfakeList']),
       onSubmit(){

       },
       handleCurrentChange(val){
           this.pageNum = val
       },
   },
   mounted(){
       this.fetchfakeList()
   },
   created(){
       this.noofrows= this.getfakeList.length
   }
}
</script>