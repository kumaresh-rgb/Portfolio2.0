import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`
        w-full px-8 py-3 bg-gradient-to-r from-primary to-primary-container 
        text-on-primary-container font-semibold rounded-full 
        hover:shadow-[0_0_30px_rgba(115,177,255,0.4)] 
        transition-all duration-300 active:scale-95 
        flex items-center justify-center gap-2
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
