<template>
    <div class="Login">
        <h1>Login</h1>
        <form @submit.prevent="Login">
            <input type="text" placeholder="Email" v-model="email">
            <br>
            <input type="password" placeholder="Password" v-model="password">
            <input class="submit" type="submit" value="Login">
            <p>Need an account? <routerLink to="/register">Register here</routerLink></p>
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
.Login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
input{
    margin: 3%;
    height: 40px;
    width: 300px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}
.submit{
    background-color: #B1B8A8;
    font-weight: bolder;
}

.submit:hover{
    background-color: #73A138;
}
</style>