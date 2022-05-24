<template>
  <div class="about">
    <input v-model="nameOfproduct" type="text" placeholder="Escribe nombre del producto">
    <div class="inner">
      <div class="polaroid" v-for="item of FilteredProducts" :key="item">
          <h1>{{item.nombre}}</h1>
          <img :src="item.url" alt="" srcset="">
          <button v-on:click="select_item">add</button>
          <button @click="gotoshower(item)">details</button>
      </div>
      <Block :counter="count" />
    </div>
  </div>
</template>

<script type="module">
      import  Block from "../components/Block.vue";
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
          components:{
            Block,
          },
          data(){
             return{
                  lista:lista_productos,
                  nameOfproduct:"",
                  count:0
              }
          },
          computed:{
              FilteredProducts(){
                return this.nameOfproduct.length > 0 
                ? this.lista.filter((item) => item.nombre.toLowerCase().includes(this.nameOfproduct.toLowerCase()))
                : this.lista
              }
          },
          methods:{
              select_item(){
                this.count++;
                console.log(this.count)
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
    margin:4% auto;
  }
  input{
    display: block;
    margin:2% auto;
    width:60%;
    height: 24px;
    border-radius: 20px;
    border: 5px solid black;
  }
  h1{
    text-align: center;
    font-weight: normal;
    font-size:x-large;
  }
  img{
    display: block;
    margin:auto;
    width: 40%;
    height: 120px;
    border-radius: 50%;
    border: 10px solid black;
  }
  button{
    display:block;
    margin:4px auto;
    padding: 4px;
    border-radius: 20px;
    font-size:large;
    background-color:pink;
    color:black;
    border:none;
  }
  .inner{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .polaroid{
    width:30%;
    border-radius: 50%;
  }
</style>
