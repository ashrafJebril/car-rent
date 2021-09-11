<template>
  <div
    class="
      w-3/4
      bg-white
      h-23
      -mt-16
      z-10
      shadow-2xl
      p-4
      flex
      items-center
      rounded-lg
    "
  >
    <div class="w-1/4 font-black">
      <div class="text-3xl my-4">Search</div>
      <div class="text-2xl">for a Car</div>
    </div>
    <div class="w-3/4 flex flex-col">
      <div class="flex justify-between flex-nowrap">
        <q-select
          filled
          v-model="model"
          :options="options"
          label="Country"
          class="w-full mx-2"
        />
        <q-select
          filled
          v-model="model"
          :options="options"
          label="Cars"
          class="w-full mx-2"
        />
        <q-select
          filled
          v-model="model"
          :options="options"
          label="Model"
          class="w-full mx-2"
        />
      </div>
      <div class="flex justify-end mr-2 my-4">
        <q-btn class="bg-blue-800 text-white" label="Search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      model: "",
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>

<style>
</style>