import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody id='historia'>
            <MDBCardTitle>Nuestra Historia</MDBCardTitle>
            <MDBCardText>
            Nacimos con el objetivos de posicionarnos como tu mejor alternativa dentro de la
                  gastronomía peruana.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='http://cdn.cnn.com/cnnnext/dam/assets/151009133238-1-central-lima.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody id='locales'>
            <MDBCardTitle>Nuestros Locales</MDBCardTitle>
            <MDBCardText>Estamos trabajando para atenderte a nivel de toda Lima Metropolitana.Pronto te anunciaremos nuestra próxima ianuguración</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://enlacocina.telemesa.es/wp-content/uploads/2019/04/promociones-restaurantes.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody id='promo'>
            <MDBCardTitle>Promociones</MDBCardTitle>
            <MDBCardText>
            Siguenos en todas nuestras redes sociales, estate atento!Tenemos sorpresas preparadas para tí
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}