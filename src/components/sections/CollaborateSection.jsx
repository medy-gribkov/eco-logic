import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Mail, Users, Heart, Mic } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { useLanguage } from '../../i18n';
import { collaborationOptions } from '../../data/programs';

const CollaborationCard = ({ option, index }) => {
    const { language, isRTL } = useLanguage();
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const iconMap = {
        '🎤': <Mic className="w-6 h-6" />,
        '📝': <Mail className="w-6 h-6" />,
        '🌟': <Users className="w-6 h-6" />,
        '💚': <Heart className="w-6 h-6" />,
    };

    const colorClasses = [
        'bg-green/10 text-green hover:bg-green hover:text-paper',
        'bg-sage/20 text-green hover:bg-sage hover:text-paper',
        'bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-paper',
        'bg-sand text-graphite hover:bg-graphite hover:text-paper',
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div className={`
                relative p-6 rounded-2xl transition-all duration-300 cursor-pointer
                ${colorClasses[index]}
            `}>
                {/* Icon */}
                <div className="w-14 h-14 bg-paper/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-paper/30 transition-colors">
                    {iconMap[option.icon] || <span className="text-2xl">{option.icon}</span>}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl mb-2">
                    {option.title[language]}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                    {option.description[language]}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-sm font-body">
                    <span>{language === 'he' ? 'למידע נוסף' : 'Learn more'}</span>
                    <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

const CollaborateSection = () => {
    const { language, isRTL } = useLanguage();

    return (
        <Section id="collaborate" spacing="large" className="bg-gradient-to-b from-sand/30 via-paper to-paper">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-sage/20 text-green px-4 py-2 rounded-full mb-6">
                        <Users className="w-4 h-4" />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'ביחד אנחנו חזקים' : 'Together We Are Stronger'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'בואו לעשות את זה ביחד' : "Let's Do This Together"}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'יש הרבה דרכים לשתף פעולה. מצאו את זו שמתאימה לכם.'
                            : 'There are many ways to collaborate. Find the one that fits you.'}
                    </p>
                </motion.div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collaborationOptions.map((option, index) => (
                        <CollaborationCard key={option.id} option={option} index={index} />
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-green/5 via-sand/50 to-burgundy/5 rounded-3xl p-8 md:p-12">
                        <h3 className="font-display text-2xl md:text-3xl mb-4 text-graphite">
                            {language === 'he' ? 'יש לכם רעיון אחר?' : 'Have another idea?'}
                        </h3>
                        <p className="text-graphite/70 mb-6 max-w-lg mx-auto">
                            {language === 'he'
                                ? 'אנחנו תמיד פתוחים לשיתופי פעולה יצירתיים. ספרו לנו מה יש לכם בראש.'
                                : "We're always open to creative collaborations. Tell us what you have in mind."}
                        </p>
                        <Button
                            variant="primary"
                            className="bg-graphite hover:bg-graphite/90 px-8 py-3"
                        >
                            <Mail className="w-4 h-4 me-2" />
                            {language === 'he' ? 'צרו קשר' : 'Get in Touch'}
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default CollaborateSection;
