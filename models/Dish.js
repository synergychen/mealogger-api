const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Dish = sequelize.define(
    "dish",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'dishes',
      underscored: true
    }
  )

  return Dish
}