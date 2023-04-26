const { Router } = require('express');
const router = Router();
const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.verTodascarrinhos);

router.get('/:id', carrinhoController.vercarrinhoPorId);

router.get('/user/:id', carrinhoController.vercarrinhoPorUsuario);

router.post('/', carrinhoController.criarcarrinho);

router.patch('/:id', carrinhoController.atualizarcarrinho);

router.delete('/:id', carrinhoController.deletarcarrinho);

module.exports = router;