import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  //MDBCol,
  //MDBRow,
  //MDBIcon,
  //MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>


        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Proyecto Restaurant
        </a>
      </div>
    </MDBFooter>
  );
}