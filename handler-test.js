require("dotenv").config()
const handler = require("./handler")

console.log(handler.createDishPlan(
  { body: '{"meal_plan_id":"144","dish_id":"109","meal":"Dinner"}' }, // event
  {}, //content
  function (data, ss) {
    //callback function with two arguments
    console.log(data, ss)
  }
))