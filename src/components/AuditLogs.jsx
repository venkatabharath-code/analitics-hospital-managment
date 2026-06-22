import { 
  RiDownloadLine, 
  RiSearchLine,
  RiPulseLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiErrorWarningLine,
  RiEyeLine,
  RiShieldCheckLine
} from 'react-icons/ri';
import './AuditLogs.css';
const mockLogs = [
  {
    id: 'log-1',
    date: '2026-01-03', time: '14:35:22', user: 'Dr. James Wilson', role: 'Doctor', roleClass: 'doctor',
    action: 'Patient Record Access', target: 'PAT001 - John Anderson', ip: '192.168.1.105', status: 'success'
  },
  {
    id: 'log-2',
    date: '2026-01-03', time: '14:32:18', user: 'Jennifer Thompson', role: 'Nurse', roleClass: 'nurse',
    action: 'Vitals Entry', target: 'PAT005 - Sarah Williams', ip: '192.168.1.112', status: 'success'
  },
  {
    id: 'log-3',
    date: '2026-01-03', time: '14:28:45', user: 'Admin User', role: 'Admin', roleClass: 'admin',
    action: 'User Creation', target: 'USR045 - New Doctor', ip: '192.168.1.100', status: 'success'
  },
  {
    id: 'log-4',
    date: '2026-01-03', time: '14:25:12', user: 'Robert Martinez', role: 'Pharmacist', roleClass: 'pharmacist',
    action: 'Medication Dispensing', target: 'RX-2026-0234', ip: '192.168.1.120', status: 'success'
  },
  {
    id: 'log-5',
    date: '2026-01-03', time: '14:20:33', user: 'Unknown User', role: 'N/A', roleClass: 'na',
    action: 'Failed Login Attempt', target: 'admin@hospital.com', ip: '203.45.12.88', status: 'failed'
  },
  {
    id: 'log-6',
    date: '2026-01-03', time: '14:15:28', user: 'Admin User', role: 'Admin', roleClass: 'admin',
    action: 'Permission Change', target: 'DOC002 - Dr. Sarah Johnson', ip: '192.168.1.100', status: 'success'
  },
  {
    id: 'log-7',
    date: '2026-01-03', time: '14:10:15', user: 'Dr. Michael Lee', role: 'Lab Technician', roleClass: 'lab',
    action: 'Lab Result Publication', target: 'LAB-2026-0892', ip: '192.168.1.130', status: 'success'
  }
];
const AuditLogs = () => {
  return (
    <div className="audit-dashboard">
      <div className="audit-header">
        <div className="audit-header-content">
          <h1>Audit Logs</h1>
          <p>Comprehensive system activity and security audit trail</p>
        </div>
        <button className="btn-export">
          <RiDownloadLine /> Export Audit Report
        </button>
      </div>
      <div className="audit-filters-container">
        <div className="filter-input-wrapper">
          <RiSearchLine className="search-icon" />
          <input type="text" className="filter-input with-icon" placeholder="Search logs..." />
        </div>
        <div className="filter-input-wrapper">
          <input type="text" className="filter-input" placeholder="" />
        </div>
        <div className="filter-input-wrapper">
          <input type="text" className="filter-input" placeholder="" />
        </div>
        <div className="filter-input-wrapper">
          <input type="text" className="filter-input" placeholder="" />
        </div>
      </div>
      <div className="audit-stats-container">
        <div className="audit-stat-card">
          <div className="audit-stat-header">
            <RiPulseLine className="audit-stat-icon total" />
            <span className="audit-stat-title">Total Events (24h)</span>
          </div>
          <div className="audit-stat-value">1,247</div>
        </div>
        <div className="audit-stat-card">
          <div className="audit-stat-header">
            <RiCheckboxCircleLine className="audit-stat-icon success" />
            <span className="audit-stat-title">Successful</span>
          </div>
          <div className="audit-stat-value success">1,238</div>
        </div>
        <div className="audit-stat-card">
          <div className="audit-stat-header">
            <RiCloseCircleLine className="audit-stat-icon failed" />
            <span className="audit-stat-title">Failed</span>
          </div>
          <div className="audit-stat-value failed">9</div>
        </div>
        <div className="audit-stat-card">
          <div className="audit-stat-header">
            <RiErrorWarningLine className="audit-stat-icon alerts" />
            <span className="audit-stat-title">Security Alerts</span>
          </div>
          <div className="audit-stat-value alerts">2</div>
        </div>
      </div>
      <div className="audit-table-container">
        <div className="audit-table-responsive">
          <table className="audit-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Role</th>
                <th>Action</th>
                <th>Target</th>
                <th>IP Address</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {mockLogs.map((log) => (
                <tr key={log.id}>
                  <td>
                    <div className="audit-timestamp">
                      <span>{log.date}</span>
                      <span>{log.time}</span>
                    </div>
                  </td>
                  <td>{log.user}</td>
                  <td>
                    <span className={`role-badge ${log.roleClass}`}>
                      {log.role}
                    </span>
                  </td>
                  <td>{log.action}</td>
                  <td>{log.target}</td>
                  <td>{log.ip}</td>
                  <td>
                    <span className={`status-badge ${log.status}`}>
                      {log.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-view">
                      <RiEyeLine /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="compliance-container">
        <div className="compliance-header">
          <RiShieldCheckLine size={20} />
          <span>Compliance & Data Retention</span>
        </div>
        <ul className="compliance-list">
          <li>All audit logs are immutable and tamper-proof</li>
          <li>Logs are retained for 7 years as per healthcare compliance requirements</li>
          <li>Failed login attempts trigger automatic security alerts after 3 attempts</li>
          <li>Patient data access is tracked and monitored for HIPAA compliance</li>
        </ul>
      </div>
    </div>
  );
};
export default AuditLogs;
