<template>

    <section>
        <div class="div-cart-container">
            <div class="div-cart-coluns-title">
                <span>Produtos</span>
                <span>Quantidade</span>
                <span>Valor Unitario</span>
                <span>Total</span>
            </div>
            <div class="div-cart-itens">
                <ProductIten/>
                <ProductIten/>
            </div>
            <div class="div-cart-total">
                <div class="div-total">
                    <span class="span-text-total">Total a vista: </span>
                    <span>R$:3.000,0</span>
                </div>
                <div class="div-credit-total">
                    <span class="span-text-total">Total parcelado: </span>
                    <span>
                        Em até <strong>10x R$300,</strong>
                        <br>
                        (Total R$3.000,00)
                    </span>
                </div>
            </div>

            <div class="div-cart-footer">
                <div class="div-clear-cart">
                    <img src="../assets/product-cart/trash.png" alt="">
                    <span>Limpar carrinho</span>
                </div>
                <div class="div-footer-buttons">
                    <router-link to="/product-cart">Continuar Comprando</router-link>
                    <button>Concluir Compra</button>
                </div>
            </div>
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
    .div-cart-total{
        height: 210px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 40px;
        border-top: 1px solid #B7B7B7;
    }
    .div-total{
        width: 325px;
        display: flex;
        justify-content: space-between;
    }
    .div-total .span-text-total + span{
        font-weight: 700;
        font-size: 26px;
        color: #8E36B7;
    }
    .div-total, 
    .div-credit-total{
        width: 325px;
        display: flex;
        justify-content: space-between;
    }
    .div-credit-total .span-text-total + span{
        font-weight: 400;
        font-size: 18px;
        color: #434343;
    }
    .span-text-total{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
        color: #434343;
    }


    .div-cart-footer{
        border-top: 1px solid #B7B7B7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 64px 0;
    }
    .div-cart-footer .div-clear-cart{
        display: flex;
        align-items: center;

    }
    .div-footer-buttons{
        display: flex;
        gap: 24px;
    }
    .div-footer-buttons a{
        font-weight: 400;
        font-size: 18px;
        color: #434343;
        background-color: #D0D0D0;
        padding: 13px 51px;
        text-decoration: none;
    }

    .div-footer-buttons button{
        padding: 13px 51px;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        background-color: #8E36B7;
    }
</style>
