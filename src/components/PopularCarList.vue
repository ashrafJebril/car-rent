<template>
  <div class="flex w-full">
    <div v-for="car in sub" :key="car.id">
      <div v-if="car.cars_lists.length > 0">
        <div v-for="ad in car.cars_lists">
          <div
            v-if="ad.promotion == true"
            class="bg-white w-80 h-82 shadow-2xl rounded-xl my-4 hover box"
          >
            <div class="w-full p-2">
              <img :src="`http://localhost:1337${ad.images[0].url}`" alt="" />
              <div class="my-1 mt-8">Company : {{ ad.price }}JD</div>

              <div class="my-1">mercedes : {{ ad.model }}</div>
              <div class="my-1">model : {{ ad.color }}</div>
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
  created() {
    this.getSubCategory();
  },
  computed: {
    ...mapGetters(["sub"]),
  },
  methods: {
    ...mapActions(["getSubCategory"]),
  },
  setup() {
    return {
      box: [
        {
          id: 1,
          name: "Toyota",
          company: "Free",
          Price: 20,
          image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        },
        {
          id: 2,
          name: "Toyota",
          company: "Free",
          Price: 20,
          image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        },
        {
          id: 3,
          name: "Toyota",
          company: "Free",
          Price: 20,
          image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        },
        {
          id: 4,
          name: "Toyota",
          company: "Free",
          Price: 20,
          image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        },
        {
          id: 5,
          name: "Toyota",
          company: "Free",
          Price: 20,
          image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        },
        {
          id: 5,
          name: "Toyota",
          company: "Free",
          Price: 20,
          image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        },
      ],
    };
  },
};
</script>

<style>
.hover {
  transition: box-shadow 0.3s;
}
.hover:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.box {
  position: relative;
  display: inline-block;

  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.box::after {
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

.box:hover {
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.1, 1.1);
}

.box:hover::after {
  opacity: 1;
}
</style>