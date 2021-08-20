<template>
  <div class="card">
    <img :src="{imagem}" alt="ta aqui">
    <h2>{{ title }}</h2>
    <p>{{ ingredientes }}</p>
    <h2>{{ valor }}</h2>
    <router-link :to="{name: `produto`, params : { id : id}}"> <button>Adicionar no Carrinho</button> </router-link>
    
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    id : String,
    imagem: String,
    title: String,
    ingredientes: String,
    valor: String,
  },
};
</script>
<style>
.card {
  background: #440e0ba9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  width: 250px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 5px black;
  
}
.card h2 {
  font-size: 20px;
  font-weight: bold;
  color: #deb887b7;
}
.card p {
  font-size: 15px;
  color: #deb887b7;
}
.card button {
  width: 170px;
  height: 40px;

  border-radius: 6px;
  background-color: #c3121c;
  color: #ffffff;
  border: none;
}
</style>
