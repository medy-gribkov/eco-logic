import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';

const NewsletterSection = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <Section background="dark" spacing="default">
            <Container size="small">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="font-display text-3xl md:text-4xl mb-3">
                        {t('newsletter.title')}
                    </h2>
                    <p className="text-paper/70 mb-8">
                        {t('newsletter.subtitle')}
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            placeholder={t('newsletter.placeholder')}
                            disabled={status === 'loading' || status === 'success'}
                            className="flex-1 bg-paper/10 border-paper/20 text-paper placeholder:text-paper/50"
                        />
                        <Button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="flex items-center justify-center gap-2 px-6"
                        >
                            {status === 'success' ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    {t('newsletter.success')}
                                </>
                            ) : status === 'loading' ? (
                                <span className="flex items-center gap-2">
                                    <img src="/assets/personas/persona-thinking.webp" alt="" className="w-6 h-6 animate-pulse" />
                                    {t('newsletter.sending')}
                                </span>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    {t('newsletter.button')}
                                </>
                            )}
                        </Button>
                    </form>

                    <p className="text-xs text-paper/40 mt-4">
                        {t('newsletter.privacy')}
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
};

export default NewsletterSection;
