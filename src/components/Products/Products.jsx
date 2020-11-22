import React, { useState } from 'react';
import './Products.scss';
import ProductsData from '../../ProductsData';
import Product from '../Product/Product';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

function Products(props) {
  const [byNameFilter, setByNameFilter] = useState('');
  const { setModal } = props;
  let products = ProductsData.groups;
  let filterFnsToApply = [];

  // remove products whose names do not contain the input
  if (byNameFilter) {
    const byNameFilterFn = product => {
      return product.name.toLowerCase().indexOf(byNameFilter.toLowerCase()) >= 0;
    };
    filterFnsToApply.push(byNameFilterFn);
  }

  // additional filters here
  
  // apply filters to filteredProducts
  filterFnsToApply.forEach(filterFn => {
    products = products.filter(filterFn);
  });

  // create <Product> for each remaining product in filteredProducts
  const filteredProducts = products
    .map(product => {
      product.key = product.id;
      return <Product {...product} setModal={setModal}/>;
  });

  return (
    <React.Fragment>
      {/* generic navbar */}
      <Navbar expand="lg" className="sticky-top">
        <div className="container-fluid">
          <Navbar.Brand href="#home">Premium Furniture Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="navSearch mr-sm-2" onChange={ e => setByNameFilter(e.target.value) }/>
              {/* <Button variant="outline-dark">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* main */}
      <div className="container-fluid">
        <ul className="products row">
          {filteredProducts}
        </ul>
      </div>

      {/* generic footer */}
      <div className="footer mt-auto py-3">
        <div className="container-fluid">
          <span className="fakeLink">Terms &amp; Conditions</span> | <span className="fakeLink">Privacy Policy</span> | <span className="fakeLink">Legal</span>
        </div>
      </div>      
    </React.Fragment>
  );
}

export default Products;