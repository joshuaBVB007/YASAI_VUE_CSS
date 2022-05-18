<script type="module">
        import { initializeApp } from 'firebase/app';
        import { getDatabase, ref, onValue} from "firebase/database";
        // TODO: Replace the following with your app's Firebase project configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCUelzJLvuyI-3A8jWHRUWAS8vgugL5hrc",
            authDomain: "yasaibackend.firebaseapp.com",
            projectId: "yasaibackend",
            //linea requerida en realtime database para conectar con la base de datos
            databaseURL: "https://yasaibackend-default-rtdb.europe-west1.firebasedatabase.app",
            storageBucket: "yasaibackend.appspot.com",
            messagingSenderId: "838306389759",
            appId: "1:838306389759:web:ea9799c4bc0fabb885b6ca",
            measurementId: "G-EWXR6F76NK"
        };
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        //All about Instance
        export default {
            data(){
                return{
                    nombre:"Instancia"
                }
            },
            methods:{
                get_data(){
                        const nodo = ref(db, 'Productos/' +"Frutas");
                        onValue(nodo, (snapshot) => {
                        const data = snapshot.val();
                        console.log(data);
                    });
                },
            }
        }        
</script>



<template>
    <div class="container">
            <h1>somos wall</h1>
            <button @click="get_data">click</button>
    </div>
</template>

<style scoped>
        .container{
            width:60%;
            margin: 0 auto;
        }
</style>

