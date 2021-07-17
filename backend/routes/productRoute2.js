import express from 'express';
import Product2 from '../models/productModel2';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const products2 = await Product2.find({ ...category, ...searchKeyword }).sort(
    sortOrder
  );
  res.send(products2);
});

router.get('/:id', async (req, res) => {
  const product2 = await Product2.findOne({ _id: req.params.id });
  if (product2) {
    res.send(product2);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});
router.post('/:id/reviews', isAuth, async (req, res) => {
  const product2 = await Product2.findById(req.params.id);
  if (product2) {
    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    product2.reviews.push(review);
    product2.numReviews = product2.reviews.length;
    product2.rating =
      product2.reviews.reduce((a, c) => c.rating + a, 0) /
      product2.reviews.length;
    const updatedProduct = await product2.save();
    res.status(201).send({
      data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      message: 'Review saved successfully.',
    });
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product2 = await Product2.findById(productId);
  if (product2) {
    product2.name = req.body.name;
    product2.price = req.body.price;
    product2.image = req.body.image;
    product2.brand = req.body.brand;
    product2.category = req.body.category;
    product2.countInStock = req.body.countInStock;
    product2.description = req.body.description;
    const updatedProduct = await product2.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product2.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

router.post('/', isAuth, isAdmin, async (req, res) => {
  const product2 = new Product2({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product2.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});

export default router;
