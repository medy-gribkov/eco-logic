import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { useLanguage } from '../../i18n';
import { useCart } from '../../context/CartContext';
import { programs } from '../../data/programs';

const ProgramCard = ({ program, index, onSelect }) => {
    const { language, isRTL } = useLanguage();
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const tierColors = {
        free: 'border-sage/30 hover:border-sage',
        basic: 'border-green/30 hover:border-green',
        premium: 'border-burgundy ring-2 ring-burgundy/20',
        enterprise: 'border-graphite/30 hover:border-graphite',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
                relative bg-paper rounded-2xl p-6 md:p-8 border-2 transition-all duration-300
                ${tierColors[program.tier]}
                ${program.highlighted ? 'shadow-xl scale-[1.02]' : 'shadow-card hover:shadow-lg'}
            `}
        >
            {/* Popular badge */}
            {program.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-burgundy text-paper text-xs font-body uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {program.badge[language]}
                </div>
            )}

            {/* Icon & Name */}
            <div className="text-center mb-6">
                <span className="text-5xl mb-4 block">{program.icon}</span>
                <h3 className="font-display text-2xl md:text-3xl text-graphite">
                    {program.name[language]}
                </h3>
                <p className="text-graphite/60 text-sm mt-1">
                    {program.tagline[language]}
                </p>
            </div>

            {/* Price */}
            <div className="text-center mb-6 pb-6 border-b border-sand">
                {program.price === 0 ? (
                    <div className="font-display text-4xl text-green">
                        {language === 'he' ? 'חינם' : 'Free'}
                    </div>
                ) : program.price === null ? (
                    <div className="font-display text-2xl text-graphite">
                        {language === 'he' ? 'בהתאמה אישית' : 'Custom Pricing'}
                    </div>
                ) : (
                    <div className="font-display text-4xl text-graphite">
                        ₪{program.price}
                        <span className="text-base font-body text-graphite/50 ms-1">
                            {language === 'he' ? 'חד פעמי' : 'one-time'}
                        </span>
                    </div>
                )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {program.features[language].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-graphite/70">
                        <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <Button
                onClick={() => onSelect(program)}
                variant={program.highlighted ? 'primary' : 'outline'}
                className={`w-full py-3 flex items-center justify-center gap-2 ${program.highlighted
                    ? 'bg-burgundy hover:bg-burgundy/90'
                    : 'border-graphite/30 hover:bg-graphite hover:text-paper'
                    }`}
            >
                {program.cta[language]}
                <Arrow className="w-4 h-4" />
            </Button>
        </motion.div>
    );
};

const ProgramsSection = () => {
    const { language, isRTL } = useLanguage();
    const { addItem } = useCart();
    const [selectedProgram, setSelectedProgram] = useState(null);

    const handleSelect = (program) => {
        if (program.tier === 'free') {
            // Scroll to free resources
            document.getElementById('free-resources')?.scrollIntoView({ behavior: 'smooth' });
        } else if (program.tier === 'enterprise') {
            // Scroll to collaborate section
            document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Add to cart
            addItem({
                id: program.id,
                type: 'program',
                name: program.name[language],
                price: program.price,
                icon: program.icon
            });
        }
    };

    return (
        <Section id="programs" spacing="large" className="bg-gradient-to-b from-paper to-sand/20">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-2 rounded-full mb-6">
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'התכניות שלנו' : 'Our Programs'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'בחרו את המסלול שלכם' : 'Choose Your Path'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'מחומרים חינמיים ועד תכניות מקיפות - יש לנו משהו לכל אחד'
                            : 'From free materials to comprehensive programs - we have something for everyone'}
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={program.id}
                            program={program}
                            index={index}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>

                {/* Non-profit note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-sand/50 px-6 py-3 rounded-full">
                        <span className="text-xl">💚</span>
                        <p className="text-sm text-graphite/70">
                            {language === 'he'
                                ? 'אנחנו ארגון ללא מטרות רווח. כל ההכנסות חוזרות לפעילות חינוכית.'
                                : 'We are a non-profit. All proceeds go back to educational activities.'}
                        </p>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default ProgramsSection;
