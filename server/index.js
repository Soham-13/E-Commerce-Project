import dotenv from 'dotenv';
dotenv.config();
import connectDatabase from './db.js';
import express from 'express';
import cors from 'cors';

//routes
import productRoute from './routs/productRoutes.js';

connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoute);

const portNumber = 5000;

app.get('/', () => {
  console.log(`API is running Properly...`);
});
app.listen(portNumber, () => {
  console.log(`Server is running on the ${portNumber}...`);
});
