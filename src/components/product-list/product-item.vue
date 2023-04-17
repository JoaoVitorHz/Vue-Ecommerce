<template>
    <div class="div-product-item-container">
        <div class="div-product-item-image">
            <img :src="product_image_url" alt="">
        </div>
        <div class="div-product-item-desc">
            <div class="div-product-item-desc-content">
                <h6>{{ product_category }}</h6>
                <h5>{{ product_name }}</h5>
                <p>{{ product_description }}</p>
                <span>R$ {{ product_price }}</span> 
            </div>
        </div>
        <div class="div-product-item-add">
            <button @click="setstorage">Adicionar ao carrinho</button>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            datastorage: '',
            iten: []
        }
    },
    methods: {
         setstorage(){

            this.getstorage('products')
            const dataSelect = this.iten.filter(i => i.product_id == this.product_id)
            var total = 0
            if(dataSelect.length != 0){

                total = dataSelect[0].product_qtd

                this.iten = this.iten.filter(i => i.product_id != this.product_id)
            }

            const productData = {
                'product_id' : this.product_id,
                'product_name': this.product_name,
                'prodcut_category': this.product_category,
                'product_description': this.product_description,
                'product_image_url': this.product_image_url,
                'product_price': this.product_price,
                'product_qtd': (total != 0) ? total + 1 : 1,
            }
            this.iten.push(productData)


            let total_value = localStorage.getItem('total_value')
            if(total_value != null){
                console.log("sessão não esta nula")
               total_value = parseFloat(total_value)
            } else {
                console.log("sessão esta nula")
                total_value = 0
            }
            
        
            localStorage.setItem('total_value', total_value + this.product_price)
            console.log((total != 0 ? total + 1 : 1))
            localStorage.setItem('products',JSON.stringify(this.iten))
        },
        getstorage(param) {
            
            const response = JSON.parse(localStorage.getItem(param))
            if(response != null)
                this.iten = response
        }
    },
    props: {
        product_id: Number,
        product_name: String,
        product_category: String,
        product_description: String,
        product_image_url: String, 
        product_price: Number
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