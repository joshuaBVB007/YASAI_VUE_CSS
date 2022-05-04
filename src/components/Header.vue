<template>
    <div class="header">
        <div class="inner">
            <img src="../../public/manzana_banana.png" alt="" srcset="">
            <h1><span>Quick&</span>Easy</h1>
            <ul>
                <li>About</li>
                <li>Wall</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .header{
        /* background-color:blue; */
        display: block;
        width: 60%;
        margin: auto;
    }
    li{
        display: block;
        font-size: x-large;
    }
    li:hover{
        color:rgb(232, 17, 121);
    }
    span{
        color: rgb(232, 17, 121);
    }
    img{
        width: 50px;
        height: 50px;
    }
    .inner{
        /* background-color:yellow; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>
