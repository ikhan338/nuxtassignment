<template>
  <el-row>
    <el-col :offset="6" :span="12">
      <el-card shadow="always" style="margin-top: 50px">
        <h3 style="text-align: center">Login</h3>
        <h6 style="text-align: center">{{ error }}</h6>
        <el-form :model="form" label-width="120px">
          <el-form-item label="Username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Sign In</el-button>
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
      userDetails: {},
      error: '',
    }
  },
  methods: {
    onSubmit() {
      // console.log(this.form)
      this.userDetails = this.allUserList.find(
        (user) => user.username == this.form.username
      )
      // console.log(userDetails)
      if (
        this.form.username == this.userDetails.username &&
        this.form.password == this.userDetails.password
      ) {
        // window.localStorage.setItem('demoApp',JSON.stringify(this.userDetails))
        this.$store.dispatch('authenticated/loginUser', this.userDetails)
        this.$router.push('/')
      } else {
        this.error = 'no valid user'
      }
    },
  },
  computed: {
    ...mapGetters('login', ['allUserList']),
  },
}
</script>

<style>
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB';
}
</style>
