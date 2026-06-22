import { 
  AreaChart, Area, 
  BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  RiGroupLine, 
  RiPulseLine, 
  RiHotelBedLine, 
  RiLineChartLine,
  RiArrowRightUpLine
} from 'react-icons/ri';
import './Dashboard.css';
const volumeData = [
  { name: 'Jul', outpatient: 1250, inpatient: 300, emergency: 150 },
  { name: 'Aug', outpatient: 1350, inpatient: 350, emergency: 180 },
  { name: 'Sep', outpatient: 1380, inpatient: 400, emergency: 180 },
  { name: 'Oct', outpatient: 1550, inpatient: 420, emergency: 200 },
  { name: 'Nov', outpatient: 1480, inpatient: 400, emergency: 190 },
  { name: 'Dec', outpatient: 1620, inpatient: 450, emergency: 220 },
];
const revenueData = [
  { name: 'Jul', revenue: 4300000, expenses: 3100000 },
  { name: 'Aug', revenue: 4500000, expenses: 3200000 },
  { name: 'Sep', revenue: 4800000, expenses: 3300000 },
  { name: 'Oct', revenue: 5100000, expenses: 3500000 },
  { name: 'Nov', revenue: 5000000, expenses: 3600000 },
  { name: 'Dec', revenue: 5400000, expenses: 3700000 },
];
const tableData = [
  { id: 'dept-1', dept: 'General Medicine', patients: 845, revenue: '₹1.2M', wait: '18 mins', satisfaction: '4.8/5', utilization: '92%', utilizationClass: 'status-high' },
  { id: 'dept-2', dept: 'Emergency', patients: 240, revenue: '₹980K', wait: '12 mins', satisfaction: '4.6/5', utilization: '78%', utilizationClass: 'status-medium' },
  { id: 'dept-3', dept: 'Cardiology', patients: 312, revenue: '₹1.5M', wait: '25 mins', satisfaction: '4.9/5', utilization: '88%', utilizationClass: 'status-high' },
  { id: 'dept-4', dept: 'Surgery', patients: 156, revenue: '₹2.1M', wait: 'N/A', satisfaction: '4.7/5', utilization: '85%', utilizationClass: 'status-high' },
];
const STAT_CARDS = [
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
const CHART_CONFIG = {
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
const Dashboard = () => {
  return (
    <div className="analytics-dashboard">
      <div className="dashboard-header">
        <h1>Business Intelligence & Analytics</h1>
        <p>Comprehensive insights and performance metrics</p>
      </div>
      <div className="stats-container">
        {STAT_CARDS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="stat-card">
              <div className="stat-card-header">
                <Icon className={`stat-icon ${stat.iconClass}`} />
                <span className="stat-title">{stat.title}</span>
              </div>
              <div className="stat-value">{stat.value}</div>
              {stat.change && (
                <div className={`stat-change ${stat.changeClass}`}>
                  <RiArrowRightUpLine /> {stat.change}
                </div>
              )}
              {stat.subtitle && (
                <div className="stat-subtitle">{stat.subtitle}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="charts-container">
        <div className="chart-card">
          <h2>Patient Volume Trends</h2>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={volumeData}
                margin={CHART_CONFIG.areaMargin}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={true} 
                  tickLine={true} 
                  tick={CHART_CONFIG.areaTick} 
                  dy={10} />
                <YAxis 
                  axisLine={true} 
                  tickLine={true} 
                  tick={CHART_CONFIG.areaTick} 
                  dx={-10} 
                  ticks={[0, 600, 1200, 1800, 2400]} />
                <Tooltip />
                <Legend 
                  iconType="circle" 
                  wrapperStyle={CHART_CONFIG.legendWrapper} />
                <Area 
                  type="monotone" 
                  dataKey="outpatient" 
                  name="outpatient" 
                  stackId="1" 
                  stroke="var(--color-primary)" 
                  fill="var(--color-primary)" 
                  fillOpacity={0.8} />
                <Area 
                  type="monotone" 
                  dataKey="inpatient" 
                  name="inpatient" 
                  stackId="1" 
                  stroke="#A78BFA" 
                  fill="#A78BFA" 
                  fillOpacity={0.8} />
                <Area 
                  type="monotone" 
                  dataKey="emergency" 
                  name="emergency" 
                  stackId="1" 
                  stroke="var(--color-warning)" 
                  fill="var(--color-warning)" 
                  fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="chart-card">
          <h2>Revenue vs Expenses</h2>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                margin={CHART_CONFIG.barMargin}
                barSize={20}
                barGap={8}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={true} 
                  tickLine={true} 
                  tick={CHART_CONFIG.barTick} 
                  dy={10} />
                <YAxis 
                  axisLine={true} 
                  tickLine={true} 
                  tick={CHART_CONFIG.barTick} 
                  dx={-10} 
                  ticks={[0, 1500000, 3000000, 4500000, 6000000]} 
                  tickFormatter={(value) => value} />
                <Tooltip cursor={CHART_CONFIG.tooltipCursor} />
                <Legend 
                  iconType="square" 
                  wrapperStyle={CHART_CONFIG.legendWrapper} 
                  payload={CHART_CONFIG.barLegendPayload}/>
                <Bar 
                  dataKey="revenue" 
                  name="revenue" 
                  fill="#10B981" 
                  radius={[0, 0, 0, 0]} />
                <Bar 
                  dataKey="expenses" 
                  name="expenses" 
                  fill="#EF4444" 
                  radius={[0, 0, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="table-container">
        <h2>Department Performance</h2>
        <div className="table-responsive">
          <table className="performance-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Patients</th>
                <th>Revenue</th>
                <th>Avg Wait Time</th>
                <th>Satisfaction</th>
                <th>Utilization</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="font-medium">{row.dept}</td>
                  <td>{row.patients}</td>
                  <td>{row.revenue}</td>
                  <td>{row.wait}</td>
                  <td className="text-success">{row.satisfaction}</td>
                  <td>
                    <span className={`utilization-badge ${row.utilizationClass}`}>
                      {row.utilization}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
