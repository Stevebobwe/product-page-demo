import React from 'react';
import './Products.scss';
import ProductsData from '../../ProductsData';
import Product from '../Product/Product';

function Products(props) {
  const { setModalShow, setModal } = props;

  let products = ProductsData.groups;
  //let filterFnsToApply = [];

  // name filter
  // const [byNameFilter, setByNameFilter] = useState('');

  // // remove products whose names do not contain the input
  // if (byNameFilter) {
  //   const byNameFilterFn = product => {
  //     return product.name.toLowerCase().indexOf(byNameFilter.toLowerCase()) >= 0;
  //   };
  //   filterFnsToApply.push(byNameFilterFn);
  // }

  // // additional filters here
  
  // // apply filters to filteredProducts
  // filterFnsToApply.forEach(filterFn => {
  //   products = products.filter(filterFn);
  // });

  // create <Product> for each remaining product in filteredProducts
  const filteredProducts = products
    .map(product => {
      product.key = product.id;
      return <Product {...product} setModalShow={() => {setModalShow(true)}} setModal={setModal}/>;
  });

  return (
    <ul className="products row">
      {filteredProducts}
    </ul>
  );
}

export default Products;