import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import TestimonialCard from '../ui/TestimonialCard';
import { useLanguage } from '../../i18n';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
    const { t, language, isRTL } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <Section spacing="large">
            <Container size="small">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-4xl md:text-5xl mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-xl text-graphite/70">
                        {t('testimonials.subtitle')}
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={isRTL ? nextTestimonial : prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 bg-paper rounded-full shadow-lg hover:bg-gray/10 transition-colors"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={isRTL ? prevTestimonial : nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 bg-paper rounded-full shadow-lg hover:bg-gray/10 transition-colors"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Testimonial Card */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TestimonialCard
                                    quote={current.quote[language]}
                                    author={current.author[language]}
                                    role={current.role[language]}
                                    image={current.image}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-green' : 'bg-gray/30'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default TestimonialsSection;
