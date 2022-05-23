<script type="module">
      import Counter from "../components/Counter.vue"
      export default{
        data(){
          return{
              iconos:[
                  {url:"/Logos/fresa.png"},
                  {url:"/Logos/platano.png"},
                  {url:"/Logos/uvas_.png"}
              ],
              logos:[
                  {url:"/Logos/sale.png"},
                  {url:"/Logos/shopping-bag.png"},
              ],
              contador_activo:true
          }
        },
        methods:{},
        components:{
            Counter
        }
      }        
</script>
<template>
  <div class="container">
      <div class="head_principal">
            <div class="header_one" v-for="icon of iconos" :key="icon">
                  <img class="imagen" :src="icon.url" alt="" srcset="">
            </div>
            <div class="header_two" v-for="logo of logos" :key="logo">
                  <img class="imagen" :src="logo.url" alt="" srcset="">
            </div>
            <div class="header_two">
                  <img class="imagen" src="./../../public/Logos/shopping-cart.png" alt="" srcset="">
                  <Counter/>
            </div>
      </div>
  </div>
</template>

<style scoped>
    .container{
      position:fixed;
      bottom: 0;
      width: 100%;
      /* background-color:yellow; */
    }
    .head_principal {
          display:flex;
          flex-direction:row;
          background-color:rgb(8, 157, 231);
          border-radius:20px;
          width:20%;
          margin: auto;
    }
    .header_two{
      position:relative;
    }
    .imagen{
       margin: 6px;
       width:30px;
    }

</style>
