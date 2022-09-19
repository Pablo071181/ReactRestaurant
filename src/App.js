import './App.css';
import Header from './components/sections/Header';
import Carrusel from './components/sections/Carrusel';
import Cards from './components/sections/Cards';
import Reserva from './components/sections/Reserva';
import Footer from './components/sections/Footer';

//import AppointmentsPage from './pages/AppointmentsPage';

function App() {
  const company = {
    name: 'Proyecto Restaurant',
    slogan: '¡Mejor Sabor'
  };


  return (
    <>
      <Header company={company} class='fixed-top shadow'/>
      <main>
        <section>
      <Carrusel />
      </section>
      <section>
      <Cards />
      <div>
        <Reserva />
      </div>
      </section>
      <section>
      <Footer />
      </section>
      </main>
    </>
  );
}

export default App;
