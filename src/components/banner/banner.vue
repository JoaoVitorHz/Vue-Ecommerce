<template>
    <section>
        <div class="div-banner">
            <div class="div-banner-content">
                <h1>Notebooks</h1>
                <h3>As melhores ofertas</h3>
            </div>
        </div>
        <div class="div-inputs-radio">
            <img src="../../assets/banner/radio-button.png" alt="">
        </div>
  </section>
</template>

<style scoped>
    section{
        width: 100vw;
        height: 494px;
    }
    .div-banner{
        width: 100%;
        height: 444px;
        background: linear-gradient(93.06deg, #8E36B7 0%, #D794F6 100%);

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div-banner-content{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #fff;
    }
    .div-banner-content h1{
        font-weight: 900;
        font-size: 72px;
    }
    .div-banner-content h3{
        font-weight: 900;
        font-size: 35px;
    }

    .div-inputs-radio{
        width: 100%;
        padding: 26px;
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    .div-inputs-radio::after{
        content: '';
        width: 30px;
        height: 30px;
        display: block;
        border: 2px solid #ccc;
        border-radius: 50%;
    }
    

</style>