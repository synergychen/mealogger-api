module.exports = (sequelize, DataTypes) => {
  const ShoppingList = sequelize.define(
    'ShoppingList',
    {},
    {
      tableName: 'shopping_lists',
      underscored: true,
    }
  )

  ShoppingList.associate = (models) => {
    ShoppingList.belongsToMany(models.Food, {
      through: models.ShoppingItem,
      foreignKey: 'shopping_list_id'
    })
    ShoppingList.hasMany(models.ShoppingItem, {
      as: 'shopping_items'
    })
  }

  return ShoppingList
}
