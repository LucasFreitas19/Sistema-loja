import Home from "./Pages/Home.vue";
import VueRouter from "vue-router";
import Produtos from "./Pages/Produtos.vue";

const routes = [
    {path: "/", component: Home, name: 'home'},
    {path: "/:id", component: Produtos, name: 'produto'}
    
    ];
    const router = new VueRouter({
    routes ,
    mode: 'history'
    })
    export default router