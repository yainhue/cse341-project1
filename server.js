const express = require('express');
const app = express()
const port = process.env.PORT || 3000

// add mongodb
const mongodb = require("./data/database");

// send to the router
app.use('/', require("./routes"));

// function to initialize the DB
mongodb.InitDb((err) => {

    // if an error is found, log it
    if (err) {
        console.log(err);
    }
    else (
        app.listen(port, () => {
            console.log(`Database and app listening on port ${port}`)
        })
    )

});

