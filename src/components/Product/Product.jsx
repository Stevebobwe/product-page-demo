import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Product.scss';

import { Button } from 'react-bootstrap';

function Product(props) {
  const { id, name, links, price, priceRange, thumbnail, hero, images, setModalShow, setModal } = props;
  console.log('debug1');
  // usd formatter
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  // get product price or priceRange
  let displayPrice = price ? formatter.format(price.selling) : `${formatter.format(priceRange.selling.high)}-${formatter.format(priceRange.selling.low)}`;

  return (
    <li className="product">
      <img src={hero.href} alt={name} onClick={() => setModal({
          modalShow: true,
          modalId: id,
          modalData: props
        })}
      />
      <div>{name}</div>
      <div>{displayPrice}</div>

      {/* <Button variant="primary" onClick={() => setModal({
          modalShow: true,
          modalId: id,
          modalData: props
        })}>
        setModal
      </Button> */}
    </li>
  );
}

export default Product;
