const router = require("../index");

router.get("/api", function (req, res) {
    console.log("ENV",process.env.TEST)
  res.json({ hello: "respond with a resource" });
});

module.exports = router;
