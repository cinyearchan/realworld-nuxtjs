<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link to="/login" v-if="!isLogin">Have an account?</nuxt-link>
            <nuxt-link to="/register" v-else>Need an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">{{ field }} {{ message }}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name" />
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" />
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">{{ isLogin ? 'Sign in' : 'Sign up' }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: "LoginIndex",
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {} // 错误信息
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 提交表单请求登录
        const { data } = await login({
          user: this.user
        })

        console.log(data)
        // TODO: 保存用户的登录状态

        // 跳转到首页
        this.$router.push('/')
      } catch (err) {
        // console.error('请求失败', err)
        // console.dir(err)
        this.errors = err.response.data.errors
      }
    }
  }
};
</script>

<style>
</style>