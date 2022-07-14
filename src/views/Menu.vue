<template>
    <div class="container">
            <div class="icons">
                <h1>{{nombre}}</h1>
                <div class="icon" @click="setPostres('Postres')">
                    <img   src="/Logos/cupcake.png" alt="">
                </div>
                <div class="icon" @click="setSmoothies('Smoothies')">
                    <img   src="/Logos/smoothie.png" alt="">
                </div>
                <div class="icon" @click="setFrutas('Frutas')">
                    <img  src="/Logos/frutas.png" alt="">
                </div>
            </div>
    </div>    
</template>

<script type="module">

        export default {
            emits: ['frutas','postres','smoothies'],
            data(){
                return{
                    nombre:"Menu",
                }
            },
            methods:{
                setPostres(){
                    this.$emit('postres')
                },
                setSmoothies(){
                    this.$emit('smoothies')
                },
                setFrutas(){
                    this.$emit('frutas')
                },
            },
        }
</script>

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

