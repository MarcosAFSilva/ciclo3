const express = require('express');
const cors = require('cors');
const models = require('./models');

const app=express();
app.use(cors());
app.use(express.json());


let cliente=models.Cliente;
let itempedido=models.ItemPedido;
let pedido=models.Pedido;
let servico=models.Servico;

app.get('/', function (req, res){
    res.send('Olá mundo');
});


app.post('/servicos', async(req,res) =>{
    await servico.create(
     req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Serviço criado com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Foi impossível se conectar'
        })
    });
});

app.post('/servicos', async(req,res) =>{
    await servico.create({
        nome: "Node Js",
        descricao: "Desenvolvimento de aplicaçoes back-end",
        createAt: new Date(),
        updateAt: new Date(),
    });
    res.send('Serviço criado com sucesso');
});

app.post('/servicos', async(req,res) =>{
    await servico.create({
        nome: "Delphi",
        descricao: "Manutençao de sistemas em Delphi",
        createAt: new Date(),
        updateAt: new Date(),
    });
    res.send('Serviço criado com sucesso');
});

app.post('/clientes', async(req,res) =>{
    await cliente.create(
     req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Cliente cadastrado com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Foi impossível se conectar'
        })
    });
});

app.get('/pedidos', function (req, res){
    res.send('Seus pedidos')
});

app.post('/pedidos', async(req,res) =>{
    await pedido.create(
     req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Pedido requisitado com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Foi impossível se conectar'
        })
    });
});

app.post('/itempedidos', async(req,res) =>{
    await itempedido.create(
     req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Serviço agendado com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Foi impossível se conectar'
        })
    });
});

app.get('/pedidos', function (req, res){
    res.send('Seus pedidos')
});


app.get('/itempedidos', function (req, res){
    res.send('Agende um serviço');
});

app.get('/servicos', function (req, res){
    res.send('Conheça nossos serviços');
});


let port=process.env.PORT || 3001;

app.listen(port, (req,res) => {
    console.log('Servidor Ativo: http://localhost:3001');
})