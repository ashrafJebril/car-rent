<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { mapActions} from 'vuex'
export default defineComponent({
  name: "App",
  created(){
    this.getAll();
  },
  methods:{
    ...mapActions(['getAll']),

  }
});
</script>


<style >
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
