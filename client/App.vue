<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <TodoList v-on:showToast='showToast'></TodoList>
    <mu-toast v-if="toast" :message="message"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'app',
  data() {
    return {
      toast: false,
      message: '',
      toastTimer: null,
    }
  },
  components: {
    TodoList,
  },
  methods: {
    showToast(message) {
      if (this.toastTimer !== null) {
        window.clearTimeout(this.toastTimer)
        this.toastTimer = null
      }
      this.toast = true
      this.message = message
      this.toastTimer = window.setTimeout(() => {
        this.toast = false
        this.toastTimer = null
      }, 4000)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
