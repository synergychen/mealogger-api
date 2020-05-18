const connection = require("./db")
const { successResponse, errorResponse } = require("./handler-helpers")

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
    return successResponse(mealPlans.reverse())
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.createDishPlan = async (event) => {
  try {
    const body = JSON.parse(event.body)
    const { MealPlan, DishPlan, Dish, Food } = await connection()
    await DishPlan.create(body)
    // Return new mealPlan instead of dish plan for FE
    const mealPlan = await MealPlan.findOne({
      include: {
        model: Dish,
        include: Food
      },
      where: { id: body.meal_plan_id }
    })
    return successResponse(mealPlan)
  } catch (err) {
    return errorResponse(err, event)
  }
}

module.exports.deleteDishPlan = async (event) => {
  try {
    const { DishPlan } = await connection()
    const deleted = await DishPlan.destroy({
      where: { id: event.pathParameters.id }
    })
    return successResponse({ deleted })
  } catch (err) {
    return errorResponse(err, event)
  }
}

module.exports.getDishes = async () => {
  try {
    const { Dish, Food } = await connection()
    const dishes = await Dish.findAll({
      include: [Food],
      order: [['updated_at', 'DESC']]
    })
    return successResponse(dishes)
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.createDish = async (event) => {
  try {
    const body = JSON.parse(event.body)
    const { Dish, Recipe, Food } = await connection()
    let dish = await Dish.create({ name: body.name })
    await Recipe.bulkCreate(
      body.foods.map(food_id => ({ food_id, dish_id: dish.id }))
    )
    dish = await Dish.findOne({
      include: [Food],
      where: { id: dish.id }
    })
    return successResponse(dish)
  } catch (err) {
    return errorResponse(err, event)
  }
}

module.exports.getFoods = async () => {
  try {
    const { Food, FoodCategory } = await connection()
    const foods = await Food.findAll({
      include: FoodCategory,
      order: [['updated_at', 'DESC']]
    })
    return successResponse(foods)
  } catch (err) {
    return errorResponse(err)
  }
}

module.exports.createFood = async (event) => {
  try {
    const { name, food_category_id } = JSON.parse(event.body)
    const { Food, FoodCategory } = await connection()
    let food = await Food.create({ name, food_category_id })
    food = await Food.findOne({
      where: { id: food.id },
      include: FoodCategory
    })
    return successResponse(food)
  } catch (err) {
    return errorResponse(err, event)
  }
}

module.exports.updateFood = async (event) => {
  try {
    const { name, food_category_id } = JSON.parse(event.body)
    const { Food, FoodCategory } = await connection()
    let food = await Food.findOne({
      where: { id: event.pathParameters.id },
    })
    await food.update({ name, food_category_id })
    food = await Food.findOne({
      include: FoodCategory,
      where: { id: food.id }
    })
    return successResponse(food)
  } catch (err) {
    return errorResponse(err, event)
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
    return successResponse(mealPlans)
  } catch (err) {
    return errorResponse(err)
  }
}
