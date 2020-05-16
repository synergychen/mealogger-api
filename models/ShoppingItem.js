const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const ShoppingItem = sequelize.define(
    'shopping_item',
    {
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
    },
    {
      tableName: 'shopping_items',
      underscored: true,
    }
  )

  return ShoppingItem
}
