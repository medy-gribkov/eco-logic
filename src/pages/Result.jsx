import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SocialPost from '../components/ui/SocialPost';
import { useLanguage } from '../i18n';

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [points, setPoints] = useState(0);

    // Initial load animation for points
    React.useEffect(() => {
        if (state?.isCorrect) {
            const timer = setTimeout(() => setPoints(25), 500);
            return () => clearTimeout(timer);
        }
    }, [state]);

    if (!state) {
        return (
            <div className="p-8 text-center">
                <p className="mb-4">{t('errors.somethingWrong')}</p>
                <Button onClick={() => navigate('/')}>{t('notFound.backHome')}</Button>
            </div>
        );
    }

    const { isCorrect, fact, correctData, currentQuestion, totalQuestions, score, questionIcon, source } = state;

    // Determine saved amount based on correct answer (for water questions)
    const savedAmount = correctData?.value ? `${correctData.value.toLocaleString()} L` : '15,400 L';
    const equivalent = '6 months of showers';

    return (
        <div className={`min-h-screen p-4 md:p-8 flex flex-col items-center ${isCorrect ? 'bg-green/10' : 'bg-magenta/10'}`}>
            {/* Result Icon */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mb-8 mt-8"
            >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl border-4 ${isCorrect ? 'border-green bg-green text-white' : 'border-magenta bg-magenta text-white'}`}>
                    {isCorrect ? '✓' : '✗'}
                </div>
            </motion.div>

            {/* Result Title */}
            <h1 className="font-display text-5xl md:text-6xl mb-4 text-center">
                {isCorrect ? t('result.correct') : t('result.incorrect')}
            </h1>

            {/* Question Progress */}
            {currentQuestion && totalQuestions && (
                <p className="font-mono text-sm text-gray mb-6">
                    {currentQuestion} / {totalQuestions}
                </p>
            )}

            {/* Fact Card */}
            <Card className="max-w-md w-full mb-8 border-l-4 border-graphite">
                {questionIcon && (
                    <div className="w-12 h-12 mb-4">
                        <img src={questionIcon} alt="" className="w-full h-full" />
                    </div>
                )}
                <p className="font-body text-lg leading-relaxed mb-4">
                    {fact}
                </p>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                    {t('result.didYouKnow')}
                </div>
                {source && (
                    <div className="font-mono text-xs text-gray-400 mt-2">
                        {source}
                    </div>
                )}
            </Card>

            {/* Points Earned */}
            {isCorrect && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="font-display text-2xl text-magenta mb-2">
                        {t('result.pointsEarned')}
                    </div>
                    <div className="font-display text-8xl">{points}</div>
                </motion.div>
            )}

            {/* Social Share Section */}
            <div className="w-full max-w-4xl mb-24">
                <h2 className="font-display text-2xl mb-6 text-center">
                    {t('result.shareTitle')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SocialPost
                        type="story"
                        data={{ savedAmount, equivalent, fact }}
                        onShare={(type) => {
                            // In a real app, this would open share dialogs
                            const text = `${fact} - EcoLogic`;
                            if (navigator.share) {
                                navigator.share({ text, url: window.location.origin });
                            } else {
                                alert(`${t('result.share')} ${type}!`);
                            }
                        }}
                    />
                    <SocialPost
                        type="feed"
                        data={{ savedAmount, equivalent, fact }}
                        onShare={(type) => {
                            const text = `${fact} - EcoLogic`;
                            if (navigator.share) {
                                navigator.share({ text, url: window.location.origin });
                            } else {
                                alert(`${t('result.share')} ${type}!`);
                            }
                        }}
                    />
                    <SocialPost
                        type="twitter"
                        data={{ savedAmount, equivalent, fact }}
                        onShare={(type) => {
                            const text = encodeURIComponent(`${fact} - EcoLogic`);
                            window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
                        }}
                    />
                </div>
            </div>

            {/* Next Challenge Button */}
            <div className="fixed bottom-8 w-full max-w-md px-4">
                <Button
                    className="w-full shadow-elevated"
                    onClick={() => {
                        if (currentQuestion >= totalQuestions) {
                            // Quiz complete - go to summary
                            navigate('/quiz-complete', {
                                state: { totalQuestions, score }
                            });
                        } else {
                            // Next question - pass score to continue tracking
                            navigate('/quiz', { state: { startQuestion: currentQuestion, score } });
                        }
                    }}
                >
                    {currentQuestion >= totalQuestions
                        ? (t('result.seeResults') || 'See Results')
                        : t('result.nextChallenge')
                    }
                </Button>
            </div>
        </div>
    );
};

export default Result;
