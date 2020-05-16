const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Recipe = sequelize.define(
    "recipe",
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
      tableName: 'recipes',
      underscored: true
    }
  )

  return Recipe
}