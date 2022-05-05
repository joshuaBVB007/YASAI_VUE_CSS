<template>
    <div class="counter">
        <h1>{{ cantidad }}</h1>
    </div>
</template>

<style scoped>
        .counter{
            position:absolute;
            top:-10px;
            right:-2px;
        }
</style>

<script>
    export default {
        data(){
            return {
                cantidad:0
            }
        },
        methods:{
            increase(){
                this.cantidad=this.cantidad+1;
            }
        },
        watch:{
            cantidad(new_value){
                console.log(`El valor nuevo es: ${new_value}`);
            }
        }
    }
</script>