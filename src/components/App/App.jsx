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
    <React.Fragment>
      <Products setModal={setModal} />

      <ProductModal
        modal={modal}
        show={modal.modalShow}
        onHide={() => setModal({ modalShow: false, modalId: null, modalData:{} })}
      />
    </React.Fragment>
  );
}

export default App;