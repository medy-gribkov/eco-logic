import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({
    quote,
    author,
    role,
    image,
    className = ''
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
                bg-paper border border-gray/20 rounded-xl p-6 md:p-8
                relative
                ${className}
            `}
        >
            <Quote className="w-10 h-10 text-green/20 absolute top-6 right-6 rtl:right-auto rtl:left-6" />

            <blockquote className="text-lg md:text-xl text-graphite/80 mb-6 leading-relaxed">
                "{quote}"
            </blockquote>

            <div className="flex items-center gap-4">
                {image ? (
                    <img
                        src={image}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green to-blue flex items-center justify-center text-paper font-display text-lg">
                        {author.charAt(0)}
                    </div>
                )}
                <div>
                    <p className="font-display text-lg">{author}</p>
                    {role && <p className="text-sm text-graphite/60">{role}</p>}
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
