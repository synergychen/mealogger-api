// Many to many associations: https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
)

const MealPlan = require('./models/MealPlan')(sequelize)
const DishPlan = require('./models/DishPlan')(sequelize)
const Dish = require('./models/Dish')(sequelize)
const Recipe = require('./models/Recipe')(sequelize)
const Food = require('./models/Food')(sequelize)
const FoodCategory = require('./models/FoodCategory')(sequelize)

// Meal Plan, Dish Plan, Dish
MealPlan.belongsToMany(Dish, {
  through: DishPlan,
  foreignKey: 'meal_plan_id'
})
Dish.belongsToMany(MealPlan, {
  through: DishPlan,
  foreignKey: 'dish_id'
})
// Food, Dish
Food.belongsToMany(Dish, {
  through: Recipe,
  foreignKey: 'food_id'
})
Dish.belongsToMany(Food, {
  through: Recipe,
  foreignKey: 'dish_id'
})
// Food, Food Category
FoodCategory.hasMany(Food)
Food.belongsTo(FoodCategory)

db = {
  MealPlan,
  DishPlan,
  Dish,
  Recipe,
  Food,
  FoodCategory,
}

module.exports = async () => {
  if (db.isConnected) {
    console.log("=> Using existing connection.")
    return db
  }

  try {
    await sequelize.authenticate()
    db.isConnected = true
    console.log("Created a new connection.")
  } catch (err) {
    console.log("Failed to create connection.")
  }
  return db
}