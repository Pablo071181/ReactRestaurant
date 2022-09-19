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
      <Header company={company} class='fixed-top shadow p-3 mb-2 bg-secondary text-white'/>
      <main class='bg-dark'>
        <section class='carousel slide'>
        <div>
      <Carrusel />
      </div>
      </section>
      <section class='bg-dark py-5'>
        <div class='card'>
      <Cards />
      </div>
      <div class='card'>
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
