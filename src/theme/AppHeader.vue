<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
      </router-link>
      <router-link to="/category/front-end" class="nav-item is-tab">
        Front-End
      </router-link>
      <router-link :to="{ name: 'category', params: { id: 'mobile' } }" class="nav-item is-tab">
        Mobile
      </router-link>
      <router-link to="/login" class="nav-item is-tab">
        <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isAuthenticated'])
    }
  }
</script>
