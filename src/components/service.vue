<template>
  <div class="service container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="text-uppercase service-title">
          Services Offer
        </h1>
        <p class="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio impedit in inventore iure maiores
          obcaecati possimus quasi veritatis voluptatibus. Amet consequuntur deserunt facilis molestias necessitatibus
          voluptas. Iusto labore possimus voluptate.
        </p>
      </div>
    </div>
    <div class="container service-list">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="services-arry">
            <div class="py-4 image text-center">
              <img alt="service1" src="./services/s1.png">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title text-uppercase">WP DEVELOPER</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eius quam sed totam. Alias,
                commodi corporis delectus doloremque dolorum ducimus esse labore
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="services-arry">
            <div class="py-4 image text-center">
              <img alt="service2" src="./services/s2.png">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title text-uppercase">UI/UX DESIGN</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eius quam sed totam. Alias,
                commodi corporis delectus doloremque dolorum ducimus esse labore
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="services-arry">
            <div class="py-4 image text-center">
              <img alt="service3" src="./services/s3.png">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title text-uppercase">WEB DEVELOPER</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eius quam sed totam. Alias,
                commodi corporis delectus doloremque dolorum ducimus esse labore
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="services-arry">
            <div class="py-4 image text-center">
              <img alt="service4" src="./services/s4.png">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title text-uppercase">SEO OPTIMIZE</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eius quam sed totam. Alias,
                commodi corporis delectus doloremque dolorum ducimus esse labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service.vue'
}
</script>

<style scoped>
.para {
  color: #777777;
  font: normal Roboto, sans-serif;
}

.service-title {
  font: normal bold 50px/72px Roboto, sans-serif;
  padding: 0 14rem;
}
h1{
  font-size: 35px;
}
.service{
  padding:7rem 2rem ;
}
.services-arry{
  background: rgba(248,252,253,0.973);
  padding: 2rem 0;
  width: 16rem;
  margin: 5rem .5rem;
  transition: box-shadow.7s ease;
}
.services-arry:hover{
  box-shadow:var(--box-shadow);
  cursor: pointer;
}
</style>
