import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';
import TrainersPage from './pages/trainerspage/TrainersPage';
import ClassesPage from './pages/classespage/ClassesPage';
import ContactPage from './pages/contactpage/ContactPage';
import PlansPage from './pages/planspage/PlansPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/trainers" element={<TrainersPage />} />
          <Route exact path="/classes" element={<ClassesPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/plans" element={<PlansPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
