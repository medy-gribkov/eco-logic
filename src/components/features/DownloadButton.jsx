import React from 'react';
import { usePDF } from '@react-pdf/renderer';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';

const DownloadButton = ({ document, fileName, children, className, variant = "outline" }) => {
    const { language } = useLanguage();
    const [instance, updateInstance] = usePDF({ document });

    if (instance.loading) {
        return (
            <Button variant={variant} className={`opacity-70 cursor-wait ${className}`} disabled>
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin me-2" />
                {language === 'he' ? 'מכין...' : 'Preparing...'}
            </Button>
        );
    }

    if (instance.error) {
        console.error("PDF Generation Error:", instance.error);
        return (
            <Button variant={variant} className={`text-red-500 ${className}`} disabled>
                {language === 'he' ? 'שגיאה' : 'Error'}
            </Button>
        );
    }

    return (
        <a href={instance.url} download={fileName} className="text-decoration-none">
            <Button variant={variant} className={className}>
                <Icon name="download" size="xs" inline className={variant === 'primary' || variant === 'cta' ? "mix-blend-screen invert" : ""} />
                {children}
            </Button>
        </a>
    );
};

export default DownloadButton;
