<template>
    <div class="header">
        <div class="inner">
            <img src="../../public/manzana_banana.png" alt="" srcset="">
            <h1><span>Quick & </span>Easy</h1>
            <ul>
                <li>
                    <router-link class="enlace" to="/about">About</router-link>
                </li>
                <li>
                    <router-link class="enlace" to="/products">Products</router-link>
                </li>
                <li>
                    <router-link class="enlace" to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .header{
        display: block;
        width: 60%;
        margin:0 auto;
        border-bottom: 6px solid rgb(6, 100, 168);
    }
    .enlace{
        color:rgb(6, 100, 168);
        text-decoration: none;
    }
    li{
        display: block;
        font-size: x-large;
    }
    li:hover{
        color:rgb(17, 232, 160);
    }
    span{
        color: rgb(6, 100, 168);
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
