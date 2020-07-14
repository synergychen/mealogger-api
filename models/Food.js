const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define(
    'Food',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'foods',
      underscored: true,
    }
  )

  Food.associate = (models) => {
    Food.belongsToMany(models.Dish, {
      through: models.Recipe,
      as: 'dishes',
      foreignKey: 'food_id',
    })
    Food.belongsTo(models.FoodCategory, {
      as: 'food_category'
    })
    Food.belongsToMany(models.ShoppingList, {
      through: models.ShoppingItem,
      foreignKey: 'food_id',
    })
  }

  return Food
}