import React from 'react';
import { NavLink } from 'react-router-dom';
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

import Button from '../../../common/Button/Button';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <RiLayoutGridLine /> },
    { name: 'User Management', path: '/users', icon: <RiTeamLine /> },
    { name: 'Branch Management', path: '/branches', icon: <RiHospitalLine /> },
    { name: 'Analytics', path: '/analytics', icon: <RiHeartPulseLine /> },
    { name: 'Audit Logs', path: '/audit-logs', icon: <RiFileList3Line /> },
    { name: 'System Settings', path: '/settings', icon: <RiSettings4Line /> }
  ];

  return (
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
        <Button variant="logout">
          <RiLogoutBoxRLine size={18} /> Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
