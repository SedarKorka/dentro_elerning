import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'



axios.defaults.baseURL = 'https://maxibas-59ed2d659bf7.herokuapp.com/api/v1/'

createApp(App).use(store).use(router, axios).mount('#app')