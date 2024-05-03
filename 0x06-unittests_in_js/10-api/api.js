const express = require('express');
const app = express();
const port = 7865;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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
app.get('/available_payments', (req, res) => {
let available_payments = {
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
res.send(available_payments);
});
app.post('/login', (req, res) => {
    const username = req.body.userName;
    res.send(`Welcome ${username}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});
