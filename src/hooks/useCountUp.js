import { useState, useEffect } from 'react';

/**
 * Hook to animate a number counting up
 * @param {number} end - Target number
 * @param {Object} options - Animation options
 * @param {number} options.duration - Animation duration in ms
 * @param {boolean} options.start - Whether to start the animation
 * @param {string} options.easing - Easing function name
 * @returns {number} - Current animated value
 */
const useCountUp = (end, {
    duration = 2000,
    start = true,
    easing = 'easeOut',
    decimals = 0
} = {}) => {
    const [count, setCount] = useState(0);

    // Easing functions
    const easings = {
        linear: t => t,
        easeOut: t => 1 - Math.pow(1 - t, 3),
        easeIn: t => t * t * t,
        easeInOut: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    };

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }

        let startTime = null;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easingFn = easings[easing] || easings.easeOut;
            const easedProgress = easingFn(progress);

            const currentValue = easedProgress * end;
            setCount(decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, start, easing, decimals]);

    return count;
};

export default useCountUp;
