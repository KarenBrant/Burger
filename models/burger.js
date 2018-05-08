// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

  // Function to get all burgers
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // Function to create a burger
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // Function to update a burger
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      console.log("update got here");
      cb(res);
    });
  },
  
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
