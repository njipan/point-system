const userRepo = require("./../repository");

module.exports = async (req, reply) => {
  const { username = null } = req.body || {};
  if (!username || username.length == 0) {
    return reply.send(
      {
        message: "Username must be filled",
        status: "error",
      },
      422
    );
  }
  const user = await userRepo.create({
    username,
  });
  return reply.send({
    status: "success",
  });
};
