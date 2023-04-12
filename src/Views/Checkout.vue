<template>
   <section>    
        <div class="div-checkout-container">
            <div class="div-row-left">
                <div class="div-row">
                    <label for="">Nome*</label>
                    <input type="text">
                </div>
        
                <div class="div-row">
                    <label for="">E-mail*</label>
                    <input type="text">
                </div>
        
                <div class="div-row">
                    <label for="">CPF*</label>
                    <input type="text">
                </div>
        
                <div class="div-row div-row-container">
                    <div>
                        <label for="">Data de nascimento*</label>
                        <input type="text">
                    </div>
                  
                    <div>
                        <label for="">Telefone*</label>
                        <input type="text">
                    </div>
                </div>
        
            </div>
            <div class="div-row-right">
                <div class="div-row">
                    <label for="">CEP*</label>
                    <input type="text">
                </div>
        
                 <div class="div-row div-row-container">
                    <div class="div-address">
                        <label for="">Endereço*</label>
                        <input type="text">
                    </div>
                  
                    <div class="div-adrres-number">
                        <label for="">Número*</label>
                        <input type="text">
                    </div>
                </div>

                  <div class="div-row div-row-container">
                    <div>
                        <label for="">Complemento*</label>
                        <input type="text">
                    </div>
                  
                    <div>
                        <label for="">Bairro*</label>
                        <input type="text">
                    </div>
                </div>
        
                <div class="div-row div-row-container">
                    <div class="div-city">
                        <label for="">Cidade*</label>
                        <input type="text">
                    </div>
                  
                    <div class="div-state">
                        <label for="">Estado*</label>
                        <input type="text">
                    </div>
                </div>
                <div class="div-row-button">
                    <router-link to="/product-cart">Concluir Comprar</router-link>
                </div>
            </div>
        </div>
   </section>
</template>

<script setup>

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
    .div-row-button a{
        padding: 13px 51px;
        color: #FFFF;
        background: #8E36B7;

        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;
    }

</style>
