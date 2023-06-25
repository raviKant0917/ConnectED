const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: [true, 'A transaction must belong to a product!']
  },
  buyer:{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A transaction must belong to a User!']
  },
  seller:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    required:[true,'A transaction must have a seller']
  },
  price: {
    type: Number,
    require: [true, 'A transaction must have a price.']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  paid: {
    type: Boolean,
    default: false
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports=Transaction;