<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <div class="link">
      <a href="https://museui.github.io/" target="_blank">欢迎使用Muse-UI</a>
    </div>
    <TodoList v-on:showToast='showToast'></TodoList>
    <mu-toast v-if="toast" :message="message"/>
    <svg width="400" height="400" class="welcome-svg">
      <text x="70" y="150">欢迎使用Muse-UI</text>
    </svg>
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
.link{
  font-size: 20px;
}
@keyframes dash{
  0%{
    stroke-dashoffset: 500;
  }
  70%{
    stroke-dashoffset: 400;
  }
  100%{
    stroke-dashoffset:0;
  }
}
@keyframes fade{
  0%{
    fill:rgba(42, 63, 84,0)
  }
  80%{
    fill:rgba(42, 63, 84,0)
  }
  100%{
    fill:rgba(42, 63, 84,1)
  }
}
@keyframes textShadow{
  0%{
    text-shadow: 0 0 0px rgba(0,0,0,.2);
  }
  80%{
    text-shadow: 0 0 0px rgba(0,0,0,.2);
  }
  100%{
    text-shadow: 0 0 10px rgba(0,0,0,.2);
  }
}

.welcome-svg{
  width:500px;
  height:400px;
  display:block;
  margin:20px auto 0;
  font-size:50px;
}

.welcome-svg text{
  fill:#ff4081;
  stroke-dasharray: 500;
  stroke: #ff4081;
  text-shadow: 0 0 10px rgba(0,0,0,.2);
  animation: dash 3s 1,fade 3s 1,textShadow 3s 1;
}
</style>
