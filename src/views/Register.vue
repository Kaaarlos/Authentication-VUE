<template>
    <div class="Register">
    <h1>Register</h1>
        <form @submit.prevent="Register">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit" value="Register">
            <p>Have an account? <routerLink to="/login">Login Here</routerLink></p>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export default{
    name: "RegisterApp",
    setup(){
        const email = ref("");
        const password = ref("");

        const Register = () =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value,password.value)
                .then(user=>{
                    alert(user);
                })
                .catch(err => alert(err.message));
        }

        return {
            Register,
            email,
            password
        }
    }
}

</script>

<style>
.Register{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>