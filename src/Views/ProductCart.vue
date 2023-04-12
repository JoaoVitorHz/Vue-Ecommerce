<template>

    <section>
        <div class="div-cart-container">
            <div class="div-cart-coluns-title">
                <span>Produtos</span>
                <span>Quantidade</span>
                <span>Valor Unitario</span>
                <span>Total</span>
            </div>
            <ProductIten/>
            <ProductIten/>
        </div>
    </section>

</template>

<script setup>
    import ProductIten from '../components/product-cart/cart-iten.vue'
</script>

<style scoped>

    section{
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div-cart-container{
        width: 1120px;
        height: 665px;
    }
    .div-cart-coluns-title{
        display: flex;
        justify-content: space-around;
        margin-bottom: 33px;
    }
    .div-cart-coluns-title span{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
        color: #434343;
    }
    
</style>
