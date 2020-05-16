const connection = require("./db")

module.exports.getFoods = async () => {
  try {
    const { Food } = await connection()
    const foods = await Food.findAll()
    return {
      statusCode: 200,
      body: JSON.stringify(foods),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not get foods",
    }
  }
}

module.exports.getFoodCategories = async () => {
  try {
    const { FoodCategory } = await connection()
    const foodCategories = await FoodCategory.findAll()
    return {
      statusCode: 200,
      body: JSON.stringify(foodCategories),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not get food categories",
    }
  }
}
