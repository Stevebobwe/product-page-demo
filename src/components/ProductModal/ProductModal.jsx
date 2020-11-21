import { findAllByTestId } from '@testing-library/react';
import React from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';

function ProductModal(props) {
  const { modal } = props;
  
  console.log('ProductModal');
  console.log(modal.modalShow);
  console.log(modal.modalId);
  console.log(modal.modalData);
  console.log(modal.modalData.images)

  
  let smallestCarouselImage = 0;
  let modalCarousel = <div></div>
  if (modal.modalData.images) {
    modal.modalData.images.forEach(image => {
      if ((smallestCarouselImage === 0) || (image.width < smallestCarouselImage)) {
        smallestCarouselImage = image.width;
      }
    });
    modalCarousel = <Carousel className="test" style={{width:"100%", maxWidth:`${smallestCarouselImage}px`}}>
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
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
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

        
        {/* <Carousel className="test" style={{width:"100%", maxWidth:`${smallestCarouselImage}px`}}>
          {modal.modalData.images.map(image => {
            return <Carousel.Item>
              <img src={image.href} alt="product"/>
            </Carousel.Item>
          })}
        </Carousel> */}

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;