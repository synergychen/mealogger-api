const connection = require("./db")
const { successResponse, errorResponse } = require("./handler-helpers")

module.exports.getRecentMealPlans = async () => {
  try {
    const today = new Date()
    const yesterday = new Date(today)
    const dayBeforeYesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2)

    const { MealPlan, Dish } = await connection()
    await MealPlan.findOrCreate({ where: { planned_at: dayBeforeYesterday } })
    await MealPlan.findOrCreate({ where: { planned_at: yesterday } })
    await MealPlan.findOrCreate({ where: { planned_at: today } })
    const mealPlans = await MealPlan.findAll({
      include: [Dish],
      limit: 3,
      order: [['planned_at', 'DESC']]
    })
    return successResponse(mealPlans)
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.getDishes = async () => {
  try {
    const { Dish, Food } = await connection()
    const dishes = await Dish.findAll({
      include: [Food]
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
