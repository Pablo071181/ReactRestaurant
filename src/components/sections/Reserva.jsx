import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Reserva con Nosotros</MDBCardTitle>
        <MDBCardText>
        </MDBCardText>
        <MDBBtn id='reserva' href='https://reservamenu.netlify.app/'>Reservar</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}