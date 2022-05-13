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
    .about{
        width: 50%;
        margin: 0 auto;
    }
    .first{
        width:100%;
        margin:2%;
        padding: 4%;
        border-radius: 50%;
        height:20vh;
        background-color: yellow;
    }
    .info{
        font-size: medium;
    }
    .img_first{
        float: left;
        width: 14%;
        height: 80px;   
    }
    h1{
        text-align:center;
        font-weight: normal;
    }
    /* second container */
    .second{
        margin:2%;
        padding: 4%;
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .img_card {
        display:block;
        margin-left: auto;
        margin-right: auto;
        width:50%;
        height:80px;
    }
    .card{
        padding:20px;
        width:20%;
        height: 40vh;
        border-radius: 10px;
        border-top: 12px solid rgba(8, 202, 40, 0.951);
        border-left: 12px solid rgb(194, 7, 163);
        border-right: 12px solid rgb(251, 247, 2);
        border-bottom: 12px solid rgb(242, 15, 53);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 1px 2px rgba(0,6px,20px,0.19);
    }

    @media screen and (max-width: 500px){
        h1{
            color:white;
        }
        .first{
            background-color:transparent;
        }
        img{
            float: left;
            width: 40%;
            height: 70px;   
        }
    }

</style>