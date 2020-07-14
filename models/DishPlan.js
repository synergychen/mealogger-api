module.exports = (sequelize, DataTypes) => {
  const DishPlan = sequelize.define(
    'DishPlan',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      meal: DataTypes.STRING,
      meal_plan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'MealPlan',
          key: 'id',
        },
      },
      dish_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Dish',
          key: 'id',
        },
      },
    },
    {
      tableName: 'dish_plans',
      underscored: true,
    }
  )

  DishPlan.associate = (models) => {}

  return DishPlan
}
