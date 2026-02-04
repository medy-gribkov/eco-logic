import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../i18n';

const CartDrawer = () => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const Arrow = isRTL ? ArrowLeft : ArrowRight;
    const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, clearCart } = useCart();

    const handleCheckout = () => {
        closeCart();
        navigate('/checkout');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-graphite/50 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: isRTL ? '-100%' : '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: isRTL ? '-100%' : '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className={`
                            fixed top-0 bottom-0 w-full max-w-md bg-paper shadow-2xl z-50
                            ${isRTL ? 'left-0' : 'right-0'}
                        `}
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-sand">
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="w-6 h-6 text-green" />
                                    <h2 className="font-display text-2xl text-graphite">
                                        {language === 'he' ? 'הסל שלך' : 'Your Cart'}
                                    </h2>
                                </div>
                                <button
                                    onClick={closeCart}
                                    className="p-2 hover:bg-sand rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-graphite" />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {items.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <ShoppingBag className="w-16 h-16 text-sand mb-4" />
                                        <p className="text-graphite/60 text-lg mb-2">
                                            {language === 'he' ? 'הסל ריק' : 'Your cart is empty'}
                                        </p>
                                        <p className="text-graphite/40 text-sm">
                                            {language === 'he'
                                                ? 'הוסיפו מוצרים או תכניות לסל'
                                                : 'Add products or programs to your cart'}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <div
                                                key={`${item.type}-${item.id}`}
                                                className="flex gap-4 p-4 bg-sand/30 rounded-xl"
                                            >
                                                {/* Item image/icon */}
                                                <div className="w-20 h-20 bg-paper rounded-lg flex items-center justify-center overflow-hidden border border-sand">
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <span className="text-3xl">{item.icon || '📦'}</span>
                                                    )}
                                                </div>

                                                {/* Item details */}
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <h3 className="font-display text-graphite">
                                                                {item.name}
                                                            </h3>
                                                            <span className="text-xs text-graphite/50 capitalize">
                                                                {item.type === 'program'
                                                                    ? (language === 'he' ? 'תכנית' : 'Program')
                                                                    : (language === 'he' ? 'מוצר' : 'Product')
                                                                }
                                                            </span>
                                                        </div>
                                                        <button
                                                            onClick={() => removeItem(item.id, item.type)}
                                                            className="p-1 text-graphite/40 hover:text-burgundy transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        {/* Quantity controls */}
                                                        <div className="flex items-center gap-2 bg-paper rounded-lg border border-sand">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                                                                className="p-2 hover:bg-sand transition-colors rounded-s-lg"
                                                            >
                                                                <Minus className="w-3 h-3" />
                                                            </button>
                                                            <span className="w-8 text-center text-sm">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                                                                className="p-2 hover:bg-sand transition-colors rounded-e-lg"
                                                            >
                                                                <Plus className="w-3 h-3" />
                                                            </button>
                                                        </div>

                                                        {/* Price */}
                                                        <div className="font-display text-green">
                                                            ₪{item.price * item.quantity}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Clear cart */}
                                        <button
                                            onClick={clearCart}
                                            className="text-sm text-graphite/50 hover:text-burgundy transition-colors"
                                        >
                                            {language === 'he' ? 'נקה סל' : 'Clear cart'}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="border-t border-sand p-6 space-y-4">
                                    {/* Subtotal */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-graphite/70">
                                            {language === 'he' ? 'סה״כ' : 'Subtotal'}
                                        </span>
                                        <span className="font-display text-2xl text-graphite">
                                            ₪{subtotal}
                                        </span>
                                    </div>

                                    {/* Checkout button */}
                                    <Button
                                        onClick={handleCheckout}
                                        className="w-full py-4 bg-green hover:bg-green/90 flex items-center justify-center gap-2"
                                    >
                                        {language === 'he' ? 'להמשך לתשלום' : 'Proceed to Checkout'}
                                        <Arrow className="w-5 h-5" />
                                    </Button>

                                    {/* Note */}
                                    <p className="text-xs text-center text-graphite/40">
                                        {language === 'he'
                                            ? '💚 אנחנו ארגון ללא מטרות רווח'
                                            : '💚 We are a non-profit organization'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
