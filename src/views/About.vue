<template>
    <div class="about">
        <div class="first">
                <h1>Eating fruits..</h1>
                <img src="../../public/manzana_banana.png" alt="">
                <p class="info">Levels have been added to the MyPlate Quiz.
                    Take the quiz today to find out your level and get personalized resources to Start Simple with MyPlate.
                    Levels have been added to the MyPlate Quiz.
                    Take the quiz today to find out your level and get personalized resources to Start Simple with MyPlate.
                    Levels have been added to the MyPlate Quiz.
                    Take the quiz today to find out your level and get personalized resources to Start Simple with MyPlate.
                </p>
        </div>
    </div>
</template>

<style scoped>
    .about{
        width: 50%;
        margin: 0 auto;
    }
    .first{
        margin:2%;
        padding: 4%;
        border-radius: 50%;
        height:20vh;
        background-color: yellow;
    }
    .info{
        font-size: medium;
    }
    img{
        float: left;
        width: 14%;
        height: 80px;   
    }
    h1{
        text-align:center;
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