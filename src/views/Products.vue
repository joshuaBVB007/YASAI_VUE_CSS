<template>
  <div class="about">
    <div class="inner">
      <div class="polaroid" v-for="item of lista" :key="item">
          <h1>{{item.nombre}}</h1>
          <img :src="item.url" alt="" srcset="">
          <button v-on:click="select_item">add</button>
          <button>details</button>
      </div>
    </div>
  </div>
</template>

<script>
      export default{
          data(){
              return{
                  lista:[
                    {nombre:"Açaí",url:"/Frutas/banana.jpeg"},
                    {nombre:"Açaí",url:"/Frutas/cereza.jpeg"},
                    {nombre:"Açaí",url:"/Frutas/fresa.jpeg"},
                    {nombre:"Açaí",url:"/Frutas/manzana_verde.jpeg"},
                    {nombre:"Açaí",url:"/Frutas/melocoton.jpeg"},
                    {nombre:"Açaí",url:"/Frutas/piña.jpeg"},
                    {nombre:"Açaí",url:"/Frutas/uvas.jpeg"},
                  ],
              }
          },
          methods:{
              select_item(){
                console.log("you clicked");
              }
          }
      }
</script>

<style scoped>
  .about {
    width: 60%;
    display: block;
    margin:2% auto;
  }
  h1{
    text-align: center;
  }
  img{
    width: 60%;
    height: 120px;
    border-radius: 50%;
  }
  .inner{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .polaroid{
    width: 250px;
    border-radius: 50%;
  }
</style>
