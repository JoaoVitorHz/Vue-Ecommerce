<template>
   <section>    
        <div class="div-checkout-container">
            <div class="div-row-left">
                <div class="div-row">
                    <label for="">Nome*</label>
                    <input type="text" v-model="user_data.user_name">
                </div>
        
                <div class="div-row">
                    <label for="">E-mail*</label>
                    <input type="text" v-model="user_data.user_email">
                </div>
        
                <div class="div-row">
                    <label for="">CPF*</label>
                    <input type="text" v-model="user_data.user_cpf">
                </div>
        
                <div class="div-row div-row-container">
                    <div>
                        <label for="">Data de nascimento*</label>
                        <input type="date" v-model="user_data.user_data_birthday">
                    </div>
                  
                    <div>
                        <label for="">Telefone*</label>
                        <input type="text" v-model="user_data.user_phone">
                    </div>
                </div>
        
            </div>
            <div class="div-row-right">
                <div class="div-row">
                    <label for="">CEP*</label>
                    <input type="text" v-model="user_data.user_cep">
                </div>
        
                 <div class="div-row div-row-container">
                    <div class="div-address">
                        <label for="">Endereço*</label>
                        <input type="text" v-model="user_data.user_adress">
                    </div>
                  
                    <div class="div-adrres-number">
                        <label for="">Número*</label>
                        <input type="text" v-model="user_data.user_adress_number">
                    </div>
                </div>

                  <div class="div-row div-row-container">
                    <div>
                        <label for="">Complemento*</label>
                        <input type="text" v-model="user_data.user_adress_extra">
                    </div>
                  
                    <div>
                        <label for="">Bairro*</label>
                        <input type="text" v-model="user_data.user_adress_neighborhood">
                    </div>
                </div>
        
                <div class="div-row div-row-container">
                    <div class="div-city" >
                        <label for="">Cidade*</label>
                        <input type="text" v-model="user_data.user_adress_city">
                    </div>
                  
                    <div class="div-state">
                        <label for="">Estado*</label>
                        <input type="text" v-model="user_data.user_adress_state">
                    </div>
                </div>
                <div class="div-row-button">
                    <button @click="sendForm" >Concluir Comprar</button>
                </div>
            </div>
        </div>

        <div v-if="show"  class="div-modal">
            <div class="div-modal-container">
                <div class="div-modal-header">
                    <span @click="show = !show">&times;</span>
                </div>
                <div class="div-modal-content">
                    <img :src="error.img" alt="">
                    <span>{{ error.message }}</span>
                </div>
            </div>
        </div>
   </section>
</template>



<script setup>
    import {  ValidateName, ValidateCpf, ValidateDate, ValidatePhone, ValidateCep, ValidateNumberAddress } from '../global/Validations'
</script>

<script>


export default {
   data() {
    return {
        user_data: {
            user_name: "",
            user_email: "",
            user_cpf: "",
            user_data_birthday: "",
            user_phone: "",
            user_cep: "",
            user_adress: "",
            user_adress_number: "",
            user_adress_extra: "",
            user_adress_neighborhood: "",
            user_adress_city: "",
            user_adress_state: ""
        }, 
        data_cep: [],
        show: false,
        error: {
            message: "",
            img: ""
        }
    }
  }, 
  watch: {
    'user_data.user_cep': function(newValue, oldValue){
      if(newValue.length == 8)
            this.getCep(newValue)
    }
  },
  methods: {
    sendForm(){
        if(ValidateName(this.user_data.user_name) == false){
            this.error.message = "Por favor insira um nomé valido"
            this.error.img = "src/assets/checkout/error.png"
            console.log("Opa nome")
        }
        else if(ValidateCpf(this.user_data.user_cpf) == false){
            this.error.message = "Por favor insira um CPF valido"
            this.error.img = "src/assets/checkout/error.png"
            console.log("Opa cpf")
        }
        else if(ValidateDate(this.user_data.user_data_birthday) == false){
            this.error.message = "Por favor insira um data de nascimento valida"
            this.error.img = "src/assets/checkout/error.png"
            console.log("Opa data")
        }
        else if(ValidatePhone(this.user_data.user_phone) == false){
            this.error.message = "Por favor insira um telefone valído"
            this.error.img = "src/assets/checkout/error.png"
            console.log("Opa phone")
        }
        else if(ValidateCep(this.user_data.user_cep) == false){
            this.error.message = "Por favor insira um CEP valido"
            this.error.img = "src/assets/checkout/error.png"
            console.log("Opa cep")
        }
        else if(ValidateNumberAddress(this.user_data.user_adress_number) == false){
            this.error.message = "Por favor insira um numero de residencia valido"
            this.error.img = "src/assets/checkout/error.png"
        } else {
            this.error.message = "Usuario cadastro com sucesso"
            this.error.img = "src/assets/checkout/sucess.png"
        }

            this.show = !this.show
    },
    async getCep(cep) {
        const response = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
        const cepJson = await response.json();
        this.user_data.user_adress_neighborhood = cepJson.bairro
        this.user_data.user_adress = cepJson.logradouro
        this.user_data.user_adress_city = cepJson.localidade
        this.user_data.user_adress_state = cepJson.uf
    }
  }
}
</script>

<style scoped>
    section{
        width: 100vw;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .div-checkout-container{
        width: 1120px;
        height: 470px;
        display: flex;
        gap: 24px;
    }
    .div-row-left{
        width: 50%;
        height: 100%;
    }
    .div-row-right{
        width: 50%;
        height: 100%;
    }

    .div-row input{
        width: 100%;
        height: 45px;
        border: 1.5px solid #909090;
        border-radius: 3px;
        margin-bottom: 35px;
    }

    .div-row-container{
        display: flex;
        gap: 10px;
    }
    .div-row-container div{
        flex: 1;
    }
    .div-address, 
    .div-city{
        flex: 1.5 !important;
    }
    .div-adrres-number, 
    .div-state{
        flex: 0.5 !important;
    }
    .div-row-button{
        display: flex;
        justify-content: flex-end;
    }
    .div-row-button button{
        padding: 13px 51px;
        color: #FFFF;
        background: #8E36B7;

        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;
    }

    .div-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div-modal-container{
        width: 500px;
        height: 400px;
        background-color: white;
    }

    .div-modal-header{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .div-modal-header span{
        cursor: pointer;
        font-size: 35px;
        margin: 0 5px;
    }
    .div-modal-header span:hover{
        color: red;
    }
    .div-modal-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 50px;
    }
    .div-modal-content img{
        width: 200px;
        height: 200px;
    }
</style>
