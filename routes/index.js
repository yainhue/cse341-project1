// add express and set the router
const router = require("express").Router();

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
  //#swagger.tags=["Hello World"]
  res.send("Hello World! from index.js (with swagger!)");
});

router.use("/contacts", require("./contacts"));

module.exports = router;
