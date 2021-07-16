import express from 'express';
import Like from '../models/likeModel';
import { isAuth, isAdmin } from '../util';
import mongoose from 'mongoose';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const like = await Like.findOne({ _id: req.params.id });
    const product = new Product({
        
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