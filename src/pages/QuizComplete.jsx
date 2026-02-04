import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, RefreshCw, Home, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useLanguage } from '../i18n';

const QuizComplete = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();

    if (!state) {
        return (
            <div className="p-8 text-center">
                <p className="mb-4">{language === 'he' ? 'משהו השתבש' : 'Something went wrong'}</p>
                <Button onClick={() => navigate('/')}>
                    {language === 'he' ? 'חזרה לדף הבית' : 'Back to Home'}
                </Button>
            </div>
        );
    }

    const { totalQuestions, score } = state;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Determine result message based on score
    const getResultMessage = () => {
        if (percentage >= 80) {
            return {
                title: language === 'he' ? 'מדהים!' : 'Amazing!',
                subtitle: language === 'he'
                    ? 'אתה מומחה סביבתי אמיתי'
                    : 'You are a true environmental expert'
            };
        } else if (percentage >= 60) {
            return {
                title: language === 'he' ? 'כל הכבוד!' : 'Well Done!',
                subtitle: language === 'he'
                    ? 'יש לך ידע סביבתי טוב'
                    : 'You have good environmental knowledge'
            };
        } else if (percentage >= 40) {
            return {
                title: language === 'he' ? 'לא רע!' : 'Not Bad!',
                subtitle: language === 'he'
                    ? 'יש עוד מה ללמוד'
                    : 'There is more to learn'
            };
        } else {
            return {
                title: language === 'he' ? 'התחלה טובה!' : 'Good Start!',
                subtitle: language === 'he'
                    ? 'נסה שוב ולמד עוד'
                    : 'Try again and learn more'
            };
        }
    };

    const result = getResultMessage();

    const handleShare = () => {
        const text = language === 'he'
            ? `השגתי ${score}/${totalQuestions} בחידון EcoLogic! בואו לבדוק את הידע הסביבתי שלכם`
            : `I scored ${score}/${totalQuestions} on the EcoLogic quiz! Test your environmental knowledge`;

        if (navigator.share) {
            navigator.share({
                title: 'EcoLogic Quiz',
                text,
                url: window.location.origin
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(text);
            alert(language === 'he' ? 'הועתק ללוח!' : 'Copied to clipboard!');
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-green/10 to-paper">
            {/* Trophy Icon */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="mb-8"
            >
                <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
                    percentage >= 60 ? 'bg-green text-white' : 'bg-blue text-white'
                }`}>
                    <Trophy className="w-16 h-16" />
                </div>
            </motion.div>

            {/* Result Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-5xl md:text-6xl mb-2 text-center"
            >
                {result.title}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-graphite/70 mb-8 text-center"
            >
                {result.subtitle}
            </motion.p>

            {/* Score Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-md mb-8"
            >
                <Card className="text-center p-8">
                    <div className="font-display text-7xl md:text-8xl mb-4 text-green">
                        {score}/{totalQuestions}
                    </div>
                    <div className="text-lg text-graphite/70">
                        {language === 'he' ? 'תשובות נכונות' : 'Correct Answers'}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 h-4 bg-gray/20 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className={`h-full rounded-full ${
                                percentage >= 60 ? 'bg-green' : 'bg-blue'
                            }`}
                        />
                    </div>
                    <div className="mt-2 font-mono text-sm text-graphite/50">
                        {percentage}%
                    </div>
                </Card>
            </motion.div>

            {/* Impact Message */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center mb-12 max-w-md"
            >
                <p className="text-graphite/70">
                    {language === 'he'
                        ? 'כל שאלה שענית נכון מראה שאתה מבין את ההשפעה הבלתי נראית של הבחירות היומיות שלנו.'
                        : 'Every question you answered correctly shows you understand the invisible impact of our daily choices.'}
                </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            >
                <Button
                    variant="primary"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => navigate('/quiz', { state: { startQuestion: 0, score: 0 } })}
                >
                    <RefreshCw className="w-5 h-5" />
                    {language === 'he' ? 'שחק שוב' : 'Play Again'}
                </Button>

                <Button
                    variant="secondary"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={handleShare}
                >
                    <Share2 className="w-5 h-5" />
                    {language === 'he' ? 'שתף תוצאות' : 'Share Results'}
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6"
            >
                <Button
                    variant="ghost"
                    className="flex items-center gap-2"
                    onClick={() => navigate('/')}
                >
                    <Home className="w-5 h-5" />
                    {language === 'he' ? 'חזרה לדף הבית' : 'Back to Home'}
                </Button>
            </motion.div>
        </div>
    );
};

export default QuizComplete;
