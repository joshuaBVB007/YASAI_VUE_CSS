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
  <div class="head_principal">
      <div class="header_one" v-for="icon of iconos" :key="icon">
            <img :src="icon.url" alt="" srcset="">
      </div>
      <div class="header_two" v-for="logo of logos" :key="logo">
            <img :src="logo.url" alt="" srcset="">
            <!-- <Counter/> -->
      </div>
      <div class="header_two">
            <img src="./../../public/Logos/shopping-cart.png" alt="" srcset="">
            <Counter/>
      </div>
  </div>
</template>

<style scoped>
    .head_principal {
          position:fixed;
          top:10%;
          width:8%;
          background-color:white;
          border-radius:20px;
    }
    .header_one{
      display:flex;
      flex-direction: column;
      border-radius: 0 20px 20px 0;
    }
    .header_two{
      position:relative;
      display:flex;
      flex-direction: column;
      border-radius: 0 20px 20px 0;
    }
    img{
       margin: 6px;
    }

    @media screen and (min-width: 1000px){
          .head_principal{
            width:3%;
          }      
    }

</style>
