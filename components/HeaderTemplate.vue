<template>
    <el-row style="background-color:#f4f4f4">
        <el-col :span="21" style="">
            <div>
                <h2 style="padding-left:10px">Dashboard</h2>
            </div>
        </el-col>
        <el-col :span="3" style="">
            <el-row>
                <el-col :span="12">
                    <h4> <i class="el-icon-user"></i> {{ auth.username }}</h4>
                </el-col>
                <el-col :span="12">
                    <el-button size="mini" icon="el-icon-right" style="margin-top:20px" @click="handlelogout">Logout</el-button>
                </el-col>
            </el-row>
        </el-col >
    </el-row>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
    data(){
        return {
            details:{}
        }
    },
    computed:{
         ...mapGetters('authenticated',['auth']),
    },
    methods:{
        handlelogout(){
            this.$store.dispatch('authenticated/logoutUser')
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>