import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import like from '../actions/likeAcitons';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {category && <h2>{category}</h2>}

      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div><img onClick={like(product.id ? product.id : '')} class="buttons"src="data:image/png;base64,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"></img><img class="buttons" src="data:image/png;base64,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"></img></div>
                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;
