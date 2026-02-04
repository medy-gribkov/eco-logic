import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StatCard = ({
    number,
    label,
    suffix = '',
    prefix = '',
    iconSrc,
    color = 'green', // green, blue, magenta
    className = ''
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const colors = {
        green: 'text-green border-green/20',
        blue: 'text-blue border-blue/20',
        magenta: 'text-magenta border-magenta/20'
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                setCount(number);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, number]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            className={`
                bg-paper/80 backdrop-blur-sm border rounded-xl p-3 md:p-8 text-center h-full
                flex flex-col items-center justify-center transition-all duration-300
                ${colors[color] || colors.green}
                ${className}
            `}
        >
            {iconSrc && (
                <div className="flex justify-center mb-2 md:mb-6">
                    <img
                        src={iconSrc}
                        alt=""
                        className="w-8 h-8 md:w-16 md:h-16 object-contain drop-shadow-sm"
                    />
                </div>
            )}
            <div className={`font-display text-3xl md:text-7xl mb-1 md:mb-2 leading-none ${colors[color]?.split(' ')[0]}`}>
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <div className="w-8 md:w-12 h-0.5 md:h-1 bg-current opacity-20 rounded-full my-1 md:my-4 mx-auto" />
            <p className="text-graphite/70 font-medium text-xs md:text-lg leading-tight px-1">{label}</p>
        </motion.div>
    );
};

export default StatCard;
