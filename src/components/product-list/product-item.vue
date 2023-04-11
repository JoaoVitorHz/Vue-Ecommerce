<template>
    <div class="div-product-item-container">
        <div class="div-product-item-image">
            <img :src="imageUrl" alt="">
        </div>
        <div class="div-product-item-desc">
            <div class="div-product-item-desc-content">
                <h6>{{ category }}</h6>
                <h5>{{ name}}</h5>
                <p>{{ description }}</p>
                <span>R$ {{ price }}</span> 
            </div>
        </div>
        <div class="div-product-item-add">
            <button>Adicionar ao carrinho</button>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        idProduct: Number,
        name: String,
        category: String,
        description: String,
        imageUrl: String, 
        price: Number
    }
}
</script>

<style scoped>
    .div-product-item-container{
        width: 356px;
        min-height: 523px;
        box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.1);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .div-product-item-image{
        width: 100%;
        height: 250px;
        background-color: #EBEBEB;
        display: flex;
        justify-content: center;
    }
    .div-product-item-image img{
        height: 250px;
    }
    .div-product-item-desc{
        min-height: 222px;
        background: #FFF;
        padding: 31px;
        flex: auto;
    }
    .div-product-item-desc-content h6{
        font-weight: 700;
        font-size: 14px;
        color: #8E36B7;
        margin-bottom: 10px;
    }
    .div-product-item-desc-content h5{
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 13px;
        color: #434343;
    }
    .div-product-item-desc-content p{
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 20px;
        color: #434343;
    }
    .div-product-item-desc-content span{
        font-weight: 700;
        font-size: 25px;
        color: #434343;
    }


    .div-product-item-add{
        width: 100%;
        height: 51px;
        border-top: 1px solid #AAA;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div-product-item-add button{
        width: 100%;
        height: 100%;
        color: #8E36B7;
        background-color: #FFF;
        cursor: pointer;

        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
    }
    .div-product-item-add button:hover{
        width: 100%;
        height: 100%;
          color: #FFF;
        background-color: #8E36B7;
    }
</style>