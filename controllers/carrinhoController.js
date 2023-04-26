const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const carrinhoModel = require('../models/carrinho')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarcarrinho = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await carrinhoModel.create({
        marca_do_vape: req.bodymarca_do_vape,
        origem: req.body.origem,
        tipo: req.body.tipo,
        região: req.body.região,
        descrição: req.body.descrição,
        cupom_de_desconto: req.body.cupom_de_desconto,
        Tipo_de_pagamento: req.body.Tipo_de_pagamento,
    }).then((result) => {
        res.status(201).json({
            message: "carrinho enviada com sucesso!",
            carrinho: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao enviar carrinho",
            error: err
        });
    });
}

exports.vercarrinhoPorId = async (req, res) => {
    console.log('GET');
    await carrinhoModel.findByPk(req.params.id).then((result) => {
        console.log(result)
        res.status(200).json({
            message: "carrinho encontrado",
            carrinho: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar carrinho",
            error: err
        });
    });
}

exports.vercarrinhoPorUsuario = async (req, res) => {
    console.log('GET');
    await carrinhoModel.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "carrinho encontrado",
            carrinhos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar carrinho",
            error: err
        });
    });
}

exports.verTodascarrinhos = async (req, res) => {
    console.log('GET');
    await carrinhoModel.findAll().then((result) => {
        res.status(200).json({
            message: "carrinhos encontrados",
            carrinhos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar carrinhos",
            error: err
        });
    });
}

exports.atualizarcarrinho = async (req, res) => {
    console.log('PATCH');
    await carrinhoModel.update({
        marca_do_vape: req.bodymarca_do_vape,
        origem: req.body.origem,
        tipo: req.body.tipo,
        região: req.body.região,
        descrição: req.body.descrição,
        cupom_de_desconto: req.body.cupom_de_desconto,
        Tipo_de_pagamento: req.body.Tipo_de_pagamento,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "carrinho atualizado",
            carrinho: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar carrinho",
            error: err
        });
    });
}

exports.deletarcarrinho = async (req, res) => {
    console.log('DELETE');
    await carrinhoModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "carrinho deletado",
            carrinho: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar carrinho",
            error: err
        });
    });
}