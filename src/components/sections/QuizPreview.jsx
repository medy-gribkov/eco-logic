import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';
import { questions } from '../../data/questions';

const QuizPreview = () => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);

    // Use first question as preview
    const question = questions[0];
    const isCorrect = selectedAnswer === question.correctId;

    const handleAnswer = (optionId) => {
        if (showResult) return;
        setSelectedAnswer(optionId);
        setTimeout(() => setShowResult(true), 300);
    };

    const resetPreview = () => {
        setSelectedAnswer(null);
        setShowResult(false);
    };

    return (
        <Section id="quiz-preview" spacing="large" className="relative overflow-hidden">
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-quiz.png)' }}
            />
            <div className="absolute inset-0 bg-paper/40 backdrop-blur-[1px]" />
            <Container size="small" className="relative z-10">
                {/* Header - Reframed as Interactive Lesson */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-6">
                        <Icon name="book" size="xs" inline />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'חוויית לימוד' : 'Learning Experience'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'נסו שיעור אינטראקטיבי' : 'Try an Interactive Lesson'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'כך אנחנו הופכים למידה למעניינת. נסו שאלה אחת ותגלו.'
                            : 'This is how we make learning engaging. Try one question and discover.'}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 md:p-12 border-2 border-sand">
                        {/* Question */}
                        <div className="text-center mb-10">
                            {question.iconSrc && (
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 bg-sand/50 rounded-2xl flex items-center justify-center">
                                        <img
                                            src={question.iconSrc}
                                            alt=""
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                            <h3 className="font-display text-2xl md:text-3xl text-graphite">
                                {question.question[language]}
                            </h3>
                        </div>

                        {/* Options */}
                        <div className="space-y-4 mb-10">
                            {question.options.map((option) => {
                                const isSelected = selectedAnswer === option.id;
                                const isCorrectOption = option.id === question.correctId;

                                let optionStyle = 'border-sand hover:border-green/50 bg-paper';
                                if (showResult) {
                                    if (isCorrectOption) {
                                        optionStyle = 'border-green bg-green/10';
                                    } else if (isSelected && !isCorrectOption) {
                                        optionStyle = 'border-magenta bg-magenta/10';
                                    }
                                } else if (isSelected) {
                                    optionStyle = 'border-sage bg-sage/10';
                                }

                                return (
                                    <motion.button
                                        key={option.id}
                                        onClick={() => handleAnswer(option.id)}
                                        disabled={showResult}
                                        whileHover={!showResult ? { scale: 1.01 } : {}}
                                        whileTap={!showResult ? { scale: 0.99 } : {}}
                                        className={`
                                            w-full p-5 rounded-xl border-2 transition-all
                                            flex items-center justify-between
                                            ${optionStyle}
                                            ${showResult ? 'cursor-default' : 'cursor-pointer'}
                                        `}
                                    >
                                        <span className="font-body text-lg text-graphite">{option.label[language]}</span>
                                        {showResult && isCorrectOption && (
                                            <Icon name="checkmark" size="md" />
                                        )}
                                        {showResult && isSelected && !isCorrectOption && (
                                            <span className="w-6 h-6 rounded-full bg-magenta flex items-center justify-center text-paper text-sm">
                                                X
                                            </span>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Result/CTA */}
                        <AnimatePresence mode="wait">
                            {showResult ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    {/* Educational insight box */}
                                    <div className={`
                                        rounded-xl p-6 mb-6
                                        ${isCorrect ? 'bg-green/10 border border-green/20' : 'bg-sand border border-sand'}
                                    `}>
                                        <div className="flex items-center justify-center gap-3 mb-3">
                                            <Icon name="lightbulb" size="md" />
                                            <span className={`font-display text-lg ${isCorrect ? 'text-green' : 'text-magenta'}`}>
                                                {isCorrect
                                                    ? (language === 'he' ? 'מצוין! זה נכון' : 'Excellent! That\'s correct')
                                                    : (language === 'he' ? 'לא בדיוק, אבל עכשיו תדעו' : 'Not quite, but now you know')}
                                            </span>
                                        </div>
                                        <p className="text-graphite/70 leading-relaxed">
                                            {question.fact[language]}
                                        </p>
                                    </div>

                                    <p className="text-sm text-graphite/50 mb-6">
                                        {language === 'he'
                                            ? 'זה מה שמיוחד בתכניות שלנו - למידה שנשארת איתכם'
                                            : "This is what's special about our programs - learning that stays with you"}
                                    </p>

                                    <div className="flex gap-4 justify-center flex-wrap">
                                        <Button variant="outline" onClick={resetPreview} className="border-graphite/30">
                                            {language === 'he' ? 'נסו שוב' : 'Try Again'}
                                        </Button>
                                        <Button onClick={() => navigate('/quiz')} className="flex items-center gap-2 bg-green hover:bg-green/90">
                                            {language === 'he' ? 'לחידון המלא' : 'Full Quiz'}
                                            <span className={isRTL ? 'rotate-180' : ''}>→</span>
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="hint"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center"
                                >
                                    <p className="text-graphite/50">
                                        {language === 'he' ? 'בחרו תשובה כדי לראות את התוצאה' : 'Select an answer to see the result'}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                </motion.div>

                {/* Teaching methodology note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center flex items-center justify-center gap-2"
                >
                    <Icon name="lightbulb" size="sm" />
                    <p className="text-sm text-graphite/50">
                        {language === 'he'
                            ? 'השיטה שלנו: שאלה - גילוי - הסבר - זכירה'
                            : 'Our method: Question - Discovery - Explanation - Retention'}
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
};

export default QuizPreview;
