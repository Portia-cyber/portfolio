<template>
  <div class="container project-area" id="project">
    <div class="project-title pb-5">
      <h4 class="text-uppercase title-h1">
        Recently Done Project
      </h4>
      <h4 class=" title-h1 text-uppercase">
        Quality Work
      </h4>
    </div>
    <div class="button-group">
      <button class="active" type="button"> All</button>
      <button data-filter=".popular" type="button"> Popular</button>
      <button data-filter=".latest" type="button"> Latest</button>
      <button type="button"> Following</button>
      <button type="button"> Upcoming</button>
    </div>
    <div class="row grid">
      <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
        <div class="our-project">
          <div class="img">
            <img alt="Project1" src="./portfolio/p1.jpg">
          </div>
          <div class="title py-4">
            <h4 class="text-uppercase">Minimal Design</h4>
            <span class="text-secondary">Latest,Project</span>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
        <div class="our-project">
          <div class="img">
            <img alt="Project1" src="./portfolio/p2.jpg">
          </div>
          <div class="title py-4">
            <h4 class="text-uppercase">Paint Design</h4>
            <span class="text-secondary">Popular,Project</span>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
        <div class="our-project">
          <div class="img">
            <img alt="Project1" src="./portfolio/p3.jpg">
          </div>
          <div class="title py-4">
            <h4 class="text-uppercase">Female Light</h4>
            <span class="text-secondary">Latest,Project</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Isotope from 'vueisotope'

export default {
  name: 'Project.vue',
  Isotope
}
</script>

<style scoped>
.project-area {
  padding: 4rem 0;
}

button {
  background: transparent;
  border: none;
  font: normal 500 16px/130px Roboto, sans-serif;
  text-transform: uppercase;
}

button + button {
  padding-left: 3rem;
}

h4 {
  font: normal 700 25px/12px Roboto, sans-serif;
  padding-bottom: 10px;
}

button:focus,
button:active,
button:hover,
.btn:active,
.btn:active {
  outline: 0 !important;
  box-shadow: none !important;
}

.img:hover {
  filter: brightness(1.1) drop-shadow(1px 8px 30px #b1afaf);
}
</style>
