<template>
  <div style="padding:30px;">
    <el-row>
      <el-col :span="12">
        <el-form ref="form" label-width="120px" size="mini">
          <el-form-item  label="No of Records:">
            <el-select v-model="limit" placeholder="No of items" @change="handlePageLimit()">
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
            <el-col :span="12">
              <el-input v-model="searchItem" placeholder="Search by Name"></el-input>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" @click="onSubmit">Search</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
        :data="allUsers"
        border
        style="width: 100%">
        <el-table-column
        prop="postId"
        label="Post Id"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="Name"
        width="180">
        </el-table-column>
        <el-table-column
        prop="email"
        label="Address">
        </el-table-column>
    </el-table>
    <el-pagination
      :page-size="Number(limit)"
      layout="prev, pager, next"
      :total="500" @current-change="handleCurrentChange" :current-page="getPageNum">
    </el-pagination>
    <!-- {{ getPageNum }} -->
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
  name: 'UserData',
  data(){
    return {
      limit:10,
      // current_page:getPageNum
      searchItem:""
    }
  },
  methods: {
    ...mapActions('tableData',['fetchUsers','setPageSize','setPageNum','searchByName']),
    //if page limit changes
    handlePageLimit(){
      console.log(this.limit)
      console.log("editing pageNum")
      if(this.searchItem!=""){
        this.$store.dispatch('tableData/setPageSize', Number(this.limit))
        this.$store.dispatch('tableData/searchByName',this.searchItem)
      }
      else{
        this.$store.dispatch('tableData/setPageSize', Number(this.limit))
        this.fetchUsers()
      }
    },
    //if current page changes
    handleCurrentChange(val){
      console.log(val)
      if(this.searchItem!=""){
        this.$store.dispatch('tableData/setPageNum',val)
        this.$store.dispatch('tableData/searchByName',this.searchItem)
      }else{
        this.$store.dispatch('tableData/setPageNum',val)
        this.fetchUsers()
      }
    },
    //on search button clicked
    onSubmit(){
      console.log("searching")
      this.$store.dispatch('tableData/setPageNum',1)
      this.$store.dispatch('tableData/setPageSize',10)
      this.$store.dispatch('tableData/searchByName',this.searchItem)
    }
  },
  mounted () {
    this.fetchUsers()
  },
  computed:{
    ...mapGetters('tableData',['allUsers','getPageSize','getPageNum'])
  }
}
</script>

<style>

</style>