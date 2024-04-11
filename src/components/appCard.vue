<template>
  <div class="card border-black col-4">
    <div class="card--image border-black">
      <img :src="getImagePath(frontImage)" alt="">
      <img :src="getImagePath(backImage)" alt="">
      <span class="favorites-icon"> <i :class="[isInFavorites ? 'fa-solid' : 'fa-regular']" class="fa-heart">
      </i></span>
      <div class="badges white">
        <span v-if="checkValue('discount') !== -1" class="badge discount-percentage">-50&percnt;</span>
        <span v-if="checkValue('tag') !== -1" class="badge eco-badge">Sostenibilità</span>
      </div>
    </div>
    <div class="card--titles">
      <h4 class="brand-title">{{ brand }}</h4>
      <h2 class="product-name">{{ name }}</h2>
      <div class="price">
        <span class="price-text price-now">{{ price }} &euro;
        </span><span class="price-text price-old">{{ price }}&euro;</span>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data(){
    return{
      pino: {
        pasta: true,
        ciccia: false,
        capra: true
      }
    }
  },
  methods:{
    getImagePath(img){
      return new URL(`../assets/${img}`, import.meta.url).href
    },
    getActualPrice(discount, oldPrice){
      return oldPrice-(oldPrice/100*discount)
    },
    checkValue(value){
      // potrei ciclare l'array e se trova un certo tag potrebbe popolare un variabile con l'index a -1
      let index= -1;
      
      for(let i=0; i<this.badges.length; i++){
        if(Object.values(this.badges[i]).includes(value)){
          index = i;
        }
      }

      return index;
    },
  },
  props:{
    id: Number,
    frontImage: String,
    backImage: String,
    brand: String,
    name: String,
    price: Number,
    isInFavorites: Boolean,
    badges: Array,
  },
  mounted(){
    console.log();
  }
}


</script>

<style lang="scss" scope>

</style>