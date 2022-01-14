const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');


// Settings
app.set('appName', 'Tutorial Nodejs Express');
app.set('port', '3000');
// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs')

// Middlewares - procesan datos antes de que lleguen a las rutas - Antes de llagar a las rutas procesamos algo

app.use(express.json());
app.use(morgan('dev'));


// Routes

// app.all('/user', (req, res, next) => {
//     console.log('Por aqui paso');
//     next();
// })



app.get('/', (req, res) => {
    const data = [{name: 'juan'}, {name: 'luciano'}, {name: 'lucas'}, {name: 'ryan'}];
    res.render('index.ejs', {people: data});
})

app.get('/user', (req, res) => {
    res.json({
        username: 'wvaras77',
        name: 'Luciano',
        email: 'soylucianovaras@gmail.com'
    });
})

app.post('/user/:id', (req, res)=>{
    console.log(req.params);
    console.log(req.body);
    res.send('REQUEST POST RECEIVED');
})

app.put('/user/:id', (req, res)=>{
    console.log(req.params);     
    res.send(`The user ${req.params.id} ha sido actualizado`);
})

app.delete('/user/:userid', (req, res)=>{
    res.send(`User ${req.params.userid} DELETED`);
}) 

app.use(express.static('public'));


app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
})