<template>
  <div class="about">
    <input v-model="nameOfproduct" type="text" placeholder="Escribe nombre del producto">
    <div class="inner">
      <div class="polaroid" v-for="item of FilteredProducts" :key="item.nombre">
          <h1>{{item.nombre}}</h1>
          <img :src="item.url" :alt="item.nombre" srcset="">
          <button v-on:click="select_item">add</button>
          <button @click="gotoshower(item)">details {{ injected_value }}</button>
      </div>
      <Block :counter="count" />
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
      //7
      export var lista_frutas=[
            {id:0,nombre:"Banana",url:"/Frutas/banana.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:1,nombre:"Cereza",url:"/Frutas/cereza.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:2,nombre:"Fresa",url:"/Frutas/fresa.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:3,nombre:"Manzana",url:"/Frutas/manzana_verde.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:4,nombre:"Melocotón",url:"/Frutas/melocoton.jpeg",desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:5,nombre:"Piña",url:"/Frutas/piña.jpeg",desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:6,nombre:"Uvas",url:"/Frutas/uvas.jpeg",desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},
      ];
      //5
      export var lista_postres=[
            {id:0,nombre:"postre1",url:"/Postres/postre1.png",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:1,nombre:"Postre2",url:"/Postres/postre2.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:2,nombre:"Postre3",url:"/Postres/postre4.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:3,nombre:"Postre4",url:"/Postres/postre5.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:4,nombre:"Postre5",url:"/Postres/postre6.jpeg",desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},
      ];
      //5
      export var lista_smoothies=[
            {id:0,nombre:"smoothie1",url:"/Smoothie/smoothie_1.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:1,nombre:"smoothie2",url:"/Smoothie/smoothie_2.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:2,nombre:"smoothie3",url:"/Smoothie/smoothie_3.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:3,nombre:"smoothie4",url:"/Smoothie/smoothie_4.jpeg",
            desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},

            {id:4,nombre:"smoothie5",url:"/Smoothie/smoothie_5.jpeg",desc:`Es un fruto con cualidades variables en tamaño,
            color y firmeza, alargado, generalmente curvado y carnoso, 
            rico en almidón cubierto con una cáscara, que puede ser verde, 
            amarilla, roja, púrpura o marrón cuando está madura.`},
      ];

      export default{
          components:{
            Block,
            Menu,
          },
          provide: {
                message:'Menu',
          },
          data(){
             return{
                  //por defecto cogeremos la lista de frutas
                  lista_productos_en_muestra:lista_frutas,
                  Postres:lista_postres,
                  Frutas:lista_frutas,
                  Smoothies:lista_smoothies,
                  nameOfproduct:"",
                  injected_value:this.message,
                  count:0
              }
          },
          computed:{
              FilteredProducts(){
                return this.nameOfproduct.length > 0 
                ? this.lista_productos_en_muestra.filter((item) => item.nombre.toLowerCase().includes(this.nameOfproduct.toLowerCase()))
                : this.lista_productos_en_muestra
              }
          },
          methods:{
              select_item(){
                this.count++;
                console.log(this.count)
                this.show_me_dimensions()
              },
              show_me_dimensions(){
                let w = window.innerWidth;
                let h = window.innerHeight;

                console.log("Ancho:"+w+" Alto es:"+h);
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
    width: 50%;
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


  @media screen and (max-width:540px){
          .polaroid{
            width:50%;
          }
  }
</style>
