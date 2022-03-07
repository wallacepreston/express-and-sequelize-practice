const express = require("express");
const app = express();
const Restaurant = require("./models/index")

const port = 3000;

app.get("/Restaurants", async (req, res) => {
    const restaurants = Restaurant.findAll();
    res.json(restaurants);
})

app.listen(port, () => {
    console.log("Your server is listening on port " + port);
})