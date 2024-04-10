<script>
  export default{
    data(){
      return{
        products: [
        {
          firstImage: "1.webp",
          secondImage: "1b.webp",
          titleProduct: "RELAXED FEET TEE UNISEX",
          brandProduct: "Levi's",
          discount: 50,
          oldPrice: 29.99,
          
          attribute: "Sostenibilità"
        },
        // {
        //   firstImage: "2.webp",
        //   secondImage: "2b.webp"
        // },
        // {
        //   firstImage: "3.webp",
        //   secondImage: "3b.webp"
        // },
        // {
        //   firstImage: "4.webp",
        //   secondImage: "4b.webp"
        // },
        // {
        //   firstImage: "5.webp",
        //   secondImage: "5b.webp"
        // },
        // {
        //   firstImage: "6.webp",
        //   secondImage: "6b.webp"
        // }
        ]
      }
    },
    methods:{
      getImagePath(img){
      return new URL(`../assets/${img}`, import.meta.url).href
    }
    },
    
  }
</script>

<template>
  <main>
    <section class="showcase">
      <div class="container">
        <div v-for="product in products" class="row">

          <div class="card border-black col-4">
            <div class="card--image border-black">
              <img :src="getImagePath(product.firstImage)" alt="">
              <img :src="getImagePath(product.secondImage)" alt="">
              <span class="favorites-icon"><i class="fa-solid fa-heart"></i></span>
              <div class="badges white">
                <span class="badge discount-percentage">-{{ product.discount }}&percnt;</span>
                <span class="badge eco-badge">{{ product.attribute }}</span>
              </div>
            </div>
            <div class="card--titles">
              <h4 class="brand-title">Levi's</h4>
              <h2 class="product-name">RELAXED FEET TEE UNISEX</h2>
              <div class="price">
                <span class="price-text price-now">11,99&euro;</span><span class="price-text price-old">29,99&euro;</span>
              </div>
            </div>
          </div>
          
          <!-- <div class="card border-black col-4">
            <div class="card--image border-black">
              <img src="./img/2.webp" alt="">
              <img src="./img/2b.webp" alt="">
              <span class="favorites-icon"><i class="fa-solid fa-heart"></i></span>
              <div class="badges white">
                <span class="badge discount-percentage">-30&percnt;</span>
                
              </div>
            </div>
            <div class="card--titles">
              <h4 class="brand-title">Levi's</h4>
              <h2 class="product-name">RELAXED FEET TEE UNISEX</h2>
              <div class="price">
                <span class="price-text price-now">20,99&euro;</span><span class="price-text price-old">29,99&euro;</span>
              </div>
            </div>
          </div>

          <div class="card border-black col-4">
            <div class="card--image border-black">
              <img src="./img/3.webp" alt="">
              <img src="./img/3b.webp" alt="">
              <span class="favorites-icon"><i class="fa-solid fa-heart"></i></span>
              <div class="badges white">
                <span class="badge discount-percentage">-30&percnt;</span>
                
              </div>
            </div>
            <div class="card--titles">
              <h4 class="brand-title">Levi's</h4>
              <h2 class="product-name">RELAXED FEET TEE UNISEX</h2>
              <div class="price">
                <span class="price-text price-now">199,99&euro;</span><span class="price-text price-old">184,99&euro;</span>
              </div>
            </div>
          </div>

          <div class="card border-black col-4">
            <div class="card--image border-black">
              <img src="./img/4.webp" alt="">
              <img src="./img/4b.webp" alt="">
              <span class="favorites-icon"><i class="fa-solid fa-heart"></i></span>
              <div class="badges white">
                <span class="badge discount-percentage">-50&percnt;</span>
                <span class="badge eco-badge">Sostenibilità</span>
              </div>
            </div>
            <div class="card--titles">
              <h4 class="brand-title">Levi's</h4>
              <h2 class="product-name">RELAXED FEET TEE UNISEX</h2>
              <div class="price">
                <span class="price-text price-now">11,99&euro;</span><span class="price-text price-old">29,99&euro;</span>
              </div>
            </div>
          </div>

          <div class="card border-black col-4">
            <div class="card--image border-black">
              <img src="./img/5.webp" alt="">
              <img src="./img/5b.webp" alt="">
              <span class="favorites-icon"><i class="fa-solid fa-heart"></i></span>
              <div class="badges white">
                <span class="badge discount-percentage">-50&percnt;</span>
                <span class="badge eco-badge">Sostenibilità</span>
              </div>
            </div>
            <div class="card--titles">
              <h4 class="brand-title">Levi's</h4>
              <h2 class="product-name">RELAXED FEET TEE UNISEX</h2>
              <div class="price">
                <span class="price-text price-now">11,99&euro;</span><span class="price-text price-old">29,99&euro;</span>
              </div>
            </div>
          </div>

          <div class="card border-black col-4">
            <div class="card--image border-black">
              <img src="./img/6.webp" alt="">
              <img src="./img/6b.webp" alt="">
              <span class="favorites-icon"><i class="fa-solid fa-heart"></i></span>
              <div class="badges white">
                <span class="badge discount-percentage">-50&percnt;</span>
                <span class="badge eco-badge">Sostenibilità</span>
              </div>
            </div>
            <div class="card--titles">
              <h4 class="brand-title">Levi's</h4>
              <h2 class="product-name">RELAXED FEET TEE UNISEX</h2>
              <div class="price">
                <span class="price-text price-now">11,99&euro;</span><span class="price-text price-old">29,99&euro;</span>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scope>

.card{
  padding: 10px;
}

.card:nth-child(3n + 1){
  padding-left: 0;
}

.card:nth-child(3n){
  padding-right: 0;
}

.card--image{
  height: 450px;
  position: relative;
}

.card img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;

}

.card img:nth-child(2){
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0%;
}

.card--image:hover > img:nth-child(2){
  opacity: 100%;
  transition-duration: 300ms;
  transition-property: opacity;
}

.favorites-icon{
  padding: 15px;
  background-color: white;
  position: absolute;
  top: 8px;
  right: 0;
}

.favorites-icon:hover{
  color: red;
}

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

.badge{
  padding: 5px;
}

.card--image .badges{
  position: absolute;
  bottom: 20px;
  left: 0;
}

.brand-title{
  font-weight: 100;
}

.discount-percentage{
  background-color: red;
}

.eco-badge{
  background-color: green;
}

</style>