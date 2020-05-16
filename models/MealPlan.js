const Sequelize = require("sequelize")

module.exports = (sequelize) => {
  const MealPlan = sequelize.define(
    "meal_plans",
    {
      planned_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  )

  return MealPlan
}
