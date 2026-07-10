import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  return (
    <button className={`btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
