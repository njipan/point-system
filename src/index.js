module.exports = (fastify, opts, next) => {
  fastify.get("/", (res, reply) => {
    return {
      status: "OK",
    };
  });

  fastify.register(require("./modules"), { prefix: "api" });
  next();
};
