require("dotenv").config()
const handler = require("./handler")

console.log(handler.getRecentMealPlans(
  {}, //event
  {}, //content
  function (data, ss) {
    //callback function with two arguments
    console.log(data, ss)
  }
))