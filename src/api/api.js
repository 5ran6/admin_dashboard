const express = require('express');
const api = express();

api.listen(3000, () => {
    console.log("Api up and running..");
});

// API FOR 