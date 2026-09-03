const express = require('express');
const app = express()
const port = process.env.PORT || 3000

// listen for the port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// send to the router
app.get('/', require("./routes"));



