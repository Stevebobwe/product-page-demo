import React from 'react';
import './Products.scss';
import ProductsData from '../../ProductsData';
import Product from '../Product/Product';

import { Button } from 'react-bootstrap';

function Products(props) {
  const { setModalShow, setModal } = props;

  let products = ProductsData.groups;
  //let filterFnsToApply = [];

  // name filter
  // const [byNameFilter, setByNameFilter] = useState('');

  // // remove items whose names do not contain the input
  // if (byNameFilter) {
  //   const byNameFilterFn = product => {
  //     return product.name.toLowerCase().indexOf(byNameFilter.toLowerCase()) >= 0;
  //   };
  //   filterFnsToApply.push(byNameFilterFn);
  // }

  // // additional filters here
  
  // // apply filters to filteredUniqueItems
  // filterFnsToApply.forEach(filterFn => {
  //   products = products.filter(filterFn);
  // });

  // create <UniqueItem> for each remaining item filteredUniqueItems
  const filteredProducts = products
    .map(product => {
      product.key = product.id;
      //console.log(product);
      return <Product {...product} setModalShow={() => {setModalShow(true)}} setModal={setModal}/>;
  });

  return (
    <div>
      <ul className="products">
        {filteredProducts}
      </ul>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal products
      </Button>
    </div>
  );
}

export default Products;