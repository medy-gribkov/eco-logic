import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when an element is in the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {[React.RefObject, boolean]} - Ref to attach and isInView state
 */
const useInView = ({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
} = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // If triggerOnce and already triggered, don't observe
        if (triggerOnce && hasTriggered) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting;

                if (inView) {
                    setIsInView(true);
                    if (triggerOnce) {
                        setHasTriggered(true);
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce, hasTriggered]);

    return [ref, isInView];
};

export default useInView;
