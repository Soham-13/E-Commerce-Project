import express from 'express';
import Product from '../models/Product.js';

const productRoute = express.Router();

const fetchProducts = async (req, res) => {
  const prods = await Product.find({});
  res.json({
    prods,
    pagination: {},
  });
};

productRoute.route('/').get(fetchProducts);

export default productRoute;
