import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import MapPage from './Pages/MapPage/MapPage';
export default function App() {
  return (
    <>
      <Navbar />
      {location.pathname === "/" && <LandingPage />}
      {location.pathname === "/Map" && <MapPage />}
    </>
  );
}
