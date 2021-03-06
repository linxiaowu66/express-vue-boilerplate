import Vue from 'vue';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/fonts/Roboto.css';
import './assets/fonts/Material.css';
import App from './App';

Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})
