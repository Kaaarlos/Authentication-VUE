<template>
  <div class="home">
    <h1>Welcome, {{name}}</h1>
    <router-link to="/about">About</router-link>
    <br>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import {onBeforeMount, ref} from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default{
  name: "homeApp",
  setup(){
    const name = ref("");

    onBeforeMount(()=>{
      const user = firebase.auth().currentUser;
      if(user)
      name.value=user.email.split('@')[0];
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(()=>console.log("Signed out"))
        .catch(err =>alert(err.message));
    }
      
    return{
      name,
      Logout
    }
  }
}
</script>

<style>
.home{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

button{
  margin: 3%;
    height: 40px;
    width: 300px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

button:hover{
  background-color: #934747;
}


</style>