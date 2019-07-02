import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately


Vue.config.productionTip = false

Vue.use(VueOnsen);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

