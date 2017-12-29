<template>
<div>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field label="Email" v-model="email"></v-text-field>
        <v-text-field label="password" type="password" v-model="password"></v-text-field>
        <br>
        <div class="error-message" v-html="error" />
        <br>
        <v-btn dark class="cyan" @click="login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
