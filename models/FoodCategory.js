const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const FoodCategory = sequelize.define(
    "food_category",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      color: Sequelize.STRING
    },
    {
      tableName: 'food_categories',
      underscored: true
    }
  )

  return FoodCategory
}
