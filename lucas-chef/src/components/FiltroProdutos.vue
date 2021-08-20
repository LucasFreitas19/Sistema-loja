<template>
  <section class="cardapio">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="cardapio__title">Cardapio</h2>
        </div>
        <div class="col-md-6">
          <input type="text" placeholder="Pesquisar ..." v-model="search" />
        </div>
      </div>
      <div class="row">
        <div v-for="event in eventsFiltered" :key="event.id" class="col-md-4">
          <Card :imagem="event.imagem" :title="event.title" :ingredientes="event.ingredientes" :valor="event.valor" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "FiltroProdutos",
  components: {
    Card,
  },

  data: function() {
    return {
        search : "",
      events: [
        {
          id: 1,
          imagem: require(`../assets/artico.png`),
          title: "Artico",
          ingredientes: `Pão Brioche com bife de picanha 250g, queijo mussarela, cebolinha caramelizada, alface e molho de maionese com alho e chimichurri`,
          valor: "R$25.00",
        },
        {
          id: 2,
          imagem: require("../assets/canguru.png"),
          title: "Canguru",
          ingredientes: `Pão Australiano com hamburguer steak fire 200g, queijo mussarela cremoso, cebola frita, bacon em pedacos e molho barbecue`,
valor: "R$25.00",
        },
        {
          id: 3,
          imagem: require("../assets/Chief.png"),
          title: "Chief",
          ingredientes: `Pão Brioche com duplo hamburguer, queijo mussarela, picles, alface, tomate, cebola e molho especial a rose francesa da casa`,
valor: "R$20.00",
        },
        {
          id: 4,
          imagem: require("../assets/Panda.png"),
          title: "Panda",
          ingredientes: `Pão Brioche com hamburguer de soja 200g, queijo de mandioca, alface americano, kani, cenoura, tomate e rucula`,
valor: "R$15.00",
        },
        {
          id: 5,
          imagem: require("../assets/urso.png"),
          title: "Urso",
          ingredientes: `Pão Brioche com steak picanha 350g, cheddar e mussarela cremosos, bacon, cebolinha caramelizada, cebola roxa, picles, alface, molho barbacue e molho picante`,
valor: "R$30.00",
        },
        {
          id: 6,
          imagem: require("../assets/viking.png"),
          title: "Viking",
          ingredientes: `Pão Gourmet com hamburguer 300g, mussarela, fricasse de frango e molho de 4 queijos`,
valor: "R$28.00",
        },
      ],
    };
  },
  computed: {
    eventsFiltered: function() {
      return this.events.filter((event) =>
         event.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
  },
};
</script>
<style>
.cardapio{
padding: 56px 0px;
background-color: #deb887b7;
width: 100%;
height : 800px;
}
.cardapio .row{
align-items: flex-start;
}
.cardapio .cardapio__title{
  color: #440E0B;
font-size : 36px;
padding: 0;
margin: 0;
}
.cardapio input {
border-radius : 50px;
background-color: #440E0B;
border: none;
width: 70%;
height: 30px;
padding: 4px 14px;
float: right;
}

</style>
