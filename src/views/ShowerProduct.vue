<template>
    <div>
        <img :src="img" alt="img_fruta_nananan">
        <h1>Estamos en {{ $route.params.saludo }}</h1>
    </div>    
</template>


<script>
export default {
    data(){
        return {
            img:this.$route.params.url_img,
        }
    }
}
</script>

