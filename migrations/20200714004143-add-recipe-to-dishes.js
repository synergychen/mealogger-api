'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'dishes',
          'steps',
          {
            type: Sequelize.DataTypes.JSONB,
            defaultValue: '[]'
          },
          { transaction: t }
        ),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('dishes', 'steps', { transaction: t }),
      ])
    })
  }
};
