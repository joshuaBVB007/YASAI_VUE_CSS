<template>
  <div class="about">
    <input v-model="nameOfproduct" type="text" placeholder="Escribe nombre del producto">
    <h1>Elige una opcion en el menú</h1>
    <br>
    <br>
    <div class="inner">
          <div class="polaroid" v-for="item of FilteredProducts" :key="item.Nombre">
              <h1 class="title_product">{{item.Nombre}}</h1>
              <div class="prize_product">
                  <img :src="item.url" :alt="item.Nombre" srcset="">
                  <h1>3,5€</h1>
              </div>
              <button>add</button>
              <button>details</button>
          </div>
      <!-- <button class="ajax" @click="useAjax">AJAX</button> -->
      <Block :counter="2" />
      <Menu 
      @postres="()=> lista_productos_en_muestra=Postres"
      @frutas="()=> lista_productos_en_muestra=Frutas"
      @smoothies="()=> lista_productos_en_muestra=Smoothies"
      />
    </div>
  </div>
</template>

<script type="module">
      import  Block from "../components/Block.vue";
      import  Menu from "./Menu.vue";
      import { frutas_listas,postres_listas,smoothies_listas } from "../components/Header.vue";

      export default{
          components:{
            Block,
            Menu,
          },
          data(){
             return{
                  //por defecto debemos asignar una lista sino da error
                  lista_productos_en_muestra:undefined,
                  Postres:postres_listas,
                  Frutas:frutas_listas,
                  Smoothies:smoothies_listas,
                  nameOfproduct:"",
              }
          },
          computed:{
              FilteredProducts(){
                return this.nameOfproduct.length > 0 
                ? this.lista_productos_en_muestra.filter((item) => item.Nombre.toLowerCase().includes(this.nameOfproduct.toLowerCase()))
                : this.lista_productos_en_muestra
              }
          },
          methods:{
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

  button{
    font-size:large;
    text-align: center;
    width:100%;
  }

  .prize_product{
    position: relative;
  }

  .prize_product h1{
    position: absolute;
    width:30%;
    left:2%;
    bottom:4%;
    padding: 10px;
    color:black;
    background-color:rgba(250, 250, 250, 0.521);
  }

  .title_product{
      text-align: center;
      font-weight: normal;
      font-size:x-large;
      margin: 10px;  
      border-radius: 20px;
      background-color:white;
  }
  img{
    display: block;
    margin:auto;
    width: 50%;
    height: 120px;
    border-radius: 50%;
    border: 10px solid black;
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


  @media screen and (max-width:540px){
          .polaroid{
            width:60%;
          }
  }
</style>
