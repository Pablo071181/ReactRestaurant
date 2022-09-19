import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import AppointmentsPage from './pages/AppointmentsPage';

function App() {
  const company = {
    name: 'Sistema de Reservas',
    slogan: '¡Dale la mejor experiencia a tu paladar!'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Pablo Soplopuco'
  };

  return (
    <>
      <Header company={company} />
      <main className="overflow-hidden">
        <AppointmentsPage />
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;
