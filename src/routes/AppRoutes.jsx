import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/analytics/layout/MainLayout';
import Dashboard from '../pages/analytics/Dashboard/Dashboard';
import AuditLogs from '../pages/analytics/AuditLogs/AuditLogs';
import SystemSettings from '../pages/analytics/SystemSettings/SystemSettings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/analytics" replace />} />
      <Route element={<MainLayout />}>
        <Route path="/analytics" element={<Dashboard />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/settings" element={<SystemSettings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
