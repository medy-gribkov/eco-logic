import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import SocialPost from '../ui/SocialPost';
import { useLanguage } from '../../i18n';
import { questions } from '../../data/questions';

const QuizPreview = () => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [selectedPostType, setSelectedPostType] = useState(null);

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
        <>
            <Section id="quiz-preview" spacing="large" className="relative overflow-hidden">
                {/* Background illustration */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/assets/backgrounds/bg-quiz.webp)' }}
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
                        <Card className="max-w-3xl mx-auto overflow-hidden shadow-elevated rounded-[2rem] border-0 bg-white/80 backdrop-blur-sm">
                            <div className="p-8 md:p-10 relative">
                                {/* Decorative circle */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green/10 to-transparent rounded-bl-[4rem] -z-0" />

                                {/* Question */}
                                <div className="text-center mb-8 relative z-10">
                                    {question.iconSrc && (
                                        <div className="flex justify-center mb-6">
                                            <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center transform -rotate-3">
                                                <img
                                                    src={question.iconSrc}
                                                    alt=""
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <h3 className="font-display text-2xl md:text-3xl text-graphite leading-tight">
                                        {question.question[language]}
                                    </h3>
                                </div>

                                {/* Options - 2x2 Grid for compact modern feel */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {question.options.map((option) => {
                                        const isSelected = selectedAnswer === option.id;
                                        const isCorrectOption = option.id === question.correctId;

                                        let optionStyle = 'border-sand hover:border-green/30 hover:bg-white bg-paper/50 shadow-sm';
                                        if (showResult) {
                                            if (isCorrectOption) {
                                                optionStyle = 'border-green bg-green/10 ring-1 ring-green';
                                            } else if (isSelected && !isCorrectOption) {
                                                optionStyle = 'border-magenta bg-magenta/10 opacity-70';
                                            } else {
                                                optionStyle = 'opacity-40 border-transparent';
                                            }
                                        } else if (isSelected) {
                                            optionStyle = 'border-graphite bg-graphite/5';
                                        }

                                        return (
                                            <motion.button
                                                key={option.id}
                                                onClick={() => handleAnswer(option.id)}
                                                disabled={showResult}
                                                whileHover={!showResult ? { scale: 1.02, y: -2 } : {}}
                                                whileTap={!showResult ? { scale: 0.98 } : {}}
                                                className={`
                                                w-full p-4 rounded-xl border transition-all duration-300
                                                flex items-center justify-between text-start h-full
                                                ${optionStyle}
                                                ${showResult ? 'cursor-default' : 'cursor-pointer'}
                                            `}
                                            >
                                                <span className={`font-body text-base ${showResult && isCorrectOption ? 'font-bold' : ''} text-graphite`}>
                                                    {option.label[language]}
                                                </span>
                                                {showResult && isCorrectOption && (
                                                    <div className="w-6 h-6 bg-green text-white rounded-full flex items-center justify-center shadow-sm">
                                                        <Icon name="checkmark" size="xs" className="brightness-0 invert" />
                                                    </div>
                                                )}
                                                {showResult && isSelected && !isCorrectOption && (
                                                    <span className="text-magenta font-bold">✕</span>
                                                )}
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Result/CTA Area - Integrated */}
                                <AnimatePresence mode="wait">
                                    {showResult ? (
                                        <motion.div
                                            key="result"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-sand/30 rounded-2xl p-6 border border-sand/50 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-start">
                                                <img
                                                    src="/assets/personas/persona-celebration.webp"
                                                    alt="Teacher"
                                                    className="w-24 h-24 object-contain -my-4 md:mb-0 drop-shadow-md"
                                                />
                                                <div className="flex-grow">
                                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                                        <span className={`font-display text-xl ${isCorrect ? 'text-green' : 'text-magenta'}`}>
                                                            {isCorrect
                                                                ? (language === 'he' ? 'בול! שיחקתם אותה' : 'Nailed it! Spot on.')
                                                                : (language === 'he' ? 'קרוב, הנה התשובה' : 'Close! Here\'s why.')}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-graphite/80 leading-relaxed mb-4">
                                                        {question.fact[language]}
                                                    </p>

                                                    {/* Action Buttons */}
                                                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                                        <Button
                                                            size="small"
                                                            onClick={() => navigate('/quiz', {
                                                                state: { startQuestion: 1, score: isCorrect ? 1 : 0 }
                                                            })}
                                                            className="bg-graphite text-paper hover:bg-graphite/90 text-sm px-6"
                                                        >
                                                            {language === 'he' ? 'המשך לחידון' : 'Continue Quiz'}
                                                        </Button>
                                                        {!isCorrect && (
                                                            <button
                                                                onClick={resetPreview}
                                                                className="px-4 py-2 rounded-lg text-xs font-bold text-graphite/50 hover:text-graphite uppercase tracking-wider transition-colors"
                                                            >
                                                                {language === 'he' ? 'נסו שוב' : 'Try Again'}
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="text-center py-4">
                                            <p className="text-xs font-mono text-graphite/40 uppercase tracking-widest">
                                                {language === 'he' ? 'בחרו את התשובה הנכונה' : 'Select the correct answer'}
                                            </p>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
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

            {/* Social Post Modal */}
            <Modal
                isOpen={!!selectedPostType}
                onClose={() => setSelectedPostType(null)}
                title={language === 'he' ? 'שתפו את התוכן' : 'Share this content'}
                size="large"
            >
                {selectedPostType && (
                    <div className="flex justify-center">
                        <SocialPost
                            type={selectedPostType}
                            data={{
                                savedAmount: '15,400 L',
                                equivalent: language === 'he' ? '6 חודשים של מקלחות' : '6 months of showers',
                                fact: question.fact[language]
                            }}
                            onShare={(type) => {
                                const text = `${question.fact[language]} - EcoLogic`;
                                if (navigator.share) {
                                    navigator.share({ text, url: window.location.origin });
                                } else {
                                    navigator.clipboard.writeText(text);
                                    alert(language === 'he' ? 'הועתק!' : 'Copied!');
                                }
                            }}
                        />
                    </div>
                )}
            </Modal>
        </>
    );
};

export default QuizPreview;
