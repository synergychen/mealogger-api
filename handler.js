const connection = require("./db")
const { successResponse, errorResponse, mealPlanParser } = require("./handler-helpers")

mealPlanParser

module.exports.getRecentMealPlans = async () => {
  try {
    const today = new Date()
    const yesterday = new Date(today)
    const dayBeforeYesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2)

    const { MealPlan, Dish, Food } = await connection()
    await MealPlan.findOrCreate({ where: { planned_at: dayBeforeYesterday } })
    await MealPlan.findOrCreate({ where: { planned_at: yesterday } })
    await MealPlan.findOrCreate({ where: { planned_at: today } })
    const mealPlans = await MealPlan.findAll({
      include: {
        model: Dish,
        include: Food
      },
      limit: 3,
      order: [['planned_at', 'DESC']]
    })
    const data = mealPlans.map(mealPlan => mealPlanParser(mealPlan))
    return successResponse(data)
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.createDishPlan = async (event) => {
  try {
    const { DishPlan } = await connection()
    const dishPlan = await DishPlan.create(event)
    return successResponse(dishPlan)
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

module.exports.getShoppingList = async (event) => {
  try {
    const {
      ShoppingList,
      ShoppingItem,
      Food,
      FoodCategory,
    } = await connection()
    const shoppingList = await ShoppingList.findOne({
      include: {
        model: ShoppingItem,
        include: {
          model: Food,
          include: FoodCategory,
        },
      },
      where: { id: event.pathParameters.id },
    })
    return successResponse(shoppingList)
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.getMealPlansHistory = async () => {
  const historyLength = 30
  try {
    const { MealPlan, Dish, Food } = await connection()
    const mealPlans = await MealPlan.findAll({
      include: {
        model: Dish,
        include: Food
      },
      limit: historyLength,
      order: [['planned_at', 'DESC']]
    })
    const data = mealPlans.map(mealPlan => mealPlanParser(mealPlan))
    return successResponse(data)
  } catch (err) {
    return errorResponse(err)
  }
}
