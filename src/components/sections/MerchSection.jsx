import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag, Recycle, Leaf } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { useLanguage } from '../../i18n';
import { useCart } from '../../context/CartContext';
import { products, getFeaturedProducts } from '../../data/products';

const ProductCard = ({ product, index, isActive, onAddToCart }) => {
    const { language, isRTL } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`
                relative flex-shrink-0 w-64 md:w-72
                bg-paper rounded-2xl overflow-hidden
                border transition-all duration-300
                ${isActive ? 'border-green/50 shadow-lg' : 'border-sand shadow-card hover:shadow-lg'}
            `}
        >
            {/* Product Image */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-sand/50 to-sage/10">
                <motion.img
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-cover"
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                />

                {/* Hover overlay */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/30 to-transparent flex items-end justify-center pb-4"
                        >
                            <Button
                                variant="primary"
                                onClick={() => onAddToCart(product)}
                                className="flex items-center gap-2 text-sm px-5 py-2 bg-green hover:bg-green/90"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                {language === 'he' ? 'הוסף לסל' : 'Add to Cart'}
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Recycled badge */}
                <div className="absolute top-3 left-3 bg-paper/90 backdrop-blur-sm text-green text-xs font-body px-2 py-1 rounded-full flex items-center gap-1">
                    <Recycle className="w-3 h-3" />
                    {language === 'he' ? 'ממוחזר' : 'Recycled'}
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                <h3 className="font-display text-lg mb-1 text-graphite">
                    {product.name[language]}
                </h3>
                <p className="text-sm text-graphite/50 mb-3 line-clamp-2">
                    {product.description[language]}
                </p>

                {/* Price and colors */}
                <div className="flex items-center justify-between">
                    <div className="font-display text-xl text-green">
                        ₪{product.price}
                    </div>

                    {product.colors && (
                        <div className="flex gap-1">
                            {product.colors.slice(0, 3).map((color, i) => (
                                <div
                                    key={i}
                                    className={`w-4 h-4 rounded-full border border-sand ${color === 'white' ? 'bg-white' :
                                        color === 'green' ? 'bg-green' :
                                            color === 'black' ? 'bg-graphite' :
                                                color === 'natural' ? 'bg-amber-100' :
                                                    color === 'silver' ? 'bg-gray-300' :
                                                        'bg-sage'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const MerchSection = () => {
    const { language, isRTL } = useLanguage();
    const { addItem } = useCart();
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const allProducts = products;

    const handleAddToCart = (product) => {
        addItem({
            id: product.id,
            type: 'product',
            name: product.name[language],
            price: product.price,
            image: product.image
        });
    };

    // Check scroll position
    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

            // Card width (288px) + gap (20px) = 308px
            const itemWidth = 308;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setActiveIndex(Math.min(newIndex, allProducts.length - 1));
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkScroll);
            const timer = setTimeout(checkScroll, 100);
            return () => {
                carousel.removeEventListener('scroll', checkScroll);
                clearTimeout(timer);
            };
        }
    }, [allProducts.length]);

    const scroll = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Card width (288px) + gap (20px) = 308px
        const scrollAmount = 308;
        const delta = direction === 'left' ? -scrollAmount : scrollAmount;

        carousel.scrollBy({
            left: delta,
            behavior: 'smooth'
        });

        setTimeout(checkScroll, 350);
    };

    return (
        <Section id="merch" spacing="default" className="relative overflow-hidden">
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-40"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-about.png)' }}
            />


            <Container className="relative z-10">
                {/* Section Header - Subtle, not pushy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 bg-sand/50 text-graphite/70 px-4 py-2 rounded-full mb-4">
                        <Leaf className="w-4 h-4 text-green" />
                        <span className="font-body text-sm">
                            {language === 'he' ? 'כל המוצרים שלנו ממוחזרים' : 'All our products are recycled'}
                        </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl mb-3 text-graphite">
                        {language === 'he' ? 'ליבשו את המסר' : 'Wear the Message'}
                    </h2>
                    <p className="text-graphite/60 max-w-xl mx-auto">
                        {language === 'he'
                            ? 'מוצרים מ-100% חומרים ממוחזרים. כל הרווחים חוזרים לפעילות חינוכית.'
                            : '100% recycled materials. All profits go back to educational activities.'}
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`
                            absolute top-1/2 -translate-y-1/2 z-10
                            ${isRTL ? 'right-0 md:-right-2' : 'left-0 md:-left-2'}
                            w-10 h-10 bg-paper rounded-full shadow-md
                            flex items-center justify-center
                            hover:bg-sand transition-all
                            border border-sand
                            ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
                        `}
                    >
                        {isRTL ? <ChevronRight className="w-5 h-5 text-graphite" /> : <ChevronLeft className="w-5 h-5 text-graphite" />}
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`
                            absolute top-1/2 -translate-y-1/2 z-10
                            ${isRTL ? 'left-0 md:-left-2' : 'right-0 md:-right-2'}
                            w-10 h-10 bg-paper rounded-full shadow-md
                            flex items-center justify-center
                            hover:bg-sand transition-all
                            border border-sand
                            ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
                        `}
                    >
                        {isRTL ? <ChevronLeft className="w-5 h-5 text-graphite" /> : <ChevronRight className="w-5 h-5 text-graphite" />}
                    </button>

                    {/* Products Carousel */}
                    <div
                        ref={carouselRef}
                        className="flex gap-5 overflow-x-auto pb-4 px-2 -mx-2 scrollbar-hide"
                    >
                        {allProducts.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                                isActive={index === activeIndex}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center gap-2 mt-6">
                        {allProducts.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (carouselRef.current) {
                                        // Card width (288px) + gap (20px) = 308px
                                        carouselRef.current.scrollTo({
                                            left: index * 308,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className={`
                                    w-2 h-2 rounded-full transition-all duration-300
                                    ${index === activeIndex
                                        ? 'w-6 bg-green'
                                        : 'bg-sand hover:bg-gray'
                                    }
                                `}
                            />
                        ))}
                    </div>
                </div>

                {/* Note about included merch */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-graphite/40">
                        {language === 'he'
                            ? '💡 מוצרים נבחרים כלולים בחינם בחבילת "עץ" שלנו'
                            : '💡 Selected products included free in our "Tree" package'}
                    </p>
                </motion.div>
            </Container >
        </Section >
    );
};

export default MerchSection;
