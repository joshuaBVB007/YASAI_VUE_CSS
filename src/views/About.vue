<template>
    <div class="about">
        <div class="first">
                <h1>Eating fruits..</h1>
                <img class="img_first" src="../../public/manzana_banana.png" alt="">
                <p class="info">Levels have been added to the MyPlate Quiz.
                    Take the quiz today to find out your level and get personalized resources to Start Simple with MyPlate.
                    Levels have been added to the MyPlate Quiz.
                    Take the quiz today to find out your level and get personalized resources to Start Simple with MyPlate.
                    Levels have been added to the MyPlate Quiz.
                    Take the quiz today to find out your level and get personalized resources to Start Simple with MyPlate.
                </p>
        </div>
        <!-- second container -->
        <div class="second" >
                <div class="card" v-for="item in lista" :key="item.id">
                    <h1>{{item.nombre}}</h1>
                    <img class="img_card" :src="item.url" alt="foto">
                    <p>{{item.des}}</p>
                </div>
        </div>
    </div>
</template>

<script type="module">
        export default{
            data() {
                return {
                    lista: [
                        {
                            id:1,
                            nombre:"Fresa",
                            des:"Ideal para este rico veranito en la playa,una de mis frutas preferidas sin duda alguna",
                            url:"/Logos/fresa.png"
                        },
                        {
                            id:2,
                            nombre:"Manzana",
                            des:"Ideal para este rico veranito en la playa,una de mis frutas preferidas sin duda alguna",
                            url:"/Logos/manzana.png"
                        },
                        {
                            id:3,
                            nombre:"Platano",
                            des:"Ideal para este rico veranito en la playa,una de mis frutas preferidas sin duda alguna",
                            url:"/Logos/platano.png"}
                    ]
                }
            }
        } 
</script>

<style scoped>
    /* contenedor principal */
    .about{
        width: 80%;
        margin: 0 auto;
    }
    /* first container: children: h1,img.class=first_img, p.class=info */
    .first{
        width:100%;
        border-radius: 50%;
        background-color: yellow;
    }
    /* second container  children:cards,h1 img.class=img_card,p*/
    .second{
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    img{
        display:block;
        width:50%;
        margin-left: auto;
        margin-right: auto;
    }
    p{
        margin: 40px;
        font-size: large;
        text-align: center;
    }
    .card{
        border-radius: 50%;
        border-top: 12px solid rgba(8, 202, 40, 0.951);
        border-left: 12px solid rgb(194, 7, 163);
        border-right: 12px solid rgb(251, 247, 2);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 1px 2px rgba(0,6px,20px,0.19);
    }

</style>