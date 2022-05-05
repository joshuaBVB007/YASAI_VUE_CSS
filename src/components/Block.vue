<script>
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
                  {url:"/Logos/shopping-cart.png"}
              ]
          }
        },
        methods:{

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
