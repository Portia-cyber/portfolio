<template>
<div class="container-fluid about-me">
  <div class="row">
  <div class="col-lg-6 col-md-12">
    <div class="about-img">
      <img src="../Image/about-us.png" alt="About-us" class="img-fluid">
    </div>
  </div>
  <div class="col-lg-6 col-md-12">
    <h2 class="text-uppercase pt-5">
      <span class="span">Let me</span>
      <span class="span"> introduce </span>
      <span class="span"> myself </span>
    </h2>
    <div class="para py-4 w-75">
      <p class="paran">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea explicabo id illum mollitia nobis, optio placeat reiciendis rerum ullam.
      </p>
      <p class="paran">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid, aperiam, aut beatae consequatur cupiditate doloribus est in labore laudantium maiores nesciunt numquam odit pariatur porro praesentium quae rem suscipit temporibus veritatis. Animi cumque deleniti earum enim esse facere in incidunt magnam natus necessitatibus, nostrum quia quibusdam suscipit ullam vitae.
      </p>
      <b-button variant="primary" class="primary text-uppercase">Download Cv</b-button>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'about.vue'
}
</script>

<style scoped>

.img-fluid >img{
  padding: 7rem ;
  width: 90rem;
}
.primary{
  background:linear-gradient(90deg,#4458dc 0%,#854fee 100% );
  background-clip: padding-box;
  color: whitesmoke;
  transition: background.6s ease;
  box-shadow: 0 10px 30px rgba(57, 58,  61, 0.205);
}
.primary:hover{
  background: whitesmoke;
  background-clip:padding-box;
  color: black;
}
.primary::after{
  position: relative;
  top:-2px; left:-2px;
  bottom:-2px; right:-2px;
  background:linear-gradient(90deg,#4458dc 0%,#854fee 100% );
  content: "";
  z-index: -1;
  border-radius: 4px;
}
.about-me {
padding: 8rem 5rem;
}
.span{
  display: block;
  font: normal bold 49px/60px Roboto, sans-serif;
  letter-spacing: 21px;
}
.para p{
  padding: .4rem 0;
}
.paran{
  color: #777777;
  font: normal Roboto,sans-serif;
}

</style>
