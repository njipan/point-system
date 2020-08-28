module.exports = (fastify, opt, next) => {
  fastify.register(require("./v1"), { prefix: "v1/users" });
  next();
};
