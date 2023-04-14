<template>
  <div>
    <button @click="setstorage">setStorage</button>

    <input type="text" v-model="datastorage">
    <button @click="getstorage">GetStorage</button>
    {{iten}}
  </div>
</template>

<script>
export default {
    data:()=>({
        datastorage: '',
        iten: []        
    }),
    methods: {
        setstorage(){
            this.getstorage('arquitetura')

            const a = {'name' : 'João', 'arquitetura': '10'}
            
     
            const object = this.iten

            sessionStorage.setItem('arquitetura',JSON.stringify(a))
        },

        getstorage(param) {
            this.iten = JSON.parse(sessionStorage.getItem(param))
        }
    }
}
</script>

<style>

</style>