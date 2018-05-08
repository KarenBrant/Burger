var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all the routes and set up logic within those routes where required.
// Get all burgers
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log("logging all burgers");
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  // Get new burger information
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      console.log("router.post: " + req.body.burger_name);
      res.json({ id: result.insertId });
    });
  });
  
  // Get updated burger information 
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log("devoured: " + req.body.devoured);
    burger.update(
      {
        devoured: 1
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404

          console.log("row not changed");
          return res.status(404).end();
        } else {
          console.log("row changed");
          res.status(200).end();
        } 
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  
