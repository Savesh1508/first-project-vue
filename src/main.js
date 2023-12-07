import { createApp } from 'vue';
import App from './App.vue';
import Toast from "vue-toastification";
import router from './router';
import './assets/css/main.css';
import store from "./store";
import "vue-toastification/dist/index.css"


const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Toast)
  .mount('#app')
