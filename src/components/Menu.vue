<template>
  <div
    class="
      bg-white
      w-3/4
      h-16
      -mt-4
      rounded
      shadow-2xl
      flex
      justify-between
      items-center
      px-4
    "
  >
    <div class="flex">
      <router-link to="/">
        <div class="flex items-center text-xl cursor-pointer">
          <q-icon name="home" class="text-gray-300 text-2xl mr-2" />
          <div class="hover">{{ $t("Home") }}</div>
        </div>
      </router-link>
      <div class="flex items-center text-xl cursor-pointer">
        <q-icon name="info" class="text-gray-300 text-2xl mx-2" />
        <div>{{ $t("About") }}</div>
      </div>
      <router-link to="/booking">
        <div class="flex items-center text-xl cursor-pointer">
          <q-icon name="book" class="text-gray-300 text-2xl mx-2" />
          <div class="hover">{{ $t("Cars") }}</div>
        </div>
      </router-link>
    </div>
    <div class="text-xl flex">
      <div class="flex flex-nowrap bg-white rounded-full mr-1 dropdown">
        <img src="../../images/england.png" class="w-8 h-8" alt="" />
        <div>English</div>
        <div class="dropdown-content p-4">
          <div @click="changeLang('ar')" class="cursor-pointer">Arabic</div>
          <div @click="changeLang('en')" class="cursor-pointer">English</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    console.log(this.$i18n);
  },
  methods: {
    ...mapActions(["changeLanguage"]),
    changeLang(lan) {
      this.changeLanguage(lan);
    },
  },
};
</script>

<style>
.hover {
  text-transform: uppercase;
}
.hover:hover:after {
  transform: scaleX(1);
}
.hover:after {
  display: block;
  content: "";
  border-bottom: solid 3px #393485;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* .dropdown-content a:hover {
  background-color: #ddd;
} */

.dropdown:hover .dropdown-content {
  display: block;
}
</style>