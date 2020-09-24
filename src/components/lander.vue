<template>
<main class="site-main">
  <section class="site-name">
    <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12 side-title">
        <h3 class="text-title">Hey</h3>
        <h1 class="text-title text-uppercase">I AM OLUWAYOMI</h1>
        <h4 class="text-title text-uppercase">Full Stack Developer</h4>
        <div class="download-button">
          <div class="d-flex flex-row flex-wrap">
            <b-button variant="primary" class="button primary mr-4 text-uppercase">Hire Me</b-button>
            <b-button variant="secondary" class="button secondary text-uppercase">Get CV</b-button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 image-banner">
        <img src="../Image/banner/banner-image.png" alt="banner image" class="img-fluid">
      </div>
    </div>
    </div>
  </section>
</main>
</template>

<script>
export default { name: 'lander.vue' }
</script>

<style scoped>
.site-name{
  background: url("./home-banner.png") no-repeat 0 50%;
}
.side-title h3{
  padding-top: 35%;
  font-weight: 500;
}
.side-title h3::after{
  content: "";
  height: 2px;
  width: 18px;
  background: black;
  display: inline-block;
  margin-left: 5%;
  transform: translateY(-10px);
}
.side-title h1{
  font-size:3rem;
}
.side-title h4{
  font-size: 1.5rem;
}
.img-fluid >img{
  padding: 7rem ;
  width: 90rem;
}
.text-title{
  font: normal bold 50px/72px Roboto, sans-serif;
}
.button{
  padding: .8rem 2.2rem;
  font: normal 500 16px/20px Roboto, sans-serif;
  position: relative;
  border: 3px solid transparent;
  border-radius: 4px;
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
.secondary{
  background:linear-gradient(90deg,#4458dc 0%,#854fee 100% );
  background-clip: padding-box;
  color: whitesmoke;
  transition: background.6s ease;
  box-shadow: 0 10px 30px rgba(57, 56, 61, 0.205);
}
.secondary:hover{
  background: whitesmoke;
  background-clip: padding-box;
  color: black;
}
.secondary::after{
  position: relative;
  top:-2px; left:-2px;
  bottom:-2px; right:-2px;
  background:linear-gradient(90deg,#4458dc 0%,#854fee 100% );
  content: "";
  z-index: -1;
  border-radius: 4px;
}
</style>
