const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Dish = sequelize.define(
    "dishes",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  )

  return Dish
}