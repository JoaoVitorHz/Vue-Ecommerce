<template>
    <header>
        <div class="div-header">
            <div class="div-img">
                <router-link to="/product-list"><img src="../../assets/header/logo.svg" alt=""></router-link>
            </div>
            <div class="div-product">
                <router-link to="/product-cart">
                    Produtos
                    <img src="../../assets/header/cart.svg" alt="">
                </router-link>
            </div>
        </div>
    </header>
</template>

<style scoped>
    header{
        width: 100vw;
        height: 129px;
        display: flex;
        justify-content: center;
    }
    .div-header{
        width: 80%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .div-product{
        display: flex;
        align-items: center;
    }
    .div-product a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    .div-product::after{
        content: '2';
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;

        width: 16px;
        height: 16px;
        border-radius: 50%;

        background-color: red;
        color: #fff;
    }
</style>
