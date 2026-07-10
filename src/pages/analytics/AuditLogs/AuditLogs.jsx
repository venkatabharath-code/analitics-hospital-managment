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
import PageTitle from '../../../components/PageTitle/PageTitle';
import Button from '../../../common/Button/Button';
import SearchInput from '../../../components/SearchInput/SearchInput';
import Card from '../../../components/Card/Card';
import DataTable from '../../../common/DataTable/DataTable';
import StatusBadge from '../../../components/StatusBadge/StatusBadge';
import './AuditLogs.css';
import { mockLogs } from '../../../data/analytics/auditLogs.data.js';
const AuditLogs = () => {
  return (
    <div className="audit-dashboard">
      <PageTitle variant="audit">
        <div className="audit-header-content">
          <h1>Audit Logs</h1>
          <p>Comprehensive system activity and security audit trail</p>
        </div>
        <Button variant="export">
          <RiDownloadLine /> Export Audit Report
        </Button>
      </PageTitle>
      <div className="audit-filters-container">
        <SearchInput icon={true} placeholder="Search logs..." />
        <SearchInput placeholder="" />
        <SearchInput placeholder="" />
        <SearchInput placeholder="" />
      </div>
      <div className="audit-stats-container">
        <Card variant="audit-stat">
          <div className="audit-stat-header">
            <RiPulseLine className="audit-stat-icon total" />
            <span className="audit-stat-title">Total Events (24h)</span>
          </div>
          <div className="audit-stat-value">1,247</div>
        </Card>
        <Card variant="audit-stat">
          <div className="audit-stat-header">
            <RiCheckboxCircleLine className="audit-stat-icon success" />
            <span className="audit-stat-title">Successful</span>
          </div>
          <div className="audit-stat-value success">1,238</div>
        </Card>
        <Card variant="audit-stat">
          <div className="audit-stat-header">
            <RiCloseCircleLine className="audit-stat-icon failed" />
            <span className="audit-stat-title">Failed</span>
          </div>
          <div className="audit-stat-value failed">9</div>
        </Card>
        <Card variant="audit-stat">
          <div className="audit-stat-header">
            <RiErrorWarningLine className="audit-stat-icon alerts" />
            <span className="audit-stat-title">Security Alerts</span>
          </div>
          <div className="audit-stat-value alerts">2</div>
        </Card>
      </div>
      <div className="audit-table-container">
        <div className="audit-table-responsive">
          <DataTable variant="audit">
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
                    <StatusBadge variant="role" type={log.roleClass}>
                      {log.role}
                    </StatusBadge>
                  </td>
                  <td>{log.action}</td>
                  <td>{log.target}</td>
                  <td>{log.ip}</td>
                  <td>
                    <StatusBadge variant="status" type={log.status}>
                      {log.status}
                    </StatusBadge>
                  </td>
                  <td>
                    <Button variant="view">
                      <RiEyeLine /> View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </DataTable>
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
