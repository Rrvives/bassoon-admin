import './assets/main.css'
import '@/style/tailwind.css'
import '@/style/global.css'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import { setupStore } from './stores'
const app = createApp(App)

app.use(router)
setupStore(app)


app.mount('#app')
