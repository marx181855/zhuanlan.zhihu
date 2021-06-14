import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ElButton } from 'element-plus'

createApp(App)
  .use(ElButton)
  .use(store)
  .use(router)
  .mount('#app')
