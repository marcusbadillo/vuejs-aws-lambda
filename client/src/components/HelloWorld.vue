<template>
  <div class="container">
    <h1>Latest Micro-Posts</h1>
    <div class="users">
      <button v-if="!profile" v-on:click="signIn">
        Sign In
      </button>
      <button v-if="profile" v-on:click="signOut">
        Sign Out
      </button>
      <p v-if="profile">
        Hello there, {{ profile.name }}. Why don't you
        <router-link :to="{ name: 'ShareThoughts' }">
          share your thoughts?
        </router-link>
      </p>
    </div>
    <div class="micro-posts-container">
      <div class="micro-post" v-for="(microPost, index) in microPosts" :item="microPost" :index="index"
        :key="microPost.id">
        <div class="created-at">
          {{ `${microPost.createdAt.getDate() }/${microPost.createdAt.getMonth() + 1}/${microPost.createdAt.getFullYear() }` }}
        </div>
        <p class="text">{{microPost.text}}</p>
        <p class="author">- Unknown</p>
      </div>
    </div>
  </div>
</template>

<script>
import MicroPostService from '../services/MicroPostsService'
import auth0Client from '../services/AuthService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      microPosts: [],
      error: '',
      profile: null
    }
  },
  async created () {
    try {
      this.microPosts = await MicroPostService.getMicroPosts()
      this.profile = auth0Client.getProfile()
    } catch (error) {
      this.error = error.message
    }
  },
  methods: {
    signIn: auth0Client.signIn,
    signOut: auth0Client.signOut
  }
}

</script>
<style scoped>
  div.container {
    max-width: 800px;
    margin: 0 auto;
  }

  p.error {
    border: 1px solid #ff5b5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
  }

  div.micro-post {
    position: relative;
    border: 1px solid #5bd658;
    background-color: #bcffb8;
    padding: 10px;
    margin-bottom: 15px;
  }

  div.created-at {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 15px 5px 15px;
    background-color: darkgreen;
    color: white;
    font-size: 13px;
  }

  p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
  }

  p.author {
    font-style: italic;
    margin-top: 5px;
  }

</style>
