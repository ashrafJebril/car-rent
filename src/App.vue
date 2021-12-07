<template>
  <Header class="fixed w-full z-20" />

  <router-view />
  <Footer />
</template>
<script>
import { mapGetters } from "vuex";

import Header from "./components/Header.vue";
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";
export default defineComponent({
  components: {
    Header,
    Footer,
  },

  computed: {
    language() {
      return this.$store.getters.language;
    },
  },
  name: "App",
  watch: {
    language(newData, oldData) {
      if (newData == "ar") {
        this.$i18n.locale = "ar";
      } else {
        this.$i18n.locale = "en";
      }
      console.log("new", newData);
    },
  },
});
</script>


<style >
@tailwind base;
@tailwind components;
@tailwind utilities;

.max {
  max-width: 1600px;
}
</style>
