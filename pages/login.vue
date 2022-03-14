<template>
  <el-row>
    <el-col :offset="7" :span="10" style="padding:30px">
      <el-card shadow="always" style="margin-top: 150px;">
        <h3 style="text-align: center">Login</h3>
        <el-form :model="form" :ref="form" :rules="rules" label-width="120px">
          <el-form-item label="Username" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="form.password"  show-password></el-input>
          </el-form-item>
          <el-form-item >
            <NuxtLink to="/signup">Sign Up</NuxtLink>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(form)">Sign In</el-button>
            <!-- <el-button>Cancel</el-button> -->
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    {{ allUserList }}
  </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from 'vue'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules:{
        username:[
          { required: true, message: 'Please Enter Username', trigger: 'blur' } 
        ],
        password :[
          { required: true, message: 'Please Enter Password', trigger: 'blur' } 
        ]
      },
      userDetails: {},
      error: '',
    }
  },
  methods: {
    open(msg) {
      this.$notify.error({
        title:"Error",
        message: msg,
      })
    },
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(form.username)
              this.userDetails = this.allUserList.find(
                (user) => user.username == form.username
              )
              console.log(this.userDetails)
              if(this.userDetails!=undefined){
              if (
                form.username == this.userDetails.username &&
                form.password == this.userDetails.password
              ) {
                // window.localStorage.setItem('demoApp',JSON.stringify(this.userDetails))
                var dt = new Date();
                var tokenExpiry= dt.setSeconds( dt.getSeconds() + 120 );
                // document.write(tokenExpiry
                
                this.$store.dispatch('authenticated/loginUser',Object.assign(this.userDetails,{ timeOut :  tokenExpiry} ))
                this.$router.push('/')
              } else {
                this.open('Credentials Not valid')
              }
              }else{
                this.open("User Not Found")
              }
          } else 
          {

            return false;
          }
        });
      
    },
    ...mapActions('login',['initializeUserList'])
  },
  computed: {
    ...mapGetters('login', ['allUserList']),
  },
  mounted() {
    this.initializeUserList()
  }
 

}
</script>

<style>
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB';
}
</style>
