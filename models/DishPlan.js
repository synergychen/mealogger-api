const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const DishPlan = sequelize.define(
    'dish_plans',
    {
      meal: Sequelize.STRING,
      meal_plan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'MealPlan',
          key: 'id'
        }
      },
      dish_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dish',
          key: 'id'
        }
      }
    },
    {
      underscored: true,
    }
  )

  return DishPlan
}
