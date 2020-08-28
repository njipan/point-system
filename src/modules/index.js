module.exports = (fastify, opts, next) => {
  fastify.register(require("./user"));
  next();
};
