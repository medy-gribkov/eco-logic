import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight as Arrow, Volume2, VolumeX, Pause, Play } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';

const HeroSection = () => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-start overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 bg-sand/20">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    poster="/assets/backgrounds/bg-hero.webp"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ objectFit: 'cover' }}
                >
                    <source src="/assets/videos/hero-loop.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Soft gradient overlay for text readability - reduced opacity */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-paper/60 via-paper/20 to-paper/60" />

            {/* Decorative floating elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
                <motion.div
                    className="absolute top-[15%] right-[10%] w-24 h-24 bg-sage/20 rounded-full blur-2xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-[5%] w-32 h-32 bg-green/10 rounded-full blur-2xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute top-[30%] left-[15%] w-20 h-20 bg-magenta/10 rounded-full blur-2xl"
                    animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                />
            </div>

            <Container className="relative z-10 pt-16 md:pt-20 pb-12">
                <div className="max-w-4xl mx-auto text-center py-0">
                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 sm:mb-16 leading-tight text-graphite"
                    >
                        {language === 'he'
                            ? 'לשמור על העתיד דרך חינוך'
                            : 'Preserving the future through education'}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-graphite/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                    >
                        {language === 'he'
                            ? 'משאבים חינוכיים חינמיים, סדנאות וחומרי לימוד לכל מי שרוצה ללמד ולהפיץ מודעות סביבתית'
                            : 'Free educational resources, workshops, and learning materials for anyone who wants to teach and spread environmental awareness'}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            variant="primary"
                            onClick={() => scrollToSection('programs')}
                            className="px-8 py-4 text-lg flex items-center justify-center gap-2 bg-green hover:bg-green/90 shadow-lg hover:shadow-xl transition-all"
                        >
                            {language === 'he' ? 'גלו את התכניות' : 'Explore Programs'}
                            <Arrow className="w-5 h-5 ms-2" />
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => scrollToSection('free-resources')}
                            className="px-8 py-4 text-lg border-2 border-graphite text-graphite hover:bg-graphite hover:text-paper flex items-center justify-center gap-2 font-bold"
                        >
                            <Icon name="download" size="xs" inline />
                            {language === 'he' ? 'משאבים חינם' : 'Free Resources'}
                        </Button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-graphite/60"
                    >
                        <div className="flex items-center gap-2">
                            <Icon name="checkmark" size="xs" inline />
                            <span>{language === 'he' ? 'ארגון ללא מטרות רווח' : 'Non-profit organization'}</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-graphite/20" />
                        <div className="flex items-center gap-2">
                            <Icon name="recycle" size="xs" inline />
                            <span>{language === 'he' ? 'חומרים ממוחזרים בלבד' : '100% recycled materials'}</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-graphite/20" />
                        <div className="flex items-center gap-2">
                            <Icon name="heart" size="xs" inline />
                            <span>{language === 'he' ? 'פתוח לכל הגילאים' : 'Open to all ages'}</span>
                        </div>
                    </motion.div>
                </div>
            </Container>

            {/* Video Controls - Bottom Corners */}
            <div className="absolute bottom-8 left-8 z-30">
                <button
                    onClick={togglePlay}
                    className="p-3 bg-paper/20 hover:bg-paper/40 backdrop-blur-md rounded-full text-graphite transition-all border border-graphite/10"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
            </div>

            <div className="absolute bottom-8 right-8 z-30">
                <button
                    onClick={toggleMute}
                    className="p-3 bg-paper/20 hover:bg-paper/40 backdrop-blur-md rounded-full text-graphite transition-all border border-graphite/10"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
                <div
                    className="w-6 h-10 border-2 border-graphite/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 bg-magenta/60 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
