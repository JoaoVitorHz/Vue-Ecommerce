<template>
  <Header />
  <RouterView/>
  <Footer />
</template>

<script setup>
  import Header from './components/header/header.vue'
  import Footer from './components/footer/footer.vue'
</script>

<style>
  *{
    margin: 0; padding: 0; border: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  body{
    overflow-x: hidden;
  }
</style>
