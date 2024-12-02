import { createApp } from 'vue'
import App from './App.vue'
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from './router'; // Import the router

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS CSS file
const app = createApp(App);
app.use(router);
app.mount('#app')
AOS.init();
AOS.refresh();
