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
import { LocalStorage } from "quasar";
export default defineComponent({
  created() {
    const lang = LocalStorage.getItem("language");
    if (lang) {
      this.$router.push(`/${lang}`);
      this.$i18n.locale = lang;
    } else {
      this.$router.push(`/en`);
      this.$i18n.locale = "/en";
      LocalStorage.set("language", this.language);
    }
  },
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
      LocalStorage.set("language", newData);
      if (newData == "ar") {
        this.$i18n.locale = "ar";
        this.$router.push(`/${this.language}`);
      } else {
        this.$i18n.locale = "en";
        this.$router.push(`/${this.language}`);
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
