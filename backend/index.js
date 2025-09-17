require('dotenv').config();
const express = require('express');
const app = express();

const productsRouter = require('./products');

app.use(express.json());
app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Backend API is running!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});