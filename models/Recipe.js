const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Recipe = sequelize.define(
    "recipes",
    {
      dish_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dish',
          key: 'id'
        }
      },
      food_id: {
        type: Sequelize.INTEGER,
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