import { useState, useEffect } from 'react';
import '../styles/Productos.css';
import logo from '../assets/soccer-balon.svg';
import product1 from '../assets/mcucamisa.webp';
import product2 from '../assets/milloscamisa.webp';
import product3 from '../assets/Guayos_X_Crazyfast.avif';
import product4 from '../assets/Guantes_Predator.avif';
import portada from '../assets/portada.jpg';
import portada1 from '../assets/botas_balon.jpg';
import portada2 from '../assets/wallpaper_soccer.jpg';

function App() {
  // Estado para controlar la imagen activa del slider
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de las imágenes del slider
  const slides = [portada, portada1, portada2];

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Efecto para el cambio automático de las imágenes
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <img src={logo} alt="Soccer Products Logo" className="logo" />
          <h1>Soccer <br /> Products</h1>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <div className="slide">
            <img src={slides[currentSlide]} className="portada" alt="Portada" />
          </div>
        </div>
        <button className="arrow left" onClick={prevSlide}></button>
        <button className="arrow right" onClick={nextSlide}></button>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h2>Categorías</h2>
        <div className="category-container">
          <div className="category-card">Balls</div>
          <div className="category-card">Jerseys</div>
          <div className="category-card">Shoes</div>
          <div className="category-card">Accessories</div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products" id="products">
        <h2>Productos Destacados</h2>
        <div className="product-container">
          <div className="product-card">
            <img src={product1} alt="Product 1" />
            <h3>Camiseta MCU azul</h3>
            <p>$39.99</p>
          </div>
          <div className="product-card">
            <img src={product2} alt="Product 2" />
            <h3>Camiseta Millorarios blanca</h3>
            <p>$49.99</p>
          </div>
          <div className="product-card">
            <img src={product3} alt="Product 3" />
            <h3>Guayos crazyfast blancos</h3>
            <p>$395.99</p>
          </div>
          <div className="product-card">
            <img src={product4} alt="Product 4" />
            <h3>Guantes predator</h3>
            <p>$199.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
