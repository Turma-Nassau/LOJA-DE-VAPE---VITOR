'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carrinho', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca_do_vinho: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      origem: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      região: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      descrição: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      cupom_de_desconto: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      Tipo_de_pagamento: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Usuarios',
          key: 'id',
          as: 'userId'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carrinho');
  }
};