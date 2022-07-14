<template>
    <div class="header">
        <div class="inner">
            <img src="../../public/Logos/manzana_banana.png" alt="" srcset="">
            <h1><span>Quick & </span>Easy</h1>
            <ul>
                <li>
                    <router-link class="enlace" to="/about">About</router-link>
                </li>
                <li>
                    <router-link class="enlace" to="/products">Products</router-link>
                </li>
                <li>
                    <router-link class="enlace" to="/recipes">Recipes</router-link>
                </li>
                <li>
                    <router-link class="enlace" to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script type="module">
    import { getDatabase, ref, onValue} from "firebase/database";
    import { firebaseConfig } from "../FirebaseConfig.js";
    import { initializeApp } from 'firebase/app';

    export const app=initializeApp(firebaseConfig);
    const db=getDatabase(app);
    export const frutas_listas=[];
    export const postres_listas=[];
    export const smoothies_listas=[];

    export default {
        mounted(){
            const nodo = ref(db, 'Productos/'+"Frutas");
            onValue(nodo, (snapshot) => {
                const data = snapshot.val();
                for (const key in data) {
                    // console.log(data[key])
                    frutas_listas.push(data[key]);
                }
            });
            const nodo1 = ref(db, 'Productos/'+"Postres");
            onValue(nodo1, (snapshot) => {
                const data = snapshot.val();
                for (const key in data) {
                    // console.log(data[key])
                    postres_listas.push(data[key]);
                }
            });
            const nodo2 = ref(db, 'Productos/'+"Smoothies");
            onValue(nodo2, (snapshot) => {
                const data = snapshot.val();
                for (const key in data) {
                    // console.log(data[key])
                    smoothies_listas.push(data[key]);
                }
            });
        },
        data(){
            return {};
        }
    }
</script>


<style scoped>
    .header{
        display: block;
        width: 60%;
        margin:0 auto;
        border-bottom: 6px solid black
    }
    li{
        list-style: none;
    }
    .enlace{
        display: block;
        font-size: x-large;
        color:black;
        text-decoration: none;
    }
    .enlace:hover{
        border-left: 6px solid rgb(240, 94, 118);
    }
    span{
        color: rgb(240, 94, 118);
        font-weight: normal;
    }
    img{
        width: 50px;
        height: 50px;
    }
    .inner{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }


    @media  screen and (max-width:400px){
        img{
            display:none;
        }
    }
</style>
