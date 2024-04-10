<script>

  export default{
    data(){
      return {
        saluto: "Vite-Vue-Sass avviati!"
      }
    },
    methods:{

    },
    mounted(){

    }
  }


</script>

<template>
  <footer class="footer bg-dark white">
    <div class="container row">

        <div class="foot--legal-info">
          <h3>Boolando s.r.l.</h3>
          <ul>
            <li>Informazioni legali</li>
            <li>Informativa privacy</li>
            <li>Diritto di recesso</li>
          </ul>
        </div>

        <div class="foot--socials">
          <h4 class="social-title">Trovaci anche su</h4>
          <div class="foot--social-icons row">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  .row{
  justify-content: space-between;
  }
}

.foot--legal-info {
  li{
  display: inline-block;
  }
}
</style>