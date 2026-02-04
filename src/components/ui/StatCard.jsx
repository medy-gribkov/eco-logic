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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
                bg-paper border-2 rounded-xl p-8 text-center
                ${colors[color] || colors.green}
                ${className}
            `}
        >
            {iconSrc && (
                <div className="flex justify-center mb-4">
                    <img
                        src={iconSrc}
                        alt=""
                        className="w-12 h-12 object-contain"
                    />
                </div>
            )}
            <div className={`font-display text-5xl md:text-6xl mb-3 ${colors[color]?.split(' ')[0]}`}>
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <p className="text-graphite/70 font-medium">{label}</p>
        </motion.div>
    );
};

export default StatCard;
