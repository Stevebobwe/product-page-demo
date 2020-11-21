import React from 'react';
import './ProductModal.scss';
import { Carousel, Button, Modal } from 'react-bootstrap';

function ProductModal(props) {
  const { modal } = props;

  let smallestCarouselImage = 0;
  let modalCarousel = <div></div>
  if (modal.modalData.images) {
    modal.modalData.images.forEach(image => {
      if ((smallestCarouselImage === 0) || (image.width < smallestCarouselImage)) {
        smallestCarouselImage = image.width;
      }
    });
    modalCarousel = <Carousel className="test" style={{width:"100%", maxWidth:`${smallestCarouselImage}px`}} fade={true}>
      {modal.modalData.images.map(image => {
        return <Carousel.Item>
          <img src={image.href} alt="product"/>
        </Carousel.Item>
      })}
    </Carousel>
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>{modal.modalData.name}</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <div style={{textAlign: 'center'}}>
          {modalCarousel}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;