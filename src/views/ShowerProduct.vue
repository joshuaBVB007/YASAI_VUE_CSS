<template>
    <div class="container">
        <img :src="img" alt="img_fruta_nananan">
        <h1>{{ id }}</h1>
        <p>{{ desc }}</p>
    </div>    
</template>

<script type="module">
// import { lista_productos } from './Products.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            img:lista_productos[this.$route.params.id].url,
            desc: lista_productos[this.$route.params.id].desc,
        }
    },
    methods:{
        setImageToDisplay(){
            this.img=lista_productos[this.id].url;
            console.log(this.id+" "+this.img);
        }
    },
    mounted(){
        this.setImageToDisplay();
    }
}
</script>


<style scoped>
        .container {
            width: 60%;
            margin: 0 auto;
        }
        img{
            display:block;
            margin: 0 auto;
            max-width: 100%;
            height: auto;
        }
        h1{
            text-align: center;
            font-size: 2vw;
        }
        p{
            font-size: 2vw;
        }


        @media screen and (max-width:920px) {
                p{
                    font-size:5vw;
                }
        }
</style>




