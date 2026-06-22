import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuditLogs from './components/AuditLogs';
import SystemSettings from './components/SystemSettings';
import { 
  RiLayoutGridLine, 
  RiTeamLine,
  RiHospitalLine,
  RiHeartPulseLine,
  RiFileList3Line,
  RiSettings4Line, 
  RiCloseLine,
  RiUserLine,
  RiLogoutBoxRLine
} from 'react-icons/ri';
import { FiActivity } from 'react-icons/fi';
function App() {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <RiLayoutGridLine /> },
    { name: 'User Management', path: '/users', icon: <RiTeamLine /> },
    { name: 'Branch Management', path: '/branches', icon: <RiHospitalLine /> },
    { name: 'Analytics', path: '/analytics', icon: <RiHeartPulseLine /> },
    { name: 'Audit Logs', path: '/audit-logs', icon: <RiFileList3Line /> },
    { name: 'System Settings', path: '/settings', icon: <RiSettings4Line /> }
  ];
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">
            <FiActivity size={20} strokeWidth={2.5} />
          </div>
          <span>MediCare HIS</span>
          <RiCloseLine size={20} className="sidebar-close" />
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path} 
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              {React.cloneElement(item.icon, { size: 20 })}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <RiUserLine size={20} />
            </div>
            <div className="user-info">
              <span className="user-name">Dr. Sarah Admin</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
          <button className="btn-logout">
            <RiLogoutBoxRLine size={18} /> Logout
          </button>
        </div>
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/analytics" element={<Dashboard />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
          <Route path="/settings" element={<SystemSettings />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
