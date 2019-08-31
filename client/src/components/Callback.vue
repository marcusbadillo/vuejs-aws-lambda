<template>
<div>
  <p>Loading your profile...</p>
</div>
</template>
<script>
import auth0Client from '../services/AuthService'
export default {
  name: 'Callback',
  async created () {
    await auth0Client.handleAuthentication()
    this.$router.push('/')
  }
}
</script>
<style scoped>
div > p {
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
}
</style>
