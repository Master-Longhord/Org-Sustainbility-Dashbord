import React from 'react';

// Add `className` to the component's props
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => (
    // We removed the hardcoded `max-w-lg` and now combine the default classes
    // with any custom className that is passed in.
    <div className={`bg-white p-8 rounded-lg shadow-md w-full ${className}`}>
        {children}
    </div>
);

export default Card;