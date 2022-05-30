<template>
    <div class="container">
            <div class="icons">
                <h1>Menu</h1>
                <div class="icon">
                    <img  src="../../public/cupcake.png" alt="">
                </div>
                <div class="icon">
                    <img  src="../../public/smoothie.png" alt="">
                </div>
                <div class="icon">
                    <img  src="../../public/frutas.png" alt="">
                </div>
            </div>
    </div>    
</template>

<style scoped>
        .container{
            position:fixed;
            top:14%;
            left: 1%;
            padding:8px;
            margin: 2%;
            border-radius: 10%;
        }
        .icon{
            position: relative;
        }
        img{
            width:50px;
        }
        .icons{
            display:flex;
            flex-direction: column;
        }
</style>

