/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useCallback } from 'react';
import { RiCheckLine, RiErrorWarningLine, RiCloseLine } from 'react-icons/ri';
import './Toast.css';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const Toast = ({ id, message, type, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <div className="toast-icon">
        {type === 'success' ? <RiCheckLine /> : <RiErrorWarningLine />}
      </div>
      <div className="toast-content">{message}</div>
      <button className="toast-close" onClick={() => onClose(id)}>
        <RiCloseLine size={16} />
      </button>
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast 
            key={toast.id} 
            id={toast.id} 
            message={toast.message} 
            type={toast.type} 
            onClose={removeToast} 
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default Toast;
