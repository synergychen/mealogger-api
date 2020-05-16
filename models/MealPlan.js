const Sequelize = require("sequelize")

module.exports = (sequelize) => {
  const MealPlan = sequelize.define(
    "meal_plan",
    {
      planned_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'meal_plans',
      underscored: true,
    }
  )

  return MealPlan
}
