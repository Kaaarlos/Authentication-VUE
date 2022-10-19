import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAFSlRIp_TfCfQkXbhll3OQEeAEKHUuwa0",
    authDomain: "vueauth-6677e.firebaseapp.com",
    projectId: "vueauth-6677e",
    storageBucket: "vueauth-6677e.appspot.com",
    messagingSenderId: "218478876770",
    appId: "1:218478876770:web:7558a7dfb72e880b5ed93b"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
