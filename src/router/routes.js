const routes = [
  {
    path: "/:lang",
    component: () => import("layouts/MainLayout.vue"),
  },

  {
    path: "/:lang/cars",
    component: () => import("src/pages/Cars.vue"),
  },
  {
    path: "/:lang/cars/details/:id/book",
    component: () => import("src/pages/Booking.vue"),
  },
  {
    path: "/:lang/cars/details/:id",
    component: () => import("src/pages/Details.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
