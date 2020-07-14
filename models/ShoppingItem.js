module.exports = (sequelize, DataTypes) => {
  const ShoppingItem = sequelize.define(
    'ShoppingItem',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'shopping_items',
      underscored: true,
    }
  )

  ShoppingItem.associate = (models) => {
    ShoppingItem.belongsTo(models.Food, {
      as: 'food'
    })
  }

  return ShoppingItem
}
