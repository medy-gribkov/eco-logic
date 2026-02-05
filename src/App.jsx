import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import CartDrawer from './components/ui/CartDrawer';
import FloatingCartButton from './components/ui/FloatingCartButton';

// Eager load Home page (main entry point)
import Home from './pages/Home';

// Lazy load all other pages for code splitting
const Quiz = lazy(() => import('./pages/Quiz'));
const Result = lazy(() => import('./pages/Result'));
const QuizComplete = lazy(() => import('./pages/QuizComplete'));
const Process = lazy(() => import('./pages/Process'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const VolunteerPage = lazy(() => import('./pages/VolunteerPage'));
const MediaKitPage = lazy(() => import('./pages/MediaKitPage'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const AccessibilityStatement = lazy(() => import('./pages/AccessibilityStatement'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-paper">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-green/30 border-t-green rounded-full animate-spin mx-auto mb-4" />
      <p className="text-graphite/60 font-body">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <AccessibilityProvider>
      <LanguageProvider>
        <CartProvider>
          <BrowserRouter>
            {/* Global cart components */}
            <CartDrawer />
            <FloatingCartButton />

            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Single page home with all content - eagerly loaded */}
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

                {/* Volunteer page */}
                <Route path="/volunteer" element={
                  <Layout>
                    <VolunteerPage />
                  </Layout>
                } />

                {/* Media Kit page */}
                <Route path="/media-kit" element={
                  <Layout>
                    <MediaKitPage />
                  </Layout>
                } />

                {/* Legal pages */}
                <Route path="/terms" element={
                  <Layout>
                    <Terms />
                  </Layout>
                } />
                <Route path="/privacy" element={
                  <Layout>
                    <Privacy />
                  </Layout>
                } />
                <Route path="/accessibility" element={
                  <Layout>
                    <AccessibilityStatement />
                  </Layout>
                } />

                {/* Redirect all other routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </AccessibilityProvider>
  );
}

export default App;
