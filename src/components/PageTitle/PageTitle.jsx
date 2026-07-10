import React from 'react';
import './PageTitle.css';

const PageTitle = ({ variant = 'dashboard', className = '', children, ...props }) => {
  return (
    <div className={`${variant === 'dashboard' ? 'dashboard-header' : variant === 'audit' ? 'audit-header' : 'settings-header'} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default PageTitle;
