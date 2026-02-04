import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('ecologic-cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to load cart from localStorage', e);
            }
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('ecologic-cart', JSON.stringify(items));
    }, [items]);

    const addItem = (item) => {
        setItems(prev => {
            const existingIndex = prev.findIndex(i => i.id === item.id && i.type === item.type);
            if (existingIndex >= 0) {
                // Increment quantity
                const updated = [...prev];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + 1
                };
                return updated;
            }
            return [...prev, { ...item, quantity: 1 }];
        });
        setIsOpen(true); // Open cart drawer when adding item
    };

    const removeItem = (itemId, itemType) => {
        setItems(prev => prev.filter(i => !(i.id === itemId && i.type === itemType)));
    };

    const updateQuantity = (itemId, itemType, quantity) => {
        if (quantity <= 0) {
            removeItem(itemId, itemType);
            return;
        }
        setItems(prev => prev.map(i =>
            (i.id === itemId && i.type === itemType)
                ? { ...i, quantity }
                : i
        ));
    };

    const clearCart = () => {
        setItems([]);
    };

    const toggleCart = () => {
        setIsOpen(prev => !prev);
    };

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const value = {
        items,
        itemCount,
        subtotal,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
