'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrinho extends Model {
    
    static associate(models) {
      
      
    }
  }
  carrinho.init({
    marca_do_vinho: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    origem: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    região: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    descrição: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    cupom_de_desconto: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Tipo_de_pagamento: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'carrinho',
  });
  return carrinho;
};