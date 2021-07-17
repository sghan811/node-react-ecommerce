import express from 'express';
import Like from '../models/likeModel';
import { isAuth, isAdmin } from '../util';
import mongoose from 'mongoose';
import Order from '../models/orderModel';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const like = await Like.fnidOne({ _id: req.params.product });
  const like2 = like.id.push(await Order.find({}).populate('user').id);
    const product = new Product({
        product: req.params.product,
        id: like2
      });
    const newProduct = await product.save();
    if (newProduct) {
        return res
          .status(201)
          .send({ message: 'New Product Created', data: newProduct });
    }
    res.send(req.params.id);
});

export default router;