<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';
import { store } from './store.js'

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
    console.log(store.pino);
  },
  methods: {

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
