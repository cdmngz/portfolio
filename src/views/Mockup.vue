<template>
  <v-container class="d-flex flex-column justify-center align-center mt-10">
    <div class="box mt-5">
      <div class="glass"></div>
      <div class="glass"></div>
    </div>
    <div class="text-center">
      <v-btn
        class="accent mt-15"
        href="https://github.com/cdmngz/portfolio/tree/main/src/views/Mockup.vue"
        target="_blank"
        >view code
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Mockup",
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  background-image: url("../assets/mockup2.jpeg");
  background-size: contain;
  border-radius: 15px;
  box-shadow: -25px 40px 4px rgba(0, 0, 0, 0.2);
  height: 576px;
  position: relative;
  transition: 0.5s;
  width: 259px;
}
.box:hover {
  transform: rotate(-45deg) skewY(25deg) translate(10px, -10px);
  box-shadow: -60px 100px 60px rgba(0, 0, 0, 0.5);
}
.box .glass {
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.001);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  transition: 0.5s;
  overflow: hidden;
}
.box .glass:before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  transform: skewX(-5deg);
}
.box:hover .glass {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
  top: -40px;
  left: 30px;
}
.box:hover .glass:nth-of-type(2) {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
  top: -80px;
  left: 60px;
}
</style>
