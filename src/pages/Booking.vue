<template>
  <div class="pt-64 px-8 flex justify-center">
    <div class="max">
      <div class="flex">
        <div
          @click="getSubCategories(category)"
          class="w-32 h-22 m-2 category cursor-pointer"
          v-for="(category, index) in allCategories"
          :key="index"
        >
          <div>{{ category.title }}</div>
          <img
            v-if="!noCategotyChoosed"
            :src="'http://localhost:1337' + category.logo.url"
            alt=""
            class="w-32 h-22"
          />
        </div>
      </div>
      <div
        v-if="noCategotyChoosed"
        class="flex justify-around my-16 cursor-pointer"
      >
        <div v-for="sub in subCategories" :key="sub.id" class="category">
          <div @click="getCarList(sub.id)">{{ sub.title }}</div>
          <img
            v-if="!noCategotyChoosed"
            :src="'http://localhost:1337' + sub.logo.url"
            alt=""
            class="w-32 h-22"
          />
        </div>
      </div>
      <div class="flex mb-16">
        <div class="cursor-pointer flex" v-if="noCarListChoosed">
          <div
            class="shadow-lg w-1/4 mx-2"
            v-for="(car, index) in carsList"
            :key="index"
            @click="moveTo(car)"
          >
            <img :src="`http://localhost:1337${car.images[0].url}`" alt="" />
            <div class="p-2">
              <div class="flex">
                <div>Price for a day :</div>
                <div>{{ car.price }}JD</div>
              </div>
              <div class="flex mt-2">
                <div>Car Model :</div>
                <div>{{ car.model }}</div>
              </div>

              <div class="flex my-2">
                Description :
                {{ car.description }}
              </div>

              <div class="flex">
                <div>Color :</div>
                <div>{{ car.color }}</div>
              </div>

              <div class="flex my-2">
                <div>Fuel :</div>
                <div>{{ car.fuel }}</div>
              </div>

              <div class="flex">
                <div>Transmission :</div>
                <div>{{ car.Transmission }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      subCategories: {},
      noCarListChoosed: false,
      noCategotyChoosed: false,
    };
  },
  computed: {
    ...mapGetters(["allCategories", "carsList", "language"]),
  },
  async created() {
    await this.getAllCategories();
  },
  methods: {
    async moveTo(data) {
      this.$router.push(`/${this.language}/booking/submit/${data.id}`);
    },
    ...mapActions(["getAllCategories", "getSubCategoryById", "bookingForm"]),
    getSubCategories(payload) {
      this.subCategories = payload.sub_categories;
      this.noCarListChoosed = false;
      this.noCategotyChoosed = true;
    },
    getCarList(id) {
      this.getSubCategoryById(id);
      this.noCarListChoosed = true;
    },
  },
};
</script>

<style>
.category {
  position: relative;
  display: inline-block;

  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.category::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.category:hover {
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.1, 1.1);
}

.category:hover::after {
  opacity: 1;
}
</style>