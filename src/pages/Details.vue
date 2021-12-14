<template>
  <div class="pt-64 w-full flex flex-col items-center mb-16">
    <div class="w-64 w-4/5 flex justify-between">
      <div class="w-1/2">
        <h2 class="text-xl mb-16">car Details</h2>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Model</div>
          <q-input outlined v-model="model" disable />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Description</div>
          <q-input outlined v-model="description" disable type="textarea" />
        </div>

        <div class="w-2/3 mb-3">
          <div class="mb-1">Color</div>
          <q-input outlined disable v-model="color" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Fuel</div>
          <q-input outlined disable v-model="fuel" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Price by Day</div>
          <q-input outlined v-model="price" disable />
        </div>
      </div>
      <div class="w-1/2 flex justify-end">
        <button
          @click="moveTo('book')"
          class="bg-blue-900 text-white h-8 rounded px-6 mb-6"
        >
          Book Now
        </button>
        <div v-if="bookedCar">
          <img
            class="w-full"
            :src="`http://localhost:1337${choosedImage}`"
            style="height: 500px"
          />
          <div class="flex mt-2 shadow-lg flex-nowrap">
            <div
              @click="passImage(image)"
              v-for="(image, index) in bookedCar.images"
              :key="index"
              class="w-1/4 mx-1 border border-black"
            >
              <img
                :src="`http://localhost:1337${image.url}`"
                alt=""
                class="w-full h-48"
              />
            </div>
          </div>
          <!-- <img
            v-if="bookedCar.images.length > 0"
            :src="`http://localhost:1337${bookedCar.images[1].url}`"
            style="height: 450px"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  watch: {
    birth() {
      this.openBirth = false;
    },
    date: {
      handler(val) {
        let value = this.calc(val.from, val.to);

        this.openCalendar = false;
        let total = value * this.price;
        let totalWithCommession = total + total * 0.15;
        this.totalWithCommession = totalWithCommession + " JD";
      },
      deep: true,
    },
  },
  data() {
    return {
      birth: "",
      days: "",
      openBirth: false,
      choosedImage: "",
      openCalendar: false,
      date: { from: "", to: "" },
      color: "",
      totalWithCommession: "",
    };
  },
  async created() {
    await this.getCarById(this.$route.params.id);
    this.model = this.bookedCar.model;
    this.color = this.bookedCar.color;
    this.fuel = this.bookedCar.fuel;
    this.price = this.bookedCar.price;
    this.description = this.bookedCar.description;
    console.log(this.bookedCar);
    this.choosedImage = this.bookedCar.images[0].url;
  },

  computed: {
    ...mapGetters(["booking", "bookedCar", "language"]),
  },
  methods: {
    moveTo(path) {
      this.$router.push(`${this.$route.path}/${path}`);
    },
    passImage(image) {
      this.choosedImage = image.url;

      console.log(image);
    },
    openTheCalendar() {
      this.openCalendar = true;
    },
    calc(from, to) {
      let date1 = new Date(from).getTime();
      let date2 = new Date(to).getTime();

      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      this.days = diffDays + 1;
      return this.days;
    },
    parseDate(input) {
      var parts = input.match(/(\d+)/g);
      // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
      return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
    },
    ...mapActions(["getCarById"]),
  },
};
</script>

<style>
</style>