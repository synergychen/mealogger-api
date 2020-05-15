const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Food = sequelize.define(
    "foods",
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

  return Food
}