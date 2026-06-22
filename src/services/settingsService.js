const STORAGE_KEY = 'medicare_system_settings';
const defaultSettings = {
  // General Settings
  hospitalName: 'MediCare Hospital Network',
  systemTimezone: 'UTC',
  dateFormat: 'MM/DD/YYYY',
  // Security Settings
  enforce2FA: false,
  autoLogoutMinutes: 30,
  passwordExpiryDays: 90,
  failedLoginAttempts: 3,
  // Billing & Tax Settings
  defaultTaxRate: 18,
  currency: 'USD',
  enableInsuranceIntegration: false,
  // Notification Settings
  smsNotifications: true,
  emailNotifications: true,
  criticalAlerts: true,
};
export const settingsService = {
  getSettings: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultSettings, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Error reading settings from localStorage', e);
    }
    return { ...defaultSettings };
  },
  saveSettings: (settingsData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settingsData));
      return true;
    } catch (e) {
      console.error('Error saving settings to localStorage', e);
      return false;
    }
  },
  resetSettings: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return { ...defaultSettings };
    } catch (e) {
      console.error('Error resetting settings', e);
      return { ...defaultSettings };
    }
  }
};
