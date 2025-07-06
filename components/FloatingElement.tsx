// Props for the FloatingElement component
import {FC, ReactNode, useEffect, useState} from "react";

export interface FloatingElementProps {
    delay?: number;
    children: ReactNode;
    className?: string;
}

export const FloatingElement: FC<FloatingElementProps> = ({delay = 0, children, className}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
            style={{animationDelay: `${delay}ms`}}
        >
            {children}
        </div>
    );
};
