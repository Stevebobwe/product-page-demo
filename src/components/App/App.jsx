import React, { useState } from 'react';
import './App.scss';
import Products from '../Products/Products';
import ProductModal from '../ProductModal/ProductModal';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

function App() {  
  const [modal, setModal] = useState({
    modalShow: false,
    modalId: null,
    modalData:{}
  });

  return (
    <React.Fragment>
      {/* generic header */}
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
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* main data */}
      <div className="container-fluid">
        <Products setModal={setModal} />
      </div>

      {/* generic footer */}
      <div className="footer mt-auto py-3">
        <div className="container-fluid">
          <span className="fakeLink">Terms &amp; Conditions</span> | <span className="fakeLink">Privacy Policy</span> | <span className="fakeLink">Legal</span>
        </div>
      </div>

      <ProductModal
        modal={modal}
        show={modal.modalShow}
        onHide={() => setModal({ modalShow: false, modalId: null, modalData:{} })}
      />
    </React.Fragment>
  );
}

export default App;