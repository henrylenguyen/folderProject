// const exmaple = require("../../controllers/exmaple");
const router = require("../index");

router.get("/api/exmaple", function (req, res) {
  // * Example to get data from request and interact with controller * //
  // const { users } = req.params;
  // exmaple.create({ user });

  res.json({ users: "respond with a resource" });
});

module.exports = router;
