<script type="module">

      export default{
        data(){
          return{
              logos:[
                  {url:"/Logos/sale.png"},
                  {url:"/Logos/shopping-bag.png"},
              ],
              contador_activo:true
          }
        },
        props:{
          counter:Number,
        },  
        methods:{},
      }        
</script>

<template>
  <div class="container">
      <div class="head_principal">
            <div class="header_two" v-for="logo of logos" :key="logo">
                  <img class="imagen" :src="logo.url" alt="" srcset="">
            </div>
            <div class="block_one">
              <img class="imagen" src="/public/Logos/shopping-cart.png" alt="" srcset="">
              <h1 class="counter">{{counter}}</h1>
            </div>
      </div>
  </div>
</template>

<style scoped>
    .container{
      position:fixed;
      bottom: 2%;
      width: 100%;
      /* background-color:yellow; */
    }
    .head_principal {
          position: relative;
          display:flex;
          flex-direction:row;
          justify-content:center;
          background-color:rgb(8, 157, 231);
          border-radius:20px;
          width:50%;
          margin: auto;
    }
    .counter{
      position: absolute;
      top:-8px;
      right: -2px;
      color:black;
    }
    .block_one{
      position: relative;
    }
    .header_two{
      position:relative;
    }
    .imagen{
       margin: 6px;
       width:30px;
    }

</style>
