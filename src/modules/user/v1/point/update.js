const userRepo = require("./../../repository");

module.exports = async (req, reply) => {
  const id = req.params.id;
  const { point = null } = req.body || {};

  const user = await userRepo.get(id);
  if (!user) {
    return reply.send({ message: "User not found", status: "error" }, 422);
  }
  if (isNaN(parseInt(point))) {
    return reply.send({ message: "Point is invalid", status: "error" }, 422);
  }

  await userRepo.updatePoint({ id, point });
  return reply.send({ ...user, point: point + user.point });
};
