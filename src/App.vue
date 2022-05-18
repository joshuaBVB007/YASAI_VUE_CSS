<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Block from '@/components/Block.vue'
import Header from '@/components/Header.vue'
</script>

<template>
      <div>
        <Header/>
        <Block/>
        <router-view></router-view>
      </div>
</template>

<style>

  @font-face {
    font-family: letrita;
    src: url("../src/assets/Bangers/Bangers-Regular.ttf");
  }

  p{
    font-family: letrita;
  }

  *{
    font-family: letrita, arial,italic;
    margin:0;
  }

</style>
