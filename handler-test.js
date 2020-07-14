require("dotenv").config()
const handler = require("./handler")

const getRecentMealPlans = () => {
  handler.getRecentMealPlans(
    {}, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
}

const getDishes = () => {
  handler.getDishes (
    {}, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
}

const getFoods = () => {
  handler.getFoods (
    {}, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
}

const getFoodCategories = () => {
  handler.getFoodCategories (
    {}, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
}

const getShoppingList = () => {
  handler.getShoppingList(
    {
      pathParameters: {
        id: 1
      },
    }, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
}

const getMealPlansHistory = () => {
  handler.getMealPlansHistory (
    {}, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
}

// getRecentMealPlans()
// getDishes()
// getFoods()
// getFoodCategories()
// getShoppingList()
getMealPlansHistory()