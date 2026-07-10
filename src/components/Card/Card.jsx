import React from 'react';
import './Card.css';

const Card = ({ variant = 'stat', className = '', children, ...props }) => {
  return (
    <div className={`${variant}-card ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
