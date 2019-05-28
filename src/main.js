import Vue from 'vue'
import App from './App.vue'

import Gallery from './Gallery.vue';
Vue.component('app-gallery', Gallery);

new Vue({
  el: '#app',
  render: h => h(App)
})
