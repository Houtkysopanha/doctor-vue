import { createApp } from 'vue'
import App from './App.vue'
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
app.mount('#app')
