import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const FloatingCartButton = () => {
    const { itemCount, openCart, isOpen } = useCart();

    // Don't show if cart is open or empty
    if (isOpen || itemCount === 0) return null;

    return (
        <AnimatePresence>
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCart}
                className="fixed bottom-6 end-6 z-40 w-14 h-14 bg-green text-paper rounded-full shadow-lg hover:bg-green/90 transition-colors flex items-center justify-center"
            >
                <ShoppingBag className="w-6 h-6" />

                {/* Badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -end-1 w-6 h-6 bg-burgundy text-paper text-xs font-bold rounded-full flex items-center justify-center"
                >
                    {itemCount > 9 ? '9+' : itemCount}
                </motion.div>
            </motion.button>
        </AnimatePresence>
    );
};

export default FloatingCartButton;
