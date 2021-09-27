const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },

  {
    path: "/booking",
    component: () => import("pages/Booking.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
