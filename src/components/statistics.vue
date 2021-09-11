<template>
  <div
    class="
      px-64
      flex
      justify-around
      items-center
      w-full
      h-32
      customers
      my-32
      text-white
    "
  >
    <div class="flex flex-col items-center">
      <div class="text-blue-500 text-4xl">145115</div>
      <div class="text-3xl">Customers</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-blue-500 text-4xl">145115</div>
      <div class="text-3xl">Users</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-blue-500 text-4xl">145115</div>
      <div class="text-3xl">Fleet</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-blue-500 text-4xl">145115</div>
      <div class="text-3xl">Companies</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.customers {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../../images/customers.jpg");
  background-position: top center;
  background-color: #cccccc;
  height: 430px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>