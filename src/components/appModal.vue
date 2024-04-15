<template>

  <div class="modal-wrap">
    <div class="modal-card">
      <div class="close"><i class="fa-solid fa-xmark"></i></div>
      <div class="modal-images">
        <img src="../assets/1.webp" alt="">
        <img src="../assets/1b.webp" alt="">
      </div>
      <div class="modali-text">
        <h1>Levi's</h1>
        <h2>Relaxed Fit</h2>
        <h3>Price: 29.99</h3>
      </div>

    </div>
   
  </div>


</template>

<style lang="scss" scoped>
  .modal-wrap{
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    background: rgba(black,0.2);

    

    .modal-card{
      background-color: white;
      padding: 20px;
      position: relative;
      .close{
      background-color: white;
      width: 30px;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      align-items: center;
      position:absolute;
      right: -35px;
      top: -35px;
      // border-radius: 50%;
      cursor: pointer;
      &:hover{
        background-color: black;
        color: white;
        border: 1px solid white;
      }
    } 
      img{
      width:200px
      }
    }
  }
</style>

<script>

export default {
  data(){

  },
  methods:{

  },

}

</script>