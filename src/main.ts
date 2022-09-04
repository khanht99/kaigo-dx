import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Calendar from 'primevue/calendar'
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import Card from 'primevue/card';
import Toolbar from 'primevue/toolbar';
import Sidebar from 'primevue/sidebar';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Calendar', Calendar);
app.component('Menubar', Menubar);
app.component('InputText', InputText);
app.component('p-button', Button);
app.component('p-card', Card);
app.component('p-toolbar', Toolbar);
app.component('p-sidebar', Sidebar);


app.mount('#app')
