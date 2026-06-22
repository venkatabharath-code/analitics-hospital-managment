import { useState } from 'react';
import { settingsService } from '../services/settingsService';
import { useToast } from '../context/ToastContext';
import { RiCheckLine } from 'react-icons/ri';
import './SystemSettings.css';
const SystemSettings = () => {
  const { showToast } = useToast();
  const [settings, setSettings] = useState(() => settingsService.getSettings());
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSave = () => {
    const success = settingsService.saveSettings(settings);
    if (success) {
      showToast('Settings Saved Successfully', 'success');
    } else {
      showToast('Failed to save settings', 'error');
    }
  };
  const handleReset = () => {
    const defaultSettings = settingsService.resetSettings();
    setSettings(defaultSettings);
    showToast('Settings Reset Successfully', 'success');
  };
  return (
    <div className="settings-dashboard">
      <div className="settings-header">
        <div className="settings-title">
          <h1>System Settings</h1>
          <p>Configure hospital-wide system preferences</p>
        </div>
      </div>
      <div className="settings-grid">
        {/* General Settings */}
        <div className="settings-card">
          <h2>General Settings</h2>
          <div className="form-group">
            <label className="form-label">Hospital Name</label>
            <input 
              type="text" 
              name="hospitalName"
              className="form-input" 
              value={settings.hospitalName}
              onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-label">System Timezone</label>
            <select 
              name="systemTimezone"
              className="form-select" 
              value={settings.systemTimezone}
              onChange={handleChange}>
              <option value="UTC">UTC</option>
              <option value="America/New_York">EST (New York)</option>
              <option value="Europe/London">GMT (London)</option>
              <option value="Asia/Dubai">GST (Dubai)</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date Format</label>
            <select 
              name="dateFormat"
              className="form-select" 
              value={settings.dateFormat}
              onChange={handleChange}>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
        </div>
        {/* Security Settings */}
        <div className="settings-card">
          <h2>Security Settings</h2>
          <div className="setting-item-box">
            <span className="setting-item-box-title">Enforce 2-Factor Authentication</span>
            <span className="setting-item-box-subtitle">Require 2FA for all users</span>
          </div>
          <div className="setting-item-box">
            <span className="setting-item-box-title">Auto-logout on Inactivity</span>
            <span className="setting-item-box-subtitle">After 30 minutes</span>
          </div>
          <div className="form-group">
            <label className="form-label">Password Expiry (days)</label>
            <input 
              type="number" 
              name="passwordExpiryDays"
              className="form-input" 
              value={settings.passwordExpiryDays}
              onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-label">Failed Login Attempts Before Lock</label>
            <input 
              type="number" 
              name="failedLoginAttempts"
              className="form-input" 
              value={settings.failedLoginAttempts}
              onChange={handleChange}/>
          </div>
        </div>
        {/* Billing & Tax Settings */}
        <div className="settings-card">
          <h2>Billing & Tax Settings</h2>
          <div className="billing-group">
            <div className="form-group">
              <label className="form-label">Default Tax Rate (%)</label>
              <input 
                type="number" 
                name="defaultTaxRate"
                className="form-input" 
                value={settings.defaultTaxRate}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label className="form-label">Currency</label>
              <input 
                type="text" 
                name="currency"
                className="form-input" 
                value={settings.currency}
                onChange={handleChange}/>
            </div>
            <div className="setting-item-box">
              <span className="setting-item-box-title">Enable Insurance Integration</span>
              <span className="setting-item-box-subtitle">Connect with insurance providers</span>
            </div>
          </div>
        </div>
        {/* Notification Settings */}
        <div className="settings-card">
          <h2>Notification Settings</h2>
          <div className="notification-group">
            <div className="setting-item-box">
              <span className="setting-item-box-title">SMS Notifications</span>
              <span className="setting-item-box-subtitle">Appointment reminders</span>
            </div>
            <div className="setting-item-box">
              <span className="setting-item-box-title">Email Notifications</span>
              <span className="setting-item-box-subtitle">Lab results & reports</span>
            </div>
            <div className="setting-item-box">
              <span className="setting-item-box-title">Critical Alerts</span>
              <span className="setting-item-box-subtitle">Instant notifications for critical events</span>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-actions">
        <button className="btn-primary" onClick={handleSave}>
          <RiCheckLine size={18} /> Save All Settings
        </button>
        <button className="btn-secondary" onClick={handleReset}>Reset to Defaults</button>
      </div>
    </div>
  );
};
export default SystemSettings;
