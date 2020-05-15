const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Recipe = sequelize.define(
    "recipes",
    {
      dishId: {
        type: Sequelize.INTEGER,
        field: 'dish_id',
        allowNull: false,
        references: {
          model: 'Dish',
          key: 'id'
        }
      },
      foodId: {
        type: Sequelize.INTEGER,
        field: 'food_id',
        allowNull: false,
        references: {
          model: 'Food',
          key: 'id'
        }
      }
    },
    {
      underscored: true
    }
  )

  return Recipe
}