import React, { useState } from 'react';
import './App.scss';
import Products from '../Products/Products';
import ProductModal from '../ProductModal/ProductModal';

function App() {  
  const [modal, setModal] = useState({
    modalShow: false,
    modalId: null,
    modalData:{}
  });

  return (
    <div className="app">
      <div className="container-fluid">
        <Products setModal={setModal} />
      </div>
      <ProductModal
        modal={modal}
        show={modal.modalShow}
        onHide={() => setModal({ modalShow: false, modalId: null, modalData:{} })}
      />
    </div>
  );
}

export default App;
