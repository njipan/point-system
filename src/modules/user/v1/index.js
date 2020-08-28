const routes = [
  {
    method: "GET",
    url: "/",
    handler: require("./list"),
  },
  {
    method: "GET",
    url: "/:id",
    handler: require("./detail"),
  },
  {
    method: "POST",
    url: "/",
    handler: require("./create"),
  },
  {
    method: "POST",
    url: "/:id/point",
    handler: require("./point/update"),
  },
];

module.exports = function (fastify, opts, next) {
  routes.forEach((route, index) => {
    fastify.route(route);
  });
  next();
};
