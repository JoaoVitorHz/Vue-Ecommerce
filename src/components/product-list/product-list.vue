<template>
    <section>
        <div class="div-search-product">
            <span>Encontre seu produto</span>
            <div class="div-search-product-input">
                <input type="text" placeholder="Pesquisar...">
                <button><img src="../../assets/product-list/search.svg" alt=""></button>
            </div>
        </div>

        <div class="div-list-products">
            <ProductItem v-for="product in products" :key="product.id" 
            :idProduct="product.id" 
            :name="product.name" 
            :category="product.category"
            :description="product.description"
            :imageUrl="product.imageUrl"
            :price="product.price"
            />
        </div>
    </section>
</template>

<script setup>
    import ProductItem from './product-item.vue'
</script>

<script>
export default {
    data(){
        return {
            id: null, 
            products: null
        }
    }, 
    methods: {
        async getProducts() {
            const response = await fetch("https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json");
            console.log(response)
           
            const data = await response.json();
            this.products = data;
        }
    }, mounted() {
        this.getProducts();
    }
}
</script>

<style scoped>
    section{
        width: 100vw;
        min-height: 100vh;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .div-search-product{
        width: 80%;
        height: 95px;
        background-color: #fff;
        box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .div-search-product span{
        font-weight: 700;
        font-size: 20px;
        color: #909090;
    }
    .div-search-product-input{
        display: flex;
        width: 80%;
        height: 46px;
    }
    .div-search-product-input input{
        border: 1px solid #909090;
        width: 100%;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        padding: 20px;
        font-weight: 400;
        font-size: 16px;
        outline: 0;
    }
    .div-search-product-input button{
        background-color: #8E36B7;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        width: 52px;
    }

    .div-list-products{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-top: 100px;
        margin: 100px 0 150px 0;
    }
</style>