module.exports = (sequelize, DataTypes) => {
  const FoodCategory = sequelize.define(
    'FoodCategory',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: DataTypes.STRING,
    },
    {
      tableName: 'food_categories',
      underscored: true,
    }
  )

  FoodCategory.associate = (models) => {
    FoodCategory.hasMany(models.Food)
  }

  return FoodCategory
}
