<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Block from '@/components/Block.vue'
import Header from '@/components/Header.vue'
import Roulette from '@/views/Roulette.vue'
</script>

<template>
      <div class="general">
        <Header/>
        <Block/>
        <router-view></router-view>
        <Roulette></Roulette>
      </div>
</template>

<style>

  :root{
    --styleBackground:#DAF7A6;
  }

  @font-face {
    font-family: letrita;
    src: url("../src/assets/Bangers/Bangers-Regular.ttf");
  }

  body{
    background-color: var(--styleBackground)
  }

  button{
    display:block;
    margin:4px auto;
    padding:10px;
    width: 50%;
    border-radius: 10px;
    font-size:1.4vw;
    background-color:rgb(240, 94, 118);
    color:black;
    border:none;
  }

  p{
    font-family: letrita;
  }

  *{
    font-family: letrita, arial,italic;
    margin:0;
  }

</style>
