<template>
  <div class="div-cart-list-itens">
                <div class="div-iten-name">
                    <img src="../../assets/product-cart/trash.png" alt="">
                    <div>
                        <h6>Eletrônicos</h6>
                        <span>Notebook Acer Aspire 3 A315</span>
                    </div>

                </div>
                <div class="div-iten-qtd">
                        <div class="div-less">-</div>
                        <div class="div-qtd-total">01</div>
                        <div class="div-add">+</div>
                </div>
                <div class="div-iten-value">
                    <span>
                        <strong>R$ 1.500,00</strong>à vista ou 10x R150,00
                    </span>
                </div>
                <div class="div-iten-value-total">
                    <span>
                        <strong>R$ 1.500,00</strong>à vista ou 10x R150,00
                    </span>
                </div>
            </div>
</template>

<script setup>
</script>

<style scoped>
    .div-cart-list-itens{
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #B7B7B7;
        padding: 40px 0;
    }
    .div-iten-name{
        display: flex;
        align-items: center;
        gap: 10px;
        width: 193px;
        height: 76px;
    }
    .div-iten-name div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .div-iten-name img{
        width: 30px;
        height: 30px;
    }
    .div-iten-name h6{
        font-weight: 700;
        font-size: 14px;
        color: #8E36B7;
    }
    .div-iten-name span{
        font-weight: 700;
        font-size: 18px;
        color: #434343;
    }

    .div-iten-qtd{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 97px;
        height: 34px;
    }
    .div-iten-qtd div{
        height: 100%;
        flex: 1;
        border: 1px solid #999999;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div-less,
    .div-add{
        cursor: pointer;
        font-weight: 700;
        font-size: 20px;
        color: #434343;
    }
    .div-less{
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .div-add{
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    .div-iten-value{
        width: 140px !important;
        height: 46px;
    }
    .div-iten-value-total{
        width: 140px !important;
        height: 46px;
    }
</style>