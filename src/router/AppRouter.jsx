import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../components/login.jsx';
import Products from '../components/productos.jsx';

function MainRoutes() {
  return (
    <Router basename="/login_google">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
