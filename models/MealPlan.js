module.exports = (sequelize, DataTypes) => {
  const MealPlan = sequelize.define(
    'MealPlan',
    {
      planned_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'meal_plans',
      underscored: true,
    }
  )

  MealPlan.associate = (models) => {
    MealPlan.belongsToMany(models.Dish, {
      through: models.DishPlan,
      as: 'dishes',
      foreignKey: 'meal_plan_id'
    })
  }

  return MealPlan
}
