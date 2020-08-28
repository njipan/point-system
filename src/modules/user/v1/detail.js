const userRepo = require("./../repository");

module.exports = async (req, reply) => {
  const user = await userRepo.get(req.params.id);
  if (!user) {
    return reply.send(
      {
        message: "User not found",
        status: "error",
      },
      404
    );
  }
  return reply.send({
    data: user,
    status: "success",
  });
};
