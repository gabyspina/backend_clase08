const express = require('express');

const productRouter = require('./routes/productos');
const app = express();

const server = app.listen(8080, () => console.log('Server up'));

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/productos', productRouter);
