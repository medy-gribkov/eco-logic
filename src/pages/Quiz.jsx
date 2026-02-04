import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLanguage } from '../i18n';
import questions from '../data/questions';

const Quiz = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, tTemplate, language } = useLanguage();

    // Read starting question and score from navigation state
    const initialQuestion = location.state?.startQuestion || 0;
    const initialScore = location.state?.score || 0;
    const [currentQ, setCurrentQ] = useState(initialQuestion);
    const [score, setScore] = useState(initialScore);
    const [timeLeft, setTimeLeft] = useState(45);

    const question = questions[currentQ];
    const totalQuestions = questions.length;
    const progress = ((currentQ + 1) / totalQuestions) * 100;

    // Timer
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    // Reset timer on new question
    useEffect(() => {
        setTimeLeft(45);
    }, [currentQ]);

    const handleAnswer = (optionId) => {
        const isCorrect = optionId === question.correctId;
        const selectedOption = question.options.find(o => o.id === optionId);

        const newScore = isCorrect ? score + 1 : score;

        navigate('/result', {
            state: {
                isCorrect,
                fact: question.fact[language],
                data: {
                    ...selectedOption,
                    label: selectedOption.label[language]
                },
                correctData: {
                    ...question.options.find(o => o.id === question.correctId),
                    label: question.options.find(o => o.id === question.correctId).label[language]
                },
                currentQuestion: currentQ + 1,
                totalQuestions,
                score: newScore,
                questionIcon: question.iconSrc,
                source: question.source
            }
        });
    };

    return (
        <div className="min-h-screen p-4 md:p-8 flex flex-col max-w-3xl mx-auto">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <Button
                    variant="ghost"
                    onClick={() => navigate('/')}
                    className="px-0 flex items-center gap-2"
                >
                    <ArrowLeft size={20} className="flip-rtl" />
                    {t('quiz.exit')}
                </Button>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">{t('quiz.timer')}</span>
                    <span className={`font-mono font-bold ${timeLeft < 10 ? 'text-magenta' : ''}`}>
                        0:{timeLeft.toString().padStart(2, '0')}
                    </span>
                </div>
            </header>

            {/* Progress */}
            <div className="mb-2">
                <span className="font-mono text-sm text-gray">
                    {tTemplate('quiz.questionOf', { current: currentQ + 1, total: totalQuestions })}
                </span>
            </div>
            <ProgressBar value={progress} className="mb-8" />

            <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="text-center mb-12"
                    >
                        <div className="w-20 h-20 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <img src={question.iconSrc} alt="" className="w-10 h-10" />
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl leading-tight">
                            {question.question[language]}
                        </h2>
                    </motion.div>
                </AnimatePresence>

                <div className="space-y-4">
                    {question.options.map((option, idx) => (
                        <motion.div
                            key={option.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card
                                className="cursor-pointer hover:border-magenta border-2 border-transparent transition-all active:scale-95"
                                onClick={() => handleAnswer(option.id)}
                            >
                                <h3 className="text-center font-display text-2xl">
                                    {option.label[language]}
                                </h3>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center bg-gray/10 p-4 rounded text-xs font-mono">
                {t('quiz.source')}: {question.source}
            </div>
        </div>
    );
};

export default Quiz;
