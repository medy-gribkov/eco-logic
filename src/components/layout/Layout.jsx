import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityPanel from '../ui/AccessibilityPanel';

const Layout = ({ children, hideFooter = false, hideNavbar = false }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {!hideNavbar && <Navbar />}
            <main className="flex-1">
                {children}
            </main>
            {!hideFooter && <Footer />}
            <AccessibilityPanel />
        </div>
    );
};

export default Layout;
