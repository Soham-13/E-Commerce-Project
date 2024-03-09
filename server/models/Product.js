import mongoose, { Model, Mongoose } from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    productIsNew: {
      type: Boolean,
      required: true,
    },
    reviews: {
      type: Array,
      required: true,
      default: [],
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    stripeId: {
      type: String,
    },
  },
  { timestamp: true }
);

const Product = mongoose.model('tbl_products', productSchema);
export default Product;
