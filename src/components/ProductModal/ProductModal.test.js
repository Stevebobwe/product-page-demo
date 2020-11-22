import { render, screen } from '@testing-library/react';
import ProductModal from './ProductModal';

const testProduct = {
  "id":"hampton-2-piece-sofa-h6865",
  "name":"Hampton 2-Piece Sofa",
  "links":{
    "www":"https://www.westelm.com/products/hampton-2-piece-sofa-h6865/"
  },
  "price":{
    "regular":2398,
    "selling":2398
  },
  "thumbnail":{
    "size":"m",
    "meta":"",
    "alt":"",
    "rel":"thumbnail",
    "width":363,
    "href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202045/0001/hampton-2-piece-sofa-1-m.jpg",
    "height":363
  },
  "hero":{
    "size":"m",
    "meta":"",
    "alt":"",
    "rel":"hero",
    "width":363,
    "href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202045/0001/hampton-2-piece-sofa-1-m.jpg",
    "height":363
  },
  "images":[
    {
      "size":"m",
      "meta":"",
      "alt":"",
      "rel":"althero",
      "width":363,
      "href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202045/0001/hampton-2-piece-sofa-m.jpg",
      "height":363
    },
    {
      "size":"m",
      "meta":"",
      "alt":"",
      "rel":"althero",
      "width":363,
      "href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202045/0001/hampton-6-piece-sectional-1-m.jpg",
      "height":363
    },
    {
      "size":"m",
      "meta":"",
      "alt":"",
      "rel":"althero",
      "width":363,
      "href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202045/0001/hampton-6-piece-sectional-2-m.jpg",
      "height":363
    },
    {
      "size":"m",
      "meta":"",
      "alt":"",
      "rel":"althero",
      "width":363,
      "href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202045/0001/hampton-5-piece-l-shaped-sectional-1-m.jpg",
      "height":363
    },
    {
      "size":"m",
      "meta":"",
      "alt":"",
      "rel":"althero",
      "width":363,
      "href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202045/0001/hampton-5-piece-l-shaped-sectional-m.jpg",
      "height":363
    }
  ],
  "swatches":[
      
  ],
  "messages":[
      
  ],
  "flags":[
    {
      "bopisSuppress":false,
      "rank":3,
      "id":"newcore"
    }
  ],
  "reviews":{
    "recommendationCount":0,
    "likelihood":0,
    "reviewCount":0,
    "averageRating":0,
    "id":"hampton-2-piece-sofa-h6865",
    "type":"GROUP_REVIEWS"
  }
};

const modal = {
    modalShow: true,
    modalId: testProduct.id,
    modalData:testProduct
};

test('renders modal', () => {
    render(<ProductModal
        modal={modal}
        show={modal.modalShow}
      />);
});