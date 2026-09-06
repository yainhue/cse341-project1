// add express and set the router
const router = require("express").Router();

router.get("/", (req, res) => {
    res.send('Hello World! from index.js')
});

router.use("/contacts", require("./contacts"));

module.exports = router;