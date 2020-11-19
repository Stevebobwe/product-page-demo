import React from 'react';
import './Product.scss';

function Product(props) {
  const { id, name, links, price, thumbnail, hero, images } = props;

  return (
    <li className="product">
        <img src={hero.href} alt={name}></img>
        <div>{name}</div>
    </li>
  );
}

export default Product;
