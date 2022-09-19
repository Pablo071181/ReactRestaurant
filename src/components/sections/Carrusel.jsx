import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://tofuu.getjusto.com/orioneat-prod/SJKwbdNwJq9hKRyGH-Navajas.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://dam.cocinafacil.com.mx/wp-content/uploads/2019/08/tortilla-espanola-vegetales.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel>
  );
}