const express = require('express');
const app = express();
const port = 7865

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    if (!Number.isNaN(Number(req.params.id))){
	res.send(`Payment methods for cart ${req.params.id}`);
    } else {
	res.status(404).send('Cart not found');
    }
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});
