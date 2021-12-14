<template>
  <div class="pt-64 w-full flex flex-col items-center mb-16">
    <div class="w-64 w-4/5 flex justify-between">
      <div class="w-1/2">
        <h2 class="text-xl mb-16">Book your car</h2>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Full Name</div>
          <q-input outlined v-model="name" @focus="closeAllCalendar()" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Email</div>
          <q-input outlined v-model="email" @focus="closeAllCalendar()" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Days</div>
          <q-input outlined @focus="openDaysCalendar()" v-model="days" />
          <q-date
            v-model="date"
            range
            v-if="openCalendar"
            class="absolute z-10"
          />
        </div>

        <div class="w-2/3 mb-3">
          <div class="mb-1">Date of birth</div>
          <q-input outlined v-model="birth" @focus="openBirthCalendar()" />
          <q-date
            v-model="birth"
            default-view="Years"
            v-if="openBirth"
            class="absolute z-10"
          />
        </div>

        <div class="w-2/3 mb-3">
          <div class="mb-1">Price by Day</div>
          <q-input outlined v-model="price" disable />
        </div>
        <div class="w-2/3 mb-3" @focus="closeAllCalendar()">
          <div class="mb-1">Total</div>
          <q-input outlined v-model="totalWithCommession" disable />
        </div>
        <button
          @click="moveTo('book')"
          class="bg-blue-900 text-white h-8 rounded px-6"
        >
          Submit
        </button>
      </div>
      <div class="w-1/2 flex justify-end" @click="closeAllCalendar()"></div>
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
      name: "",
      email: "",
      price: "",
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

    this.price = this.bookedCar.price;
    console.log(this.price);
    this.choosedImage = this.bookedCar.images[0].url;
  },

  computed: {
    ...mapGetters(["booking", "bookedCar", "language"]),
  },
  methods: {
    openDaysCalendar() {
      this.openBirth = false;
      this.openCalendar = true;
    },
    openBirthCalendar() {
      this.openBirth = true;
      this.openCalendar = false;
    },
    closeAllCalendar() {
      this.openBirth = false;
      this.openCalendar = false;
    },
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