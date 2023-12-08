// components/CircularProgress.tsx
import React from 'react';

interface CircularProgressProps {
    size?: string;
    strokeWidth?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    size = '24',
    strokeWidth = '4',
}) => {
    return (
        <svg
            className={`animate-spin h-${size} w-${size} text-indigo-600`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <circle
                className={`opacity-25`}
                cx="12"
                cy="12"
                r="10"
                stroke-width={strokeWidth}
            ></circle>
            <path
                className={`opacity-75`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width={strokeWidth}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
        </svg>
    );
};

export default CircularProgress;
