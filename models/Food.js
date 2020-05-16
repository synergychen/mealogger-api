const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Food = sequelize.define(
    "food",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'foods',
      underscored: true
    }
  )

  return Food
}