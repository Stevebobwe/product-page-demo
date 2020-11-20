import React from 'react';
import { Carousel } from 'react-bootstrap';
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

  // get samllest carousel image size
  let smallestCarouselImage = 0;
  images.forEach(image => {
    if ((smallestCarouselImage === 0) || (image.width < smallestCarouselImage)) {
      smallestCarouselImage = image.width;
    }
  });
  console.log(smallestCarouselImage);

  return (
    <li className="product">
        <img src={hero.href} alt={name}></img>
        <div>{name}</div>
        <div>{displayPrice}</div>

        <Carousel className="test" style={{width:"100%", maxWidth:`${smallestCarouselImage}px`}}>
          {images.map(image => {
            return <Carousel.Item>
              <img src={image.href} alt="product"/>
            </Carousel.Item>
          })}
        </Carousel>
    </li>
  );
}

export default Product;
