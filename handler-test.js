require("dotenv").config()
const handler = require("./handler")

console.log(handler.getRecentMealPlans(
  { meal_plan_id: '142', dish_id: '60', meal: 'Breakfast' }, // event
  {}, //content
  function (data, ss) {
    //callback function with two arguments
    console.log(data, ss)
  }
))