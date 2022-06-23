<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({})
export default class App extends Vue {
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
}
</script>

<style lang="less">
body {
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  background-color: #1f1e1e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100%;
  position: relative;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
