<template>
  <div>
    <footer class=" container py-5">
      <div class="container">
        <div class="">
          <div class="site-logo text-center py-4">
            <a href="#"><img src=""  alt="Logo" class="logo-2"></a>
          </div>
          <div class="social text-center">
            <h5 class="text-uppercase follow">Follow me</h5>
            <a href="www.linkedin.com/in/oluwayomi-modamori-0b8b58185"><i class=" social-account fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/yomee_xx/"><i class="social-account fab fa-instagram"></i></a>
            <a href="https://github.com/Portia-cyber"><i class="social-account fab fa-github"></i></a>
            <a href="https://twitter.com/yomee_xx"><i class="social-account fab fa-twitter"></i></a>
          </div>
          <div class="copyrights text-center">
            <p class="para">
              Copyright ©2019 All rights reserved
              <a href="#"><span style="color: var(--primary-color);">Modamori Oluwayomi</span></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footer.vue'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
.social{
  font-family: Roboto,serif;
  padding: 2rem;
  font-size: 22px;
}
.social-account{
  padding: 12px;
}
.logo-2{
  height: 30px;
}
</style>
