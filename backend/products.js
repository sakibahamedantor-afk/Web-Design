const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Create a pool using your DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET /products - return all products from database
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, price FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
