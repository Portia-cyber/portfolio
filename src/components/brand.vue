<template>
  <div class="container-fluid brand-area">
    <div class="row">
      <div class="col-xl-6 col-lg-12 col-md-12">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandone" src="./brands/logo1.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandtwo" src="./brands/logo2.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandthree" src="./brands/logo3.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandfour" src="./brands/logo4.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandfive" src="./brands/logo5.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandsix" src="./brands/logo6.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandsev" src="./brands/logo7.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandtwo" src="./brands/logo8.png">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="brandone">
              <img alt="brandsix" src="./brands/logo6.png">
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-12 col-md-12">
        <div class="experience">
          <div class="d-flex flex-row years-area">
            <h2 class="p-3 years">3</h2>
            <h2>
              <span class="age">Years</span>
              <span class="age">Experience</span>
              <span class="age">Working</span>
            </h2>
          </div>
          <div class="d-flex flex-row flex-wrap call">
            <span><i class="fas fa-mobile fa-3x px-3"></i></span>
            <div class="call-now">
              <a href="#" class="text-uppercase h4 age font-Roboto"> Call Now</a>
              <span class="py-2">+2348186842269</span>
            </div>
          </div>
          <div class="bg-panel"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand'
}
</script>

<style scoped>
:root{
  --border-color:#201f1f17;
  --shadow-color:0px 10px 30px rgba(118,85,225,0.3);
  --box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
}
.brand-area{
  padding: 1rem 20rem;
  margin-bottom: 4rem;
}
.col-lg-4{
  display: flex;
  justify-content:center;
}
.brandone{
  border: 1px solid var(--border-color);
  text-align: center;
  padding: 1.8rem 0;
  margin: .9rem 0;
  width: 180px;
  height: 100px;
  cursor: help;
  transition: transform.4s ease;
}
img{
  width: 50%;
}
.brandone:hover{
  box-shadow:var(--box-shadow);
  transform: scale(1.1);
}
img:hover{
  filter: brightness(0.15);
}
.experience{
  padding-left: 1rem;
}
span{
  display: block;
}
.years-area{
  background: url("./brands/client-info-bg.png") no-repeat 45px 20px;
  width: 40rem;
  height: 18rem;
  padding: 2rem 0 2rem 8rem;
  position: relative;
}
.bg-panel {
position: absolute;
  left: -190px; top: 0;
  background: #e029290a;
  width: 400px;
  height: 400px;
  margin-left: 340px;
  z-index: -1;
}
.years{
  font: normal bold 84px/40px Roboto, sans-serif;
  color: var(--primary-color);
  z-index: 2;
}
.age{
  font: normal 600 22px/30px Roboto, sans-serif;
}
.call{
  padding-left: 10rem;
}
.font-Roboto{
  font-family:Roboto, sans-serif;
}

</style>
