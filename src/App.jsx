import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollAnimationManager from './components/ScrollAnimationManager';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GalleryPage from './pages/GalleryPage';
import DownloadsPage from './pages/DownloadsPage';
import CertificatesPage from './pages/CertificatesPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProductForOrder, setSelectedProductForOrder] = useState(null);

  const handleOpenOrder = (product = null) => {
    setSelectedProductForOrder(product);
    setOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setOrderModalOpen(false);
    setSelectedProductForOrder(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollAnimationManager />

      {/* Header with Navigation & Mega Menu */}
      <Header onOpenOrder={() => handleOpenOrder(null)} />

      {/* Main Content Viewport */}
      <main style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenOrder={handleOpenOrder} />} />
          <Route path="/about" element={<AboutPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />

          {/* Products & Subcategories */}
          <Route path="/products" element={<ProductsPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/products/:categorySlug" element={<ProductsPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/product-category/:categorySlug" element={<ProductsPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/shop" element={<Navigate to="/products" replace />} />
          <Route path="/product/:productId" element={<ProductDetailPage onOpenOrder={handleOpenOrder} />} />

          {/* Gallery & Subcategories */}
          <Route path="/gallery" element={<GalleryPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/gallery/:galleryType" element={<GalleryPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/video-gallery" element={<Navigate to="/gallery/videos" replace />} />
          <Route path="/event-gallery" element={<Navigate to="/gallery/events" replace />} />
          <Route path="/photo-gallery" element={<Navigate to="/gallery/photos" replace />} />

          {/* Downloads & Subcategories */}
          <Route path="/downloads" element={<DownloadsPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/downloads/:downloadType" element={<DownloadsPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/download" element={<Navigate to="/downloads" replace />} />
          <Route path="/brochure" element={<Navigate to="/downloads" replace />} />

          {/* Certificates */}
          <Route path="/certificates" element={<CertificatesPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/our-certificates" element={<Navigate to="/certificates" replace />} />

          {/* Channel Partners & OEM */}
          <Route path="/partners" element={<PartnersPage onOpenOrder={handleOpenOrder} />} />
          <Route path="/channel-partners" element={<Navigate to="/partners" replace />} />
          <Route path="/our-partners" element={<Navigate to="/partners" replace />} />

          {/* Contact Us */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenOrder={() => handleOpenOrder(null)} />

      {/* Global Order / Trade Quotation Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrder}
        preselectedProduct={selectedProductForOrder}
      />
    </BrowserRouter>
  );
}
