<template>
    <div class="container">
        <img :src="img" alt="img_fruta_nananan">
        <h1>{{ nombre }}</h1>
    </div>    
</template>


<style scoped>
        .container {
            width: 60%;
            margin: 0 auto;
        }
        img{
            display:block;
            margin: 0 auto;
        }
        h1{
            text-align: center;
        }
</style>


<script>
export default {
    data(){
        return {
            img:this.$route.params.url,
            nombre:this.$route.params.nombre,
        }
    },
}
</script>

