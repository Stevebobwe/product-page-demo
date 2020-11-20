import React from 'react';
import './Product.scss';

function Product(props) {
  const { id, name, links, price, priceRange, thumbnail, hero, images } = props;

  // usd formatter
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  // get product price or priceRange
  let displayPrice = price ? formatter.format(price.selling) : `${formatter.format(priceRange.selling.high)}-${formatter.format(priceRange.selling.low)}`;

  // get carousel images
  const imageCarousel = images
    .map(productImage => {
      return <img src={productImage.href} alt={name}></img>
  });

  return (
    <li className="product">
        <img src={hero.href} alt={name}></img>
        <div>{name}</div>
        <div>{displayPrice}</div>

        {imageCarousel}
    </li>
  );
}

export default Product;
