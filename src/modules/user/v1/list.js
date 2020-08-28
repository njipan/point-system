const userRepo = require("../repository");

module.exports = async (req, reply) => {
  const users = await userRepo.all();
  return reply.send({
    data: users,
    status: "success",
  });
};
