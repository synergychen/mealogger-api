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

const db = {}

db.sequelize = sequelize

const Food = require('./models/Food')(sequelize)
const Recipe = require('./models/Recipe')(sequelize)
const Dish = require('./models/Dish')(sequelize)
const FoodCategory = require('./models/FoodCategory')(sequelize)

Food.belongsToMany(Dish, {
  through: Recipe,
  foreignKey: 'food_id'
})
Dish.belongsToMany(Food, {
  through: Recipe,
  foreignKey: 'dish_id'
})
FoodCategory.hasMany(Food)
Food.belongsTo(FoodCategory)

db.Food = Food
db.Recipe = Recipe
db.Dish = Dish
db.FoodCategory = FoodCategory

module.exports = async () => {
  if (db.isConnected) {
    console.log("=> Using existing connection.")
    return db
  }

  await sequelize.authenticate()
  db.isConnected = true
  console.log("=> Created a new connection.")
  return db
}