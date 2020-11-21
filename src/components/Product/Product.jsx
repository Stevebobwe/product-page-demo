import React from 'react';
import './Product.scss';

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
    <li className="product col-lg-4 col-md-6">
      <div className="card">
        <img
          className="card-img-top"
          src={hero.href}
          alt={name}
          onClick={() => setModal({
            modalShow: true,
            modalId: id,
            modalData: props
          })}
        />
        <div className="card-body pt-0">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis aliquam fauci sit amet.</p>
          {/* <Button variant="primary">Go somewhere</Button> */}
          <p>{displayPrice}</p>
        </div>
      </div>
    </li>
  );
}

export default Product;
