import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/main.css';
import '@/assets/css/navfooter.css';
import '@/assets/css/animate.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Vue3Lottie from 'vue3-lottie'

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(Vue3Lottie).mount('#app');
