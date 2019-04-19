import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();// register enent bus works like service in agular;
//eventBus can have data, method etc prop of regular vue object

new Vue({
  el: '#app',
  render: h => h(App)
})
