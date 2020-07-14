module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      dish_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Dish',
          key: 'id',
        },
      },
      food_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Food',
          key: 'id',
        },
      },
    },
    {
      tableName: 'recipes',
      underscored: true,
    }
  )

  Recipe.associate = (models) => {}

  return Recipe
}