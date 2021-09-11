<template>
  <div class="flex w-3/4 mt-16">
    <div
      class="bg-white w-80 h-96 shadow-2xl rounded-xl my-4 ml-8 hover box"
      v-for="car in box"
      :key="car.id"
    >
      <div class="w-full p-2">
        <img :src="car.image" alt="" class="rounded-t-xl w-ful" />
        <div class="my-1">Company : Thrifty</div>

        <div class="my-1">mercedes : E2020</div>
        <div class="my-1">model : 2020</div>
        <div class="my-1">color : Blue</div>
        <div class="my-1">Price : 15</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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