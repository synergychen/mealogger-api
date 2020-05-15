const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const FoodCategory = sequelize.define(
    "food_categories",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  )

  return FoodCategory
}
