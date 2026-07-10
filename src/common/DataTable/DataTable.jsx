import React from 'react';
import './DataTable.css';

const DataTable = ({ variant = 'performance', className = '', children, ...props }) => {
  return (
    <table className={`${variant}-table ${className}`} {...props}>
      {children}
    </table>
  );
};

export default DataTable;
