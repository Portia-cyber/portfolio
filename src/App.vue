<template>
  <div id="app">
   <navbar></navbar>
    <lander></lander>
    <about></about>
    <brand></brand>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Lander from './components/lander.vue'
import About from './components/about.vue'
import Brand from './components/brand'

export default {
  name: 'App',
  components: {
    Navbar,
    Lander,
    About,
    Brand
  }
}
</script>

<style>
#app {
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
  :root{
    --primary-color:#4458dc;
    --primary-color2:#854fee;
    --title-color:#141313;
    --text-color:#777777;
    --border-color:#201f1f17;
    --gradient-color:linear-gradient(90deg,#4458dc 0%,#854fee 100% );
    --shadow-color:0px 10px 30px rgba(118,85,225,0.3);
    --box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
  }

</style>
