import React from 'react';
import './StatusBadge.css';

const StatusBadge = ({ variant = 'status', type = 'success', className = '', children, ...props }) => {
  return (
    <span className={`${variant}-badge ${type} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default StatusBadge;
