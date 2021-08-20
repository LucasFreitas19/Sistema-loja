<template>

  <div>
    <Header />
    <section class="produtos">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Detalhes do produto</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 img-produto">
            <img src="../assets/canguru.png" alt="ta aqui" /></div>
      </div>
      <div class="row">
        <!-- <h1>{{ title }}</h1>  -->
        <div class="col-md-12">
            <h1>Canguru</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
            <!-- <h2>{{ valor }}</h2>  -->
            <h2 id="preco">Valor: 25.00 </h2>
        </div>
        <div class="col-md-6 quantidade">
                <span class="quantidade-txt"> Quantidade </span>
                <div></div>
                <span id="quantidade-input" > <input type="number"></span>         
        </div>
            <div class="row">
                <div class="col-md-12 linha">
                       <hr>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h1>Descricao</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 p-des">
                        <!-- <p>{{ ingredientes }}</p>  -->
                        <p>Pão Australiano com hamburguer steak fire 200g, queijo mussarela cremoso, cebola frita, bacon em pedacos e molho barbecue</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 btn-class">
                        <button class="btn">Fazer Pedido </button>
                    </div>

                </div>
            </div>
        </div>
      </div>
      <div class="row">
        <p>{{ ingredientes }}</p>
      </div>
      <div class="row">
        <h2>{{ valor }}</h2>
      </div>
    
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "FiltroProdutos",
  components: {
    Header,
    Footer,
  },
  data: function() {
    return {
      newDetail: {},
      news: [
        {
          id: 1,
          imagem: require("../assets/artico.png"),
          title: "Artico",
          ingredientes: `Pão Brioche com bife de picanha 250g, queijo mussarela, cebolinha caramelizada, alface e molho de maionese com alho e chimichurri`,
          valor: "25.00",
        },
        {
          id: 2,
          imagem: require("../assets/canguru.png"),
          title: "Canguru",
          ingredientes: `Pão Australiano com hamburguer steak fire 200g, queijo mussarela cremoso, cebola frita, bacon em pedacos e molho barbecue`,
          valor: "25.00",
        },
        {
          id: 3,
          imagem: require("../assets/Chief.png"),
          title: "Chief",
          ingredientes: `Pão Brioche com duplo hamburguer, queijo mussarela, picles, alface, tomate, cebola e molho especial a rose francesa da casa`,
          valor: "20.00",
        },
        {
          id: 4,
          imagem: require("../assets/Panda.png"),
          title: "Panda",
          ingredientes: `Pão Brioche com hamburguer de soja 200g, queijo de mandioca, alface americano, kani, cenoura, tomate e rucula`,
          valor: "15.00",
        },
        {
          id: 5,
          imagem: require("../assets/urso.png"),
          title: "Urso",
          ingredientes: `Pão Brioche com steak picanha 350g, cheddar e mussarela cremosos, bacon, cebolinha caramelizada, cebola roxa, picles, alface, molho barbacue e molho picante`,
          valor: "30.00",
        },
        {
          id: 6,
          imagem: require("../assets/viking.png"),
          title: "Viking",
          ingredientes: `Pão Gourmet com hamburguer 300g, mussarela, fricasse de frango e molho de 4 queijos`,
          valor: "28.00",
        },
      ],
    };
  },
  computed: {
    eventsFiltered: function() {
      return this.events.filter(
        (event) =>
          event.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
  },
  created: function() {
    const result = this.home.filter((element) => {
      return element.id === this.$route.params.id;
    });

    console.log("====", result);
  },
};
   
  

    

</script>
<style>
.produtos{
    background: #deb887b7;
    width: 100%;
height : 850px;
padding: 45px 0px;
}
.img-produto{
    text-align: center;
    max-width: 100%;
    padding-top: 10px;
}

.produtos img{
    width: 400px;
}
.produtos h1{
    font-size: 30px;
    margin: 0;
    
}

.quantidade-txt{
    text-align: center;
    font-size: 23px;
    padding-left:20px;
    
}
.hr{
    width: 5px;
    height: 5px;
    color: black;
    border: black;
}  

.btn-class{
text-align: center;
width: 100px;
height: 100px;
}
.btn-class button{

    padding: 30px;
    border: 2px solid black;
    border-radius: 20px;
    width: 320px;
    font-size: 30px;
}

.linha{
    max-width: 100%;
    height: 50px;
}
.linha hr{
    height: 5px;
    background: #440e0ba9;
    border-radius: 2px ;
}

.p-des{
    font-size: 25px;
}

.quantidade{
    margin-left: 760px;
}
.quantidade .quantidade-txt .quantidade-input{
    padding-left: 30px;

}



</style>
