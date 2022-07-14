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
                    nombre:"Instancia",
                    recetas:[
                        {nombre:"Acerola Smoothie Bowl", img:"/Recetas/receta_uno.jpg"},
                        {nombre:"Acerola Smoothie Bowl", img:"/Recetas/receta_dos.jpg"},
                        {nombre:"Acerola Smoothie Bowl", img:"/Recetas/receta_tres.jpg"},
                        {nombre:"Acerola Smoothie Bowl", img:"/Recetas/receta_cuatro.jpg"},
                    ]
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
            <h1>Recetas</h1>
            <!-- <button @click="get_data">click</button> -->
            <div class="recipe_one" v-for="item of recetas" :key="item.nombre">
                    <h1>{{item.nombre}}</h1>
                    <div class="square">
                        <p class="first_half">
                            2 trozos de pulpa de acerola congelada
                            1 plátano congelado
                            1/2 mango congelado
                            2 fresas congeladas
                            1 cucharada de proteína vegana sabor fresa
                            1/3 taza de bebida vegetal de soja
                            Toppings: muesli, moras, coco rallado
                        </p>
                        <img class="second_half" :src="item.img" alt="imagen_producto">
                    </div>
            </div>
    </div>
</template>

<style scoped>
        .container{
            width:60%;
            margin: 0 auto;
        }
        h1{
            text-align: center;
        }
        .recipe_one{
            width: 100%;
        }
        .square{
            width:100%;
            /* background-color:red; */
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .first_half{
            color: rgb(6, 100, 168);
            width: 50%;
            font-size: x-large;
        }
        .second_half{
            width: 30%;
            border-radius: 50%;
        }


        @media screen and (max-width:540px){
                .square{
                    flex-direction: column;
                }
                .first_half{
                   width: 100%;
                   font-size: large;
                   line-height:1.4;
                   display: block;
                }
                .second_half{
                    display: block;
                    width: 100%;
                    border-radius:0px;
                }
        }

</style>

