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
import PageTitle from '../../../components/PageTitle/PageTitle';
import Card from '../../../components/Card/Card';
import DataTable from '../../../common/DataTable/DataTable';
import StatusBadge from '../../../components/StatusBadge/StatusBadge';
import './Dashboard.css';
import { 
  volumeData, 
  revenueData, 
  tableData, 
  STAT_CARDS, 
  CHART_CONFIG 
} from '../../../data/analytics/dashboard.data.js';
const Dashboard = () => {
  return (
    <div className="analytics-dashboard">
      <PageTitle variant="dashboard">
        <h1>Business Intelligence & Analytics</h1>
        <p>Comprehensive insights and performance metrics</p>
      </PageTitle>
      <div className="stats-container">
        {STAT_CARDS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card variant="stat" key={stat.id}>
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
            </Card>
          );
        })}
      </div>
      <div className="charts-container">
        <Card variant="chart">
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
        </Card>
        <Card variant="chart">
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
        </Card>
      </div>
      <div className="table-container">
        <h2>Department Performance</h2>
        <div className="table-responsive">
          <DataTable variant="performance">
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
                    <StatusBadge variant="utilization" type={row.utilizationClass}>
                      {row.utilization}
                    </StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
