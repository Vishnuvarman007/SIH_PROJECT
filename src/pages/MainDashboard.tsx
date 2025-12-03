import { Shield, AlertTriangle, HardHat, ClipboardCheck, TrendingUp, Flame, Wind, Users } from 'lucide-react';
import StatCard from '../components/StatCard';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const safetyTrendData = [
  { month: 'Apr', score: 92 },
  { month: 'May', score: 94 },
  { month: 'Jun', score: 91 },
  { month: 'Jul', score: 95 },
  { month: 'Aug', score: 93 },
  { month: 'Sep', score: 96 },
  { month: 'Oct', score: 97 },
  { month: 'Nov', score: 98 },
];

const hazardData = [
  { name: 'Gas Buildup', value: 35, color: '#ef4444' },
  { name: 'Roof Fall Risk', value: 28, color: '#f97316' },
  { name: 'Machinery Fault', value: 22, color: '#eab308' },
  { name: 'PPE Violation', value: 15, color: '#3b82f6' },
];

const accidentFrequencyData = [
  { category: 'Jan', incidents: 8 },
  { category: 'Feb', incidents: 6 },
  { category: 'Mar', incidents: 7 },
  { category: 'Apr', incidents: 5 },
  { category: 'May', incidents: 4 },
  { category: 'Jun', incidents: 3 },
];

const liveAlerts = [
  { id: 1, type: 'Gas Overload', mine: 'Jharia Coal Mine', severity: 'critical', time: '2 min ago' },
  { id: 2, type: 'Machinery Malfunction', mine: 'Singareni Mine', severity: 'major', time: '15 min ago' },
  { id: 3, type: 'Roof Fall Warning', mine: 'Raniganj Mine', severity: 'critical', time: '28 min ago' },
  { id: 4, type: 'Blasting Risk', mine: 'Korba Coal Field', severity: 'major', time: '1 hr ago' },
];

export default function MainDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-white mb-2">Safety Dashboard</h1>
        <p className="text-gray-400">Real-time overview of mine safety across all regions</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Overall Safety Score"
          value="A+"
          subtitle="Excellent across all parameters"
          icon={Shield}
          trend={{ value: '2.5%', positive: true }}
          gradient="from-green-500 to-emerald-600"
        />
        <StatCard
          title="Active Hazards Today"
          value="12"
          subtitle="4 critical, 8 major"
          icon={AlertTriangle}
          trend={{ value: '3', positive: false }}
          gradient="from-red-500 to-orange-600"
        />
        <StatCard
          title="PPE Compliance"
          value="96.8%"
          subtitle="Above target threshold"
          icon={HardHat}
          trend={{ value: '1.2%', positive: true }}
          gradient="from-blue-500 to-cyan-600"
        />
        <StatCard
          title="Checklist Completion"
          value="98.5%"
          subtitle="2,847 mines reporting"
          icon={ClipboardCheck}
          trend={{ value: '0.8%', positive: true }}
          gradient="from-purple-500 to-pink-600"
        />
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Safety Trend */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl text-white mb-1">Safety Score Trend</h3>
              <p className="text-sm text-gray-400">Last 8 months performance</p>
            </div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={safetyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[85, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Hazard Distribution */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Hazard Category Distribution</h3>
            <p className="text-sm text-gray-400">Current month breakdown</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={hazardData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {hazardData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {hazardData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accident Frequency & Gas Monitoring */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Accident Frequency */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Accident Frequency</h3>
            <p className="text-sm text-gray-400">Monthly incident count (2025)</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={accidentFrequencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="category" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Bar dataKey="incidents" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Live Gas Monitoring */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Wind className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-xl text-white">Live Gas Monitoring</h3>
              <p className="text-sm text-gray-400">Real-time averages</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Methane (CH₄)</span>
                <span className="text-sm text-green-400">0.4%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Oxygen (O₂)</span>
                <span className="text-sm text-green-400">20.8%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Carbon Dioxide (CO₂)</span>
                <span className="text-sm text-yellow-400">0.8%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Carbon Monoxide (CO)</span>
                <span className="text-sm text-red-400">0.002%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-400" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Alerts */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-400" />
            <h3 className="text-xl text-white">Live Alerts</h3>
          </div>
          <span className="text-sm text-gray-400">Last updated: Just now</span>
        </div>
        <div className="space-y-3">
          {liveAlerts.map((alert) => (
            <div 
              key={alert.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${alert.severity === 'critical' ? 'bg-red-500 animate-pulse' : 'bg-orange-500'}`}></div>
                <div>
                  <div className="text-white">{alert.type}</div>
                  <div className="text-sm text-gray-400">{alert.mine}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  alert.severity === 'critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                </span>
                <span className="text-sm text-gray-400 min-w-[80px] text-right">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Prediction */}
      <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl text-white mb-2">AI Risk Prediction</h3>
            <p className="text-gray-300 mb-4">
              Based on historical patterns, weather conditions, and current safety metrics, the AI system predicts:
            </p>
            <div className="text-2xl text-white mb-2">
              <span className="text-green-400">Low Risk</span> for next 48 hours
            </div>
            <p className="text-sm text-gray-400">
              Confidence: 94.2% • Updated 5 minutes ago
            </p>
          </div>
          <div className="text-6xl">🤖</div>
        </div>
      </div>
    </div>
  );
}
