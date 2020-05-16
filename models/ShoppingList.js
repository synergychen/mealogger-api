const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const ShoppingList = sequelize.define(
    'shopping_list',
    {},
    {
      tableName: 'shopping_lists',
      underscored: true,
    }
  )

  return ShoppingList
}
