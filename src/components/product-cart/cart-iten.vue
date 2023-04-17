<template>
  <div class="div-cart-list-itens">
                <div class="div-iten-name">
                    <img src="../../assets/product-cart/trash.png" alt="">
                    <div>
                        <h6>{{ product_category}}</h6>
                        <span>{{ product_name}}</span>
                    </div>

                </div>
                <div class="div-iten-qtd">
                        <div class="div-less" @click="lessQtd()">-</div>
                        <div class="div-qtd-total">{{product_total_qtd}}</div>
                        <div class="div-add" @click="moreQtd()">+</div>
                </div>
                <div class="div-iten-value">
                    <span>
                        <strong>R$ {{product_price}}</strong> à vista ou 10x {{product_price_credit}}
                    </span>
                </div>
                <div class="div-iten-value-total">
                    <span>
                        <strong>{{product_total_price}}</strong> à vista ou 10x {{product_credit}}
                    </span>
                </div>
            </div>
</template>

<script>
export default {
    data() {
        return {
            product_total_price: this.formatPrice(this.product_price * this.product_qtd),
            product_credit: this.formatPrice((this.product_price * this.product_qtd) / 10),
            product_price_credit: this.formatPrice(this.product_price / 10),
            product_total_qtd: this.product_qtd
        };
    },
    props: {
        product_id: Number,
        product_name: String,
        product_category: String,
        product_description: String,
        product_image_url: String, 
        product_price: Number,
        product_qtd: Number
    }, 
    methods: {
        formatPrice(number) {
            number = parseFloat(number); 
            const numberFormated = number.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            });
            return numberFormated
        }, 
        moreQtd(){
            this.product_total_qtd = this.product_total_qtd + 1
            this.product_total_price = this.formatPrice(this.product_price * this.product_total_qtd)
            this.product_credit = this.formatPrice((this.product_price * this.product_total_qtd) / 10)

            let total_value = localStorage.getItem('total_value')
            total_value = parseFloat(total_value)
            
            localStorage.setItem('total_value', total_value + this.product_price)


            let response = JSON.parse(localStorage.getItem('products'))

            let teste = response
            const dataSelect = response.filter(i => i.product_id == this.product_id)

            if(dataSelect.length != 0){
                var total = dataSelect[0].product_qtd
                if (total == null)
                    total = 1

                response = response.filter(i => i.product_id != this.product_id)
            }

            const productData = {
                'product_id' : this.product_id,
                'product_name': this.product_name,
                'prodcut_category': this.product_category,
                'product_description': this.product_description,
                'product_image_url': this.product_image_url,
                'product_price': this.product_price,
                'product_qtd': this.product_total_qtd,
            }
            response.push(productData)

            localStorage.setItem('products',JSON.stringify(response))
        },
        lessQtd(){
                if(this.product_total_qtd != 0){
                this.product_total_qtd = this.product_total_qtd == 0 ? 0 : (this.product_total_qtd - 1)
                this.product_total_price = this.formatPrice(this.product_price * this.product_total_qtd),
                this.product_credit = this.formatPrice((this.product_price * this.product_total_qtd) / 10)

                let total_value = localStorage.getItem('total_value')
                total_value = parseFloat(total_value)

            
                const a = this.product_total_qtd == 0 ?  this.product_price : (this.product_price * this.product_total_qtd);
                localStorage.setItem('total_value', total_value -  this.product_price)


            let response = JSON.parse(localStorage.getItem('products'))

            let teste = response
            const dataSelect = response.filter(i => i.product_id == this.product_id)

            if(dataSelect.length != 0){
                var total = dataSelect[0].product_qtd
                if (total == null)
                    total = 1

                response = response.filter(i => i.product_id != this.product_id)
            }

            const productData = {
                'product_id' : this.product_id,
                'product_name': this.product_name,
                'prodcut_category': this.product_category,
                'product_description': this.product_description,
                'product_image_url': this.product_image_url,
                'product_price': this.product_price,
                'product_qtd': this.product_total_qtd,
            }
            response.push(productData)

            localStorage.setItem('products',JSON.stringify(response))





            }
      
        }
    }
}
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