<template>
  <el-row>
    <el-col :offset="6" :span="12" style="padding: 30px">
      <el-card shadow="always" style="margin-top: 50px">
        <h3 style="text-align: center">SignUp</h3>
        <!-- <h6 style="text-align: center"></h6> -->
        <el-form
          label-position="top"
          status-icon
          :ref="form"
          :rules="rules"
          :model="form"
          label-width="80px"
        >
          <el-form-item label="Enter Username" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Enter Password" prop="password">
            <el-input
              placeholder="Please input password"
              v-model="form.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="Confirm Password" prop="ConfPassword">
            <el-input
              placeholder="Please input password"
              v-model="form.ConfPassword"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(form)"
              >Sign Up</el-button
            >
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'signup',
  data() {
    var validatePassword = (rule, value, callback) => {
      this.errors = []
      console.log('called')
      if (value.length == 0) {
        callback(new Error('Please enter Password'))
      }
      if (value.length < 8) {
        this.errors.push('Your password must be at least 8 characters ')
      }
      if (value.search(/[a-z]/i) < 0) {
        this.errors.push('Your password must contain at least one letter. ')
      }
      if (value.search(/[0-9]/) < 0) {
        this.errors.push('Your password must contain at least one digit. ')
      }
      if (value.search(/[A-Z]/) < 0) {
        this.errors.push('Your password must contain at least Capital Letter.')
      }
      if (this.errors.length > 0) {
        callback(new Error(this.errors))
      }
      callback()
    }
    var validateUsername = (rule, value, callback) => {
      this.existingUserList = {}
      if (value.length == 0) {
        callback(new Error('Please Enter Username'))
      }
      this.existingUserList = this.allUserList.find(
        (user) => user.username == this.form.username
      )
      console.log('existing user')
      console.log(this.existingUserList)
      if (this.existingUserList != undefined) {
        callback(new Error('username alredy Exists'))
      }
      callback()
    }
    var validateConfPassword = (rule, value, callback) => {
      console.log('pass:' + this.form.password)
      console.log('old pass:' + value)
      if (this.form.password !== value) {
        callback(new Error('Password Doesnot Match'))
      }
      callback()
    }
    return {
      form: {
        username: 'ikhan',
        password: 'A212sasaw',
        ConfPassword: 'A212sasaw',
        existingUserList: {},
      },
      rules: {
        username: [
          {
            validator: validateUsername,
            trigger: 'blur',
          },
        ],
        password: [
          {
            validator: validatePassword,
            trigger: 'blur',
          },
        ],
        ConfPassword: [
          {
            validator: validateConfPassword,
            trigger: 'blur',
          },
        ],
      },
      errors: [],
    }
  },
  methods: {
    open() {
      this.$notify({
        title: 'User Registered Successfully!!!!',
        dangerouslyUseHTMLString: true,
        message: 'Login Now',
      })
    },
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.signUpUser(form)
          this.$router.push('/login')
          this.open()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    ...mapActions('login', ['initializeUserList', 'signUpUser']),
  },
  computed: {
    ...mapGetters('login', ['allUserList']),
  },
  mounted() {
    this.initializeUserList()
  },
}
</script>

<style>
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB';
}
</style>
