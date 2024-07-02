import { createApp } from 'vue'
import App from './App.vue'

import emitter from 'tiny-emitter/instance'

// const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
