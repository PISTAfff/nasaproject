import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import Form from './Pages/FormPage/Form';
export default function App() {
  return (
    <>
      <Navbar />
      {location.pathname === "/" && <LandingPage />}
      {location.pathname === "/form" && <Form />}
    </>
  );
}
