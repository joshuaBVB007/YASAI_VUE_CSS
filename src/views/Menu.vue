<template>
    <div class="container">
            <div class="icons">
                <h1>{{nombre}}</h1>
                <div class="icon">
                    <img @click="setPostres('Postres')"  src="/cupcake.png" alt="">
                </div>
                <div class="icon">
                    <img @click="setSmoothies('Smoothies')"  src="/smoothie.png" alt="">
                </div>
                <div class="icon">
                    <img @click="setFrutas('Frutas')" src="/frutas.png" alt="">
                </div>
            </div>
    </div>    
</template>

<script type="module">
        export default {
            emits: ['frutas','postres','smoothies'],
            data(){
                return{
                    nombre:this.message,
                }
            },
            methods:{
                setPostres(){
                    console.log('postres')
                    this.$emit('postres')
                },
                setSmoothies(){
                    console.log("smoothie")
                    this.$emit('smoothies')
                },
                setFrutas(){
                    console.log("frutas")
                    this.$emit('frutas')
                }
            },
            inject:['message']
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

