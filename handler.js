const connection = require("./db")

module.exports.getDishes = async () => {
  try {
    const { Dish } = await connection()
    const dishes = await Dish.findAll()
    return {
      statusCode: 200,
      body: JSON.stringify(dishes),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not get dishes",
    }
  }
}

module.exports.getRecipes = async () => {
  try {
    const { Recipe } = await connection()
    const recipes = await Recipe.findAll()
    return {
      statusCode: 200,
      body: JSON.stringify(recipes),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not get recipes",
    }
  }
}

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
