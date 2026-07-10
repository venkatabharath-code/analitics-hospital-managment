export const mockLogs = [
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
