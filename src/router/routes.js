const routes = [
  {
    path: "/:lang",
    component: () => import("layouts/MainLayout.vue"),
  },

  {
    path: "/:lang/booking",
    component: () => import("pages/Booking.vue"),
  },

  {
    path: "/:lang/booking/submit/:id",
    component: () => import("pages/Submit.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
