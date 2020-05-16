require("dotenv").config()
const handler = require("./handler")

console.log(handler.getRecipes(
  {}, //event
  {}, //content
  function (data, ss) {
    //callback function with two arguments
    console.log(data, ss)
  }
))