require("dotenv").config();
const fastify = require("fastify")({ logger: false });
fastify.register(require("fastify-cors"));
fastify.register(require("fastify-healthcheck"));
fastify.register(require("./src"));

fastify.addHook("onError", (request, reply, error, done) => {
  done();
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
