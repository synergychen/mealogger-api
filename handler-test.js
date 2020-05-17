require("dotenv").config()
const handler = require("./handler")

console.log(handler.createDishPlan(
  { meal_plan_id: '143', dish_id: '60', meal: 'Lunch' }, // event
  {}, //content
  function (data, ss) {
    //callback function with two arguments
    console.log(data, ss)
  }
))