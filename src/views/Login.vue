<template>
    <div class="Login">
        <h1>Login</h1>
        <form @submit.prevent="Login">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit" value="Login">
            <p>Need an account?<routerLink to="/register">Register Here</routerLink></p>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default{
    name: "LoginApp",
    setup(){
        const email= ref("");
        const password= ref("");

        const Login = () =>{
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value,password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message));
        }
        return{
            Login,
            email,
            password
        }
    }
}



</script>

<style>
</style>