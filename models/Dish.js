module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define(
    'Dish',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      steps: {
        type: DataTypes.JSONB,
        get() {
          return JSON.parse(this.getDataValue('steps'))
        },
        set(value) {
          return this.setDataValue('steps', JSON.stringify(value))
        },
      },
    },
    {
      tableName: 'dishes',
      underscored: true,
    }
  )

  Dish.associate = (models) => {
    Dish.belongsToMany(models.MealPlan, {
      through: models.DishPlan,
      foreignKey: 'dish_id'
    })

    Dish.belongsToMany(models.Food, {
      through: models.Recipe,
      as: 'foods',
      foreignKey: 'dish_id'
    })
  }

  return Dish
}