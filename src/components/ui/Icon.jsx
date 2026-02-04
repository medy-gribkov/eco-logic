import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

const Icon = ({ name, className = '', fallback = 'HelpCircle', ...props }) => {
    const [svgContent, setSvgContent] = useState(null);

    // Helper to convert kebab-case to PascalCase for Lucide lookup
    const toPascalCase = (str) =>
        str.match(/[a-z0-9]+/gi)
            ?.map(w => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase())
            .join('') || '';

    const lucideName = toPascalCase(name || '');
    // Use provided fallback, or try to find one by name, or default to HelpCircle
    const LucideFallback = LucideIcons[fallback] || LucideIcons[lucideName] || LucideIcons.HelpCircle;

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const response = await fetch(`/assets/icons/${name}.svg`);
                if (response.ok) {
                    const text = await response.text();
                    setSvgContent(text);
                }
            } catch (e) {
                // Silent fail, use fallback
            }
        };

        // Only try to fetch if it looks like there might be a custom asset (checking if NOT a standard lucide name could be hard, so we just try)
        if (name) loadIcon();
    }, [name]);

    if (svgContent) {
        return (
            <span
                className={`inline-block align-middle [&>svg]:w-full [&>svg]:h-full ${className}`}
                dangerouslySetInnerHTML={{ __html: svgContent }}
                {...props}
            />
        );
    }

    return <LucideFallback className={className} {...props} />;
};

export default Icon;
