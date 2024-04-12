<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';
import { store } from './store.js'
import axios from 'axios'

export default {
  components :{
    appHeader,
    appMain,
    appFooter,
  },
  data(){
    return{
      store: store,
    }

  },
  mounted(){
    // console.log(store.pino);
    // console.log(this.store);

  },
  created(){
    this.fetchProduct('http://localhost:3000/products');
  },
  methods: {
    fetchProduct(link){
      axios.get(link).then((result)=>{
        // console.log("Questo è il risultato di result.data da App.vue: ", result.data);
        this.store.products = result.data
        console.log("Questo è il risultato di this.store da App.vue: ", this.store);
      })
    }
  }
}
</script>

<template>
  <appHeader/>
  <appMain/>
  <appFooter/>
  
</template>

<style lang="scss">
@use "./style/general.scss";

</style>
