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
                <ProductIten v-for="product in products" :key="product.id" 
                    :product_id="product.product_id" 
                    :product_name="product.product_name" 
                    :product_category="product.product_category"
                    :product_description="product.product_description"
                    :product_image_url="product.product_image_url"
                    :product_price="product.product_price"
                    :product_qtd="product.product_qtd"
                />
            </div>
            <div class="div-cart-total">
                <div class="div-total">
                    <span class="span-text-total">Total a vista: </span>
                    <span>{{total}}</span>
                </div>
                <div class="div-credit-total">
                    <span class="span-text-total">Total parcelado: </span>
                    <span>
                        Em até <strong>10x R$300,</strong>
                        <br>
                        (30000)
                    </span>
                </div>
            </div>

            <div class="div-cart-footer">
                <div class="div-clear-cart">
                    <img src="../assets/product-cart/trash.png" alt="">
                    <span>Limpra carrinho</span>
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

<script>
export default {
    data() {
        return {
            products: null,
            total: 0
        };
    }, 
    methods: {
        getstorage() {
            const response = JSON.parse(localStorage.getItem('products'))
            this.products = response
        }, 
        teste() {
            setInterval(() => {
                let total_value = localStorage.getItem('total_value')
                total_value = parseFloat(total_value)

                total_value = total_value.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            });

                this.total = total_value
            }, 1000)
        }
    },
    mounted() {
        this.getstorage();
        this.teste()
    }
}
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

    .div-cart-itens{
        overflow-y: scroll;
        height: 312px;
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
