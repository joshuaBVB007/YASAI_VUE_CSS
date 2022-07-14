<template>
    <div class="principal_container">
        <div class="first">
            <img class="principal_img" src="../../public/Logos/color-wheel.png" alt="">

            <div @click="setBackgroundTo(1)" class="icon_first">
                <img src="../../public/Logos/manzana.png"  alt="icon">
            </div>
            <div @click="setBackgroundTo(2)" class="icon_second">
                <img src="../../public/Logos/platano.png"  alt="icon">
            </div>
            <div @click="setBackgroundTo(3)" class="icon_third">
                <img src="../../public/Logos/coco.png"  alt="icon">
            </div>
            <div @click="setBackgroundTo(4)" class="icon_fourth">
                <img src="../../public/Logos/uvas_.png"  alt="icon">
            </div>
        </div>
    </div>
</template>

<script type="module">
export default {
    data(){
        return{

        }
    },
    methods:{
        setBackgroundTo(number_){
            var rs=document.querySelector(":root");
            if(number_===1){
                rs.style.setProperty('--styleBackground', '#DAF7A6')
            }else if(number_===2){
                rs.style.setProperty('--styleBackground', '#E9DA5E')
            }else if(number_===3){
                rs.style.setProperty('--styleBackground', '#D8AEAB')
            }else if(number_===4){
                rs.style.setProperty('--styleBackground', '#F08DD3')
            }
        }
    },
}
</script>

<style scoped>
    .principal_container{
        position: fixed;
        left: 2%;
        bottom: 10%;
        border-radius: 50%;
    }
    .principal_img{
        display: block;
        margin: auto;
        width: 50px;
    }
    img{
        width: 30px;
    }
    .first{
        position: relative;
        width: 50px;
        margin: 10px;
    }
    .icon_first{
        display: inline;
        position: absolute;
        top: -40px;
        right: -20px;
    }
    .icon_second{
        display: inline;
        position: absolute;
        right: -40px;
        bottom: 20px;
    }
    .icon_third{
        display: inline;
        position: absolute;
        right: -40px;
        bottom: -20px;
    }
    .icon_fourth{
        display: inline;
        position: absolute;
        right: -10px;
        bottom: -50px;
    }
</style>