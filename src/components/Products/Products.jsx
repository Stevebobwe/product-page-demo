import React from 'react';
import './Products.scss';
import ProductsData from '../../ProductsData';
import Product from '../Product/Product';


function Products() {
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
      return <Product {...product}/>;
  });

  return (
    <div>
      <ul className="products">
        {filteredProducts}
      </ul>
    </div>
  );
}

export default Products;