import { 
  RiGroupLine, 
  RiPulseLine, 
  RiHotelBedLine, 
  RiLineChartLine
} from 'react-icons/ri';

export const volumeData = [
  { name: 'Jul', outpatient: 1250, inpatient: 300, emergency: 150 },
  { name: 'Aug', outpatient: 1350, inpatient: 350, emergency: 180 },
  { name: 'Sep', outpatient: 1380, inpatient: 400, emergency: 180 },
  { name: 'Oct', outpatient: 1550, inpatient: 420, emergency: 200 },
  { name: 'Nov', outpatient: 1480, inpatient: 400, emergency: 190 },
  { name: 'Dec', outpatient: 1620, inpatient: 450, emergency: 220 },
];

export const revenueData = [
  { name: 'Jul', revenue: 4300000, expenses: 3100000 },
  { name: 'Aug', revenue: 4500000, expenses: 3200000 },
  { name: 'Sep', revenue: 4800000, expenses: 3300000 },
  { name: 'Oct', revenue: 5100000, expenses: 3500000 },
  { name: 'Nov', revenue: 5000000, expenses: 3600000 },
  { name: 'Dec', revenue: 5400000, expenses: 3700000 },
];

export const tableData = [
  { id: 'dept-1', dept: 'General Medicine', patients: 845, revenue: '₹1.2M', wait: '18 mins', satisfaction: '4.8/5', utilization: '92%', utilizationClass: 'status-high' },
  { id: 'dept-2', dept: 'Emergency', patients: 240, revenue: '₹980K', wait: '12 mins', satisfaction: '4.6/5', utilization: '78%', utilizationClass: 'status-medium' },
  { id: 'dept-3', dept: 'Cardiology', patients: 312, revenue: '₹1.5M', wait: '25 mins', satisfaction: '4.9/5', utilization: '88%', utilizationClass: 'status-high' },
  { id: 'dept-4', dept: 'Surgery', patients: 156, revenue: '₹2.1M', wait: 'N/A', satisfaction: '4.7/5', utilization: '85%', utilizationClass: 'status-high' },
];

export const STAT_CARDS = [
  {
    id: 'patients',
    icon: RiGroupLine,
    iconClass: 'primary',
    title: 'Total Patients (Dec)',
    value: '2,260',
    change: '+8.5% vs Nov',
    changeClass: 'success',
  },
  {
    id: 'revenue',
    icon: RiPulseLine,
    iconClass: 'success',
    title: 'Revenue (Dec)',
    value: '₹5.4M',
    change: '+10.2% vs Nov',
    changeClass: 'success',
  },
  {
    id: 'occupancy',
    icon: RiHotelBedLine,
    iconClass: 'warning',
    title: 'Bed Occupancy',
    value: '73%',
    subtitle: '248/340 occupied',
  },
  {
    id: 'satisfaction',
    icon: RiLineChartLine,
    iconClass: 'primary-alt',
    title: 'Patient Satisfaction',
    value: '4.7/5',
    change: '+0.3 vs last month',
    changeClass: 'success',
  }
];

export const CHART_CONFIG = {
  areaMargin: { top: 20, right: 30, left: 10, bottom: 20 },
  barMargin: { top: 20, right: 30, left: 30, bottom: 20 },
  areaTick: { fill: '#64748b', fontSize: 12 },
  barTick: { fill: '#0F172B', fontSize: 12 },
  legendWrapper: { bottom: -5, left: 0, right: 0 },
  tooltipCursor: { fill: 'transparent' },
  barLegendPayload: [
    { value: 'expenses', type: 'square', id: 'expenses', color: '#EF4444' },
    { value: 'revenue', type: 'square', id: 'revenue', color: '#10B981' }
  ]
};
