import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.mount('#__data');
