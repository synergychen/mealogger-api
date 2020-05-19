const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const ShoppingItem = sequelize.define(
    'shopping_item',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
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
