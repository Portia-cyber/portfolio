<template>
<div class="main-menu">
  <b-navbar toggleable="lg" class="navbar sticky">
    <b-navbar-brand class="navbar-brand" href="#"><img src="../Image/logo.png" alt=""></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav-collapse">
      <b-navbar-nav class="m-auto nav-link">
        <b-nav-item a class="navlink" href="#">Home</b-nav-item>
        <b-nav-item class="navlink"  href="#lander">About Us</b-nav-item>
        <b-nav-item  class="navlink" href="#services">Services</b-nav-item>
        <b-nav-item  class="navlink" href="#project">Portfolio</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'navbar.vue'
}
</script>

<style scoped>
@import '../assets/global.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.navbar-brand{
  padding: 0 2rem 0 5rem;
}
.navbar{
  padding: 1rem 20rem;
}
.nav-link{
  font-family: Roboto cursive;
  text-transform: uppercase;
  padding:1.7rem;
  color: var(--title-color);
}
.active {
  background:linear-gradient(90deg,#4458dc 0%,#854fee 100% );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.navlink:hover{
  background:linear-gradient(90deg,#4458dc 0%,#854fee 100% );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
