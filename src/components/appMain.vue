<script>

  import appCard from "./appCard.vue";
  // import dbProduct from "../assets/db.json";
  import { store } from '../store.js'

  export default{
    data(){
      return{
        products: store.products,
        // products: [
        // {
        //   firstImage: "1.webp",
        //   secondImage: "1b.webp",
        //   titleProduct: "RELAXED FEET TEE UNISEX",
        //   brandProduct: "Levi's",
        //   discount: 50,
        //   oldPrice: 29.99,
        //   attribute: "Sostenibilità"
        // },
        // {
        //   firstImage: "2.webp",
        //   secondImage: "2b.webp",
        //   titleProduct: "RELAXED FEET TEE UNISEX",
        //   brandProduct: "Levi's",
        //   discount: 50,
        //   oldPrice: 29.99,
        //   attribute: "Sostenibilità"
        // },
        // {
        //   firstImage: "3.webp",
        //   secondImage: "3b.webp",
        //   titleProduct: "RELAXED FEET TEE UNISEX",
        //   brandProduct: "Levi's",
        //   discount: 50,
        //   oldPrice: 29.99,
        //   attribute: "Sostenibilità"
        // },
        // {
        //   firstImage: "4.webp",
        //   secondImage: "4b.webp",
        //   titleProduct: "RELAXED FEET TEE UNISEX",
        //   brandProduct: "Levi's",
        //   discount: 50,
        //   oldPrice: 29.99,
        //   attribute: "Sostenibilità"
        // },
        // {
        //   firstImage: "5.webp",
        //   secondImage: "5b.webp",
        //   titleProduct: "RELAXED FEET TEE UNISEX",
        //   brandProduct: "Levi's",
        //   discount: 50,
        //   oldPrice: 29.99,
        //   attribute: "Sostenibilità"
        // },
        // {
        //   firstImage: "6.webp",
        //   secondImage: "6b.webp",
        //   titleProduct: "RELAXED FEET TEE UNISEX",
        //   brandProduct: "Levi's",
        //   discount: 50,
        //   oldPrice: 29.99,
        //   attribute: "Sostenibilità"
        // }
        // ]
      }
    },
    components:{
      appCard,
    },
    methods:{
     
    },
    mounted(){
      console.log("da appMain" + store.pino)
    }

  }
</script>

<template>
  <main>
    <section class="showcase">
      <div class="container">
        <div class="row">

          
              
            <appCard v-for="product in products" :id="product.id"
            :frontImage="product.frontImage"
            :backImage="product.backImage"
            :brand="product.brand"
            :name="product.name"
            :price="product.price"
            :isInFavorites="product.isInFavorites"
            :badges="product.badges"
            />
           

          

        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scope>

.card{
  padding: 10px;

  &:nth-child(3n + 1){
  padding-left: 0;
  }

  &:nth-child(3n){
    padding-right: 0;
  }

  .card--image{
  height: 450px;
  position: relative;

    .badges{
      position: absolute;
      bottom: 20px;
      left: 0;
    
      .discount-percentage{
        background-color: red;
      }

      .eco-badge{
        background-color: green;
      }

      .badge{
        padding: 5px;
      }
    }

    .favorites-icon{
    padding: 15px;
    background-color: white;
    position: absolute;
    top: 8px;
    right: 0;

      &:hover{
        color: red;
      }
    }

    &:hover > img:nth-child(2){
    opacity: 100%;
    transition-duration: 300ms;
    transition-property: opacity;
    }

  }

  img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;

    &:nth-child(2){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0%;
    }
  }


  .price{

    .price-text{
      margin-right: 5px;
      font-size: small;
    }

    .price-old{
      text-decoration: line-through;
    }

    .price-now {
      color: red;
      font-weight: 600;
    }

  }

  .brand-title{
  font-weight: 100;
  }
}




























</style>