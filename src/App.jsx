import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import QuizComplete from './pages/QuizComplete';
import Process from './pages/Process';
import CheckoutPage from './pages/CheckoutPage';
import CartDrawer from './components/ui/CartDrawer';
import FloatingCartButton from './components/ui/FloatingCartButton';

function App() {
  return (
    <AccessibilityProvider>
      <LanguageProvider>
        <CartProvider>
          <BrowserRouter>
            {/* Global cart components */}
            <CartDrawer />
            <FloatingCartButton />

            <Routes>
              {/* Single page home with all content */}
              <Route path="/" element={
                <Layout>
                  <Home />
                </Layout>
              } />

              {/* Quiz pages - no footer to avoid overlap with fixed buttons */}
              <Route path="/quiz" element={
                <Layout hideFooter>
                  <Quiz />
                </Layout>
              } />
              <Route path="/result" element={
                <Layout hideFooter>
                  <Result />
                </Layout>
              } />
              <Route path="/quiz-complete" element={
                <Layout hideFooter>
                  <QuizComplete />
                </Layout>
              } />

              {/* Checkout - Mock checkout flow */}
              <Route path="/checkout" element={
                <Layout>
                  <CheckoutPage />
                </Layout>
              } />

              {/* Process page - Full documentation of design process */}
              <Route path="/process" element={
                <Layout>
                  <Process />
                </Layout>
              } />

              {/* Redirect all other routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </AccessibilityProvider>
  );
}

export default App;
