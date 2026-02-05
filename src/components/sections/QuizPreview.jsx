import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import SocialPost from '../ui/SocialPost';
import { useLanguage } from '../../i18n';
import { questions } from '../../data/questions';

const QuizPreview = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [viewState, setViewState] = useState('thinking'); // 'thinking', 'correct', 'incorrect'
    const resultRef = useRef(null);
    const [socialPlatform, setSocialPlatform] = useState(null); // 'instagram', 'facebook', 'whatsapp'

    // Use first question as preview
    const question = questions[0];

    const handleAnswer = (optionId) => {
        if (viewState !== 'thinking') return;

        setSelectedAnswer(optionId);
        const isCorrect = optionId === question.correctId;

        // Small delay for "processing" feel
        setTimeout(() => {
            setViewState(isCorrect ? 'correct' : 'incorrect');

            // Auto scroll to result if correct
            if (isCorrect && resultRef.current) {
                setTimeout(() => {
                    resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        }, 400);
    };

    const resetPreview = () => {
        setSelectedAnswer(null);
        setViewState('thinking');
        setSocialPlatform(null);
    };

    const handleShare = (platform) => {
        const text = `${question.fact[language]} - EcoLogic`;
        const url = window.location.origin;

        if (platform === 'whatsapp') {
            window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        } else {
            // For Instagram/Facebook, we show the preview first
            setSocialPlatform(platform);
        }
    };

    // Dynamic Persona Image based on state
    const getPersonaImage = () => {
        switch (viewState) {
            case 'correct': return '/assets/personas/quiz-success.png';
            case 'incorrect': return '/assets/personas/quiz-pointing.png';
            default: return '/assets/personas/quiz-thinking.png';
        }
    };

    return (
        <Section id="quiz-preview" spacing="large" className="relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-quiz.webp)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-paper/80 to-paper/40 backdrop-blur-[2px]" />

            <Container size="small" className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="font-display text-4xl text-graphite mb-2">
                        {language === 'he' ? 'בחנו את עצמכם' : 'Test Your Knowledge'}
                    </h2>
                    <p className="text-lg text-graphite/60 max-w-xl mx-auto">
                        {language === 'he'
                            ? 'שאלה אחת קצרה שתגרום לכם לחשוב מחדש על בזבוז מים.'
                            : 'One quick question that will make you rethink water waste.'}
                    </p>
                </motion.div>

                {/* Main Interactive Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="max-w-4xl mx-auto overflow-visible shadow-elevated rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md relative">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center">

                            {/* Left Column: Persona (Dynamic) */}
                            <div className="md:col-span-4 relative h-64 md:h-full min-h-[300px] md:min-h-[400px] flex items-end justify-center order-2 md:order-1 px-4">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={viewState}
                                        src={getPersonaImage()}
                                        alt="Persona"
                                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full max-w-[280px] object-contain drop-shadow-2xl relative z-20 -mb-8 md:-mb-12 origin-bottom"
                                    />
                                </AnimatePresence>

                                {/* Background Circle for Persona */}
                                <div className={`
                                    absolute bottom-0 w-64 h-64 rounded-full blur-3xl opacity-30 z-10 transition-colors duration-500
                                    ${viewState === 'correct' ? 'bg-green' : viewState === 'incorrect' ? 'bg-magenta' : 'bg-sand'}
                                `} />
                            </div>

                            {/* Right Column: Quiz Content */}
                            <div className="md:col-span-8 p-6 md:p-8 md:ps-0 order-1 md:order-2">
                                <div className="bg-white/50 rounded-2xl p-6 border border-white shadow-sm">
                                    {/* Icon & Question */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-graphite">
                                            <Icon name="lightbulb" size="md" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl text-graphite leading-tight mb-2">
                                                {question.question[language]}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {question.options.map((option) => {
                                            const isSelected = selectedAnswer === option.id;
                                            const isCorrectOption = option.id === question.correctId;

                                            // Determine visual state
                                            let stateClasses = "hover:bg-sand/30 border-sand"; // Default
                                            if (viewState !== 'thinking') {
                                                if (isCorrectOption) stateClasses = "bg-green/10 border-green text-green font-bold ring-1 ring-green";
                                                else if (isSelected) stateClasses = "bg-magenta/10 border-magenta text-magenta opacity-70";
                                                else stateClasses = "opacity-40 border-transparent grayscale";
                                            } else if (isSelected) {
                                                stateClasses = "bg-graphite/5 border-graphite";
                                            }

                                            return (
                                                <button
                                                    key={option.id}
                                                    onClick={() => handleAnswer(option.id)}
                                                    disabled={viewState !== 'thinking'}
                                                    className={`
                                                        w-full text-start p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center group
                                                        ${stateClasses}
                                                    `}
                                                >
                                                    <span className="text-base">{option.label[language]}</span>
                                                    {viewState === 'correct' && isCorrectOption && (
                                                        <Icon name="checkmark" size="sm" className="text-green" />
                                                    )}
                                                    {viewState === 'thinking' && (
                                                        <div className="w-4 h-4 rounded-full border-2 border-sand group-hover:border-graphite/50 transition-colors" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Feedback / Result Section */}
                                    <AnimatePresence>
                                        {viewState !== 'thinking' && (
                                            <motion.div
                                                ref={resultRef}
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                                className="overflow-hidden border-t border-sand/30 pt-4"
                                            >
                                                <h4 className={`font-display text-xl mb-2 ${viewState === 'correct' ? 'text-green' : 'text-magenta'}`}>
                                                    {viewState === 'correct'
                                                        ? (language === 'he' ? 'צדקתם! 🌱' : 'Correct! 🌱')
                                                        : (language === 'he' ? 'לא בדיוק... 🤔' : 'Not quite... 🤔')}
                                                </h4>
                                                <p className="text-graphite/80 leading-relaxed mb-6">
                                                    {question.fact[language]}
                                                </p>

                                                {/* Smart Actions based on result */}
                                                {/* Smart Actions based on result */}
                                                <div className="flex flex-col gap-4">
                                                    {viewState === 'correct' ? (
                                                        <>
                                                            <div>
                                                                <p className="text-xs text-graphite/50 mb-2 uppercase tracking-wide font-bold">
                                                                    {language === 'he' ? 'שתפו את התוצאה' : 'Share Result'}
                                                                </p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    <Button
                                                                        size="small"
                                                                        onClick={() => handleShare('whatsapp')}
                                                                        className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none flex-grow justify-center"
                                                                    >
                                                                        <Icon name="message-circle" size="xs" className="me-2 brightness-0 invert" inline />
                                                                        WhatsApp
                                                                    </Button>
                                                                    <Button
                                                                        size="small"
                                                                        onClick={() => handleShare('instagram')}
                                                                        className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white border-none flex-grow justify-center"
                                                                    >
                                                                        <Icon name="instagram" size="xs" className="me-2 brightness-0 invert" inline />
                                                                        Instagram
                                                                    </Button>
                                                                    <Button
                                                                        size="small"
                                                                        onClick={() => handleShare('facebook')}
                                                                        className="bg-[#1877F2] text-white border-none flex-grow justify-center"
                                                                    >
                                                                        <Icon name="facebook" size="xs" className="me-2 brightness-0 invert" inline />
                                                                        Facebook
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                            <div className="pt-2 border-t border-sand/30 flex justify-end">
                                                                <Button
                                                                    variant="outline"
                                                                    onClick={() => navigate('/quiz')}
                                                                    className="w-full md:w-auto"
                                                                >
                                                                    {language === 'he' ? 'המשך לחידון המלא' : 'Continue to Full Quiz'}
                                                                    <Icon name="arrow-right" size="xs" className={language === 'he' ? 'rotate-180 me-2' : 'ms-2'} inline />
                                                                </Button>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="flex justify-start">
                                                            <Button
                                                                variant="primary"
                                                                onClick={resetPreview}
                                                                className="bg-magenta hover:bg-magenta/90 text-white border-none"
                                                            >
                                                                <Icon name="refresh" size="xs" className="me-2 brightness-0 invert" inline />
                                                                {language === 'he' ? 'נסו שוב' : 'Try Again'}
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Social Post Preview Area */}
                                                <AnimatePresence>
                                                    {socialPlatform && (
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="mt-6 p-4 bg-sand/10 rounded-xl border border-sand/30"
                                                        >
                                                            <div className="flex justify-between items-center mb-4">
                                                                <span className="text-sm font-bold text-graphite">
                                                                    {language === 'he' ? 'תצוגה מקדימה' : 'Preview Post'}
                                                                </span>
                                                                <button onClick={() => setSocialPlatform(null)} className="text-xs text-magenta hover:underline">
                                                                    {language === 'he' ? 'ביטול' : 'Cancel'}
                                                                </button>
                                                            </div>
                                                            <SocialPost
                                                                type={socialPlatform}
                                                                data={{
                                                                    savedAmount: "15,400L",
                                                                    equivalent: language === 'he' ? "6 חודשים של מקלחות!" : "6 months of showers!",
                                                                    fact: question.fact[language]
                                                                }}
                                                                onShare={(platform) => {
                                                                    alert(language === 'he' ? `שותף ב-${platform}!` : `Shared on ${platform}!`);
                                                                    setSocialPlatform(null);
                                                                }}
                                                            />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </Container>
        </Section>
    );
};

export default QuizPreview;
