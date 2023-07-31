import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './contexts/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  document.title ="SUN CO.";

  return (
    <CartProvider>
        <Router>
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
              <Footer />
            </div>
        </Router>
    </CartProvider>
  );
};

export default App;
