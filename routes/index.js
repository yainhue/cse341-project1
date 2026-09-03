const router = require("express").Router();

router.get("/", (req, res) => {
    res.send('Hello World! desde index.js')
});

module.exports = router;