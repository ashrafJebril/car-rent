<template>
  <div class="">
    <div
      class="
        bg-blue-800
        w-full
        h-36
        flex
        items-center
        justify-center
        text-white
      "
    >
      <div class="w-4/5 flex justify-between">
        <img src="../../images/logo.png" alt="" class="w-48 h-16" />
        <div class="flex">
          <div class="mx-4">
            <div class="flex items-center">
              <q-icon name="call" class="text-white text-3xl pr-2" />
              <div class="border-l border-1 px-2 text-xl">
                <div>+9627644565</div>
                <div>5626568</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center mx-2">
              <q-icon name="mail" class="text-white text-3xl pr-2" />
              <div class="border-l border-1 px-2 text-xl">
                <div>{{ $t("Email") }}</div>
                <div>ashraf@rent.com</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center ml-2">
              <q-icon name="account_circle" class="text-white text-3xl pr-2" />
              <div class="border-l border-1 px-2 text-xl flex flex-col">
                <div>{{ $t("Social") }}</div>
                <div class="flex items-center mt-2">
                  <q-icon name="facebook" class="text-white text-1xl mr-2" />
                  <i class="fa fa-instagram mr-2"></i>
                  <i class="fa fa-snapchat"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <Menu class="absolute z-10" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
</style>