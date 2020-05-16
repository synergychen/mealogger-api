const connection = require("./db")
const { successResponse, errorResponse } = require("./handler-helpers")

module.exports.getDishes = async () => {
  try {
    const { Dish, Food } = await connection()
    const dishes = await Dish.findAll({
      include: {
        model: Food,
        attributes: ['id', 'name']
      }
    })
    return successResponse(dishes)
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.getFoods = async () => {
  try {
    const { Food, FoodCategory } = await connection()
    const foods = await Food.findAll({ include: FoodCategory })
    return successResponse(foods)
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.getFoodCategories = async () => {
  try {
    const { FoodCategory } = await connection()
    const foodCategories = await FoodCategory.findAll()
    return successResponse(foodCategories)
  } catch (err) {
    return errorResponse(err)
  }
}
