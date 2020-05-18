require("dotenv").config()
const handler = require("./handler")

console.log(handler.deleteDishPlan(
  {
    body: '{"meal_plan_id":"144","dish_id":"109"}',
    pathParameters: {
      id: '386'
    }
  }, // event
  {}, //content
  function (data, ss) {
    //callback function with two arguments
    console.log(data, ss)
  }
))