<template>
<div class="home">
    <Header/>
    <FiltroProdutos/>
    <Footer/>
</div>
</template>
<script>
import Header from '../components/Header.vue'
import FiltroProdutos from "../components/FiltroProdutos.vue"
import Footer from "../components/Footer.vue"

export default {
  name: 'Home',
  components: {
    Header,
    FiltroProdutos,
    Footer
    
  }
}
</script>
<style>

</style>