<template>
  <div class="about">
    <div class="inner">
      <div class="polaroid" v-for="item of lista" :key="item">
          <h1>{{item.nombre}}</h1>
          <img :src="item.url" alt="" srcset="">
          <button v-on:click="select_item">add</button>
          <button @click="gotoshower(item)">details</button>
      </div>
    </div>
  </div>
</template>

<script type="module">
      export var lista_productos=[
            {id:0,nombre:"Banana",url:"/Frutas/banana.jpeg"},
            {id:1,nombre:"Cereza",url:"/Frutas/cereza.jpeg"},
            {id:2,nombre:"Fresa",url:"/Frutas/fresa.jpeg"},
            {id:3,nombre:"Manzana",url:"/Frutas/manzana_verde.jpeg"},
            {id:4,nombre:"Melocotón",url:"/Frutas/melocoton.jpeg"},
            {id:5,nombre:"Piña",url:"/Frutas/piña.jpeg"},
            {id:6,nombre:"Uvas",url:"/Frutas/uvas.jpeg"},
      ];

      export default{
          data(){
             return{
                  lista:lista_productos
              }
          },
          methods:{
              select_item(){
                console.log("you clicked");
              },
              gotoshower(object_){
                let id_obj=object_.id;
                this.$router.push({path:`/shower/${id_obj}`})
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
