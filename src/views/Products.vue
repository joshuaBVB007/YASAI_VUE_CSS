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

<script type="module">
      export default{
          data(){
             return{
                  lista:[
                    {nombre:"Banana",url:"/Frutas/banana.jpeg"},
                    {nombre:"Cereza",url:"/Frutas/cereza.jpeg"},
                    {nombre:"Fresa",url:"/Frutas/fresa.jpeg"},
                    {nombre:"Manzana",url:"/Frutas/manzana_verde.jpeg"},
                    {nombre:"Melocotón",url:"/Frutas/melocoton.jpeg"},
                    {nombre:"Piña",url:"/Frutas/piña.jpeg"},
                    {nombre:"Uvas",url:"/Frutas/uvas.jpeg"},
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
    width:60%;
    display: block;
    margin:6% auto;
    color:rgba(149, 0, 255, 0.605);
  }
  h1{
    text-align: center;
  }
  img{
    display: block;
    margin:auto;
    width: 50%;
    height: 120px;
    border-radius: 50%;
  }
  button{
    display:block;
    margin: auto;
  }
  .inner{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .polaroid{
    width: 250px;
    border-radius: 50%;
  }
</style>
