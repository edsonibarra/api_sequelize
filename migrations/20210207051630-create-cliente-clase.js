'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cliente_clases', {
      id_cliente: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"clientes",
          key:"id"
        }
      },
      id_clase: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"clases",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cliente_clases');
  }
};