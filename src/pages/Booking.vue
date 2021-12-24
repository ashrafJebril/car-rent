<template>
  <div class="pt-64 w-full flex flex-col items-center mb-16">
    <div class="w-64 w-4/5 flex justify-between">
      <vue-country-code
        @onSelect="onSelect"
        :preferredCountries="['vn', 'us', 'gb']"
      >
      </vue-country-code>

      <div class="w-1/2">
        <h2 class="text-xl mb-16">Book your car</h2>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Full Name</div>
          <q-input
            outlined
            v-model="name"
            @focus="closeAllCalendar()"
            :rules="[
              (val) =>
                val.length >= 3 ||
                'Name should not be empty' ||
                val.length != 0,
            ]"
          />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Email</div>
          <q-input
            outlined
            v-model="email"
            @focus="closeAllCalendar()"
            :rules="[(val) => isValidEmail()]"
          />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Days</div>
          <q-input
            outlined
            @focus="openDaysCalendar()"
            v-model="days"
            :rules="[(val) => val > 2 || 'Name should not be empty']"
          />
          <q-date
            v-model="date"
            range
            v-if="openCalendar"
            class="absolute z-10"
          />
        </div>

        <div class="w-2/3 mb-3">
          <div class="mb-1">Age</div>
          <q-input outlined v-model="age" @focus="closeAllCalendar()" />
        </div>

        <div class="w-2/3 mb-3">
          <div class="mb-1">Phone Number</div>
          <q-input outlined v-model="phone" @focus="closeAllCalendar()" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Gender</div>

          <q-radio v-model="gender" val="male" label="Male" />
          <q-radio v-model="gender" val="female" label="Female" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Address</div>
          <q-input outlined v-model="adress" @focus="closeAllCalendar()" />
        </div>
        <div class="my-4">
          <label for="userfile">Please Upload your license image</label>
          <input type="file" name="image" ref="upload" @change="onfileChange" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Price by Day</div>
          <q-input outlined v-model="price" disable />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Delivery Time</div>
          <q-input outlined @focus="openTimeCalendar()" v-model="time" />
          <q-time v-model="time" v-if="openTime" class="absolute z-10" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Delivery notes</div>
          <q-input outlined v-model="notes" @focus="closeAllCalendar()" />
        </div>
        <div class="w-2/3 mb-3">
          <div class="mb-1">Total</div>
          <q-input
            outlined
            v-model="totalWithCommession"
            disable
            @focus="closeAllCalendar()"
          />
        </div>
        <!-- <VuePhoneNumberInput v-model="yourValue" /> -->

        <button
          @click="sendToStrapi"
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
// import Vue from "vue";
// const VueCountryCode = require("vue-country-code");

// Vue.use(VueCountryCode);
import { mapActions, mapGetters } from "vuex";
export default {
  // components: {
  //   "vue-phone-number-input": VuePhoneNumberInput,
  // },

  watch: {
    time() {
      this.openTime = false;
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
      yourValue: "",
      name: "",
      errorMessage: [],
      email: "",
      price: "",
      age: "",
      openTime: false,
      phone: "",
      gender: "",
      notes: "",
      upload: "",
      selectedFile: null,
      adress: "",
      time: "",
      days: "",
      openBirth: false,
      choosedImage: "",
      openCalendar: false,
      date: { from: "", to: "" },
      color: "",
      totalWithCommession: 0,
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
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      console.log(emailPattern.test(this.email) || "Invalid email");
      return emailPattern.test(this.email) || "Invalid email";
    },
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
    async sendToStrapi() {
      console.log("yesss");
      var booking = {
        fullName: this.name,
        age: this.age,
        receivingTime: this.time,
        email: this.email,
        days: this.days,
        gender: this.gender,
        endDate: new Date(this.date.to).toISOString(),
        startDate: new Date(this.date.from).toISOString(),
        phone: this.phone,
        car: this.$route.params.id,
        bookingDays: this.days,
        totalProfit: this.totalWithCommession,
        address: this.adress,
        deliveryDescription: this.notes,
      };

      const bookingVar = await this.bookACar(booking);

      await this.bookTheCar(bookingVar.data.id);
      this.$router.push(`/${this.language}/cars`);
    },
    onfileChange(event) {
      this.selectedFile = event.target.files[0];
    },

    bookTheCar(payload) {
      let formData = new FormData();
      console.log(this.selectedFile);
      console.log("uplea", this.$refs.upload.files[0]);
      formData.append("files", this.$refs.upload.files[0]);
      formData.append("refId", payload);
      formData.append("ref", "booking");
      formData.append("field", "DrivingLicense");
      this.uploadImage(formData);
    },
    openDaysCalendar() {
      this.openBirth = false;
      this.openCalendar = true;
    },
    openTimeCalendar() {
      this.openTime = true;
      this.openCalendar = false;
    },
    openBirthCalendar() {
      this.openBirth = true;
      this.openCalendar = false;
    },
    closeAllCalendar() {
      this.openBirth = false;
      this.openCalendar = false;
      this.openTime = false;
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
    ...mapActions(["getCarById", "bookACar", "uploadImage"]),
  },
};
</script>

<style>
</style>