
<template >
  <div class="flex flex-col justify-center items-center w-full bg-gray-200">
    <div class="w-full">
      <div class="flex flex-col justfiy-center items-center home"></div>
    </div>

    <div class="w-4/5">
      <PopularCars class="my-8" />
    </div>
    <Statistics />
  </div>
</template>

<script>
import Statistics from "../components/statistics.vue";
import Filters from "../components/Filters.vue";

import PopularCars from "../components/PopularCarList.vue";
export default {
  components: {
    Filters,
    PopularCars,
    Statistics,
  },
};
</script>

<style>
body {
  font-family: "Exo 2", sans-serif;
}
.home {
  font-family: "Oswald", sans-serif;
  background-color: #cccccc;
  height: 90vh;
  background-image: url("../../images/home.jpg");
  opacity: 0.9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>