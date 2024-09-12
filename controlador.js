const express = require('express');
const router = express.Router();

const compras = [
    { Id: 1, descricao: 'PlayStation 5 ', preco: 5000.00 },
    { Id: 2, descricao: 'Camisa Batman ', preco: 50.00 },
    { Id: 3, descricao: 'Caneca Silvio Santos ', preco: 100.00 }
]

const listCompras = async (req, res) => {
    res.json(compras)
}

const totalCompras = async (req, res) => {
    try {
        let valor_total = 0
        for (let i = 0; i < compras.length; i++) {
            valor_total += compras[i].preco
            console.log(valor_total)
        }
        res.json(valor_total)
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(404).json({ message: 'O servidor não pode encontrar o recurso solicitado' });
    }
}

const cadastrarCompra = async (req, res) => {
    try {
        compras.push(req.body)
        res.json(compras)
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(400).json({ message: 'O servidor não pode solicitar a sua requisição' });
    }

}

const deletarCompra = async (req, res) => {
    try {
        const _id = req.params.Id
        compras.splice(_id - 1, 1)
        res.status(200).json(compras)
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(404).json({ message: 'O servidor não pode encontrar o recurso solicitado' });
    }

}

module.exports = { listCompras, cadastrarCompra, deletarCompra, totalCompras }