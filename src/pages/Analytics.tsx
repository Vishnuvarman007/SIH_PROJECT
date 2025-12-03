import { TrendingUp, TrendingDown, Activity, AlertCircle, Users, Wrench } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const yearlyAccidentTrend = [
  { month: 'Jan', 2024: 12, 2025: 8 },
  { month: 'Feb', 2024: 14, 2025: 6 },
  { month: 'Mar', 2024: 11, 2025: 7 },
  { month: 'Apr', 2024: 13, 2025: 5 },
  { month: 'May', 2024: 10, 2025: 4 },
  { month: 'Jun', 2024: 15, 2025: 3 },
  { month: 'Jul', 2024: 9, 2025: 4 },
  { month: 'Aug', 2024: 11, 2025: 3 },
  { month: 'Sep', 2024: 8, 2025: 2 },
  { month: 'Oct', 2024: 12, 2025: 3 },
  { month: 'Nov', 2024: 10, 2025: 2 },
  { month: 'Dec', 2024: 7, 2025: 0 },
];

const workerRiskIndex = [
  { category: 'Training', value: 92 },
  { category: 'Experience', value: 85 },
  { category: 'Compliance', value: 88 },
  { category: 'Equipment', value: 90 },
  { category: 'Health', value: 87 },
  { category: 'Supervision', value: 93 },
];

const machineryIncidents = [
  { machine: 'Excavator', incidents: 18 },
  { machine: 'Dumper', incidents: 15 },
  { machine: 'Loader', incidents: 12 },
  { machine: 'Conveyor', incidents: 8 },
  { machine: 'Crusher', incidents: 7 },
  { machine: 'Drills', incidents: 5 },
];

const mineComparison = [
  { mine: 'Jharia', safety: 94, compliance: 96, training: 92, equipment: 95 },
  { mine: 'Raniganj', safety: 91, compliance: 93, training: 89, equipment: 90 },
  { mine: 'Singareni', safety: 96, compliance: 97, training: 95, equipment: 94 },
  { mine: 'Korba', safety: 88, compliance: 90, training: 87, equipment: 89 },
  { mine: 'Talcher', safety: 92, compliance: 94, training: 91, equipment: 93 },
];

const heatmapData = [
  { hour: '0-4', Mon: 2, Tue: 1, Wed: 0, Thu: 1, Fri: 2, Sat: 1, Sun: 0 },
  { hour: '4-8', Mon: 5, Tue: 6, Wed: 4, Thu: 5, Fri: 7, Sat: 3, Sun: 2 },
  { hour: '8-12', Mon: 8, Tue: 9, Wed: 7, Thu: 8, Fri: 10, Sat: 6, Sun: 4 },
  { hour: '12-16', Mon: 6, Tue: 7, Wed: 5, Thu: 6, Fri: 8, Sat: 4, Sun: 3 },
  { hour: '16-20', Mon: 4, Tue: 5, Wed: 3, Thu: 4, Fri: 6, Sat: 2, Sun: 1 },
  { hour: '20-24', Mon: 3, Tue: 2, Wed: 1, Thu: 2, Fri: 4, Sat: 2, Sun: 1 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-white mb-2">Safety Analytics</h1>
        <p className="text-gray-400">Comprehensive insights and trends across all mining operations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm px-2 py-1 rounded bg-green-500/20 text-green-400">
              +15.3%
            </div>
          </div>
          <div className="text-3xl text-white mb-1">73%</div>
          <div className="text-sm text-gray-400">Safety Improvement YoY</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm px-2 py-1 rounded bg-green-500/20 text-green-400">
              -68%
            </div>
          </div>
          <div className="text-3xl text-white mb-1">47</div>
          <div className="text-sm text-gray-400">Total Incidents (2025)</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm px-2 py-1 rounded bg-blue-500/20 text-blue-400">
              Active
            </div>
          </div>
          <div className="text-3xl text-white mb-1">1.2M</div>
          <div className="text-sm text-gray-400">Workers Monitored</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm px-2 py-1 rounded bg-purple-500/20 text-purple-400">
              Live
            </div>
          </div>
          <div className="text-3xl text-white mb-1">94.2%</div>
          <div className="text-sm text-gray-400">AI Prediction Accuracy</div>
        </div>
      </div>

      {/* 12-Month Accident Trend */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl text-white mb-1">12-Month Accident Trend Comparison</h3>
          <p className="text-sm text-gray-400">Year-over-year incident reduction analysis</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={yearlyAccidentTrend}>
            <defs>
              <linearGradient id="color2024" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="color2025" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            />
            <Legend />
            <Area type="monotone" dataKey="2024" stroke="#94a3b8" fillOpacity={1} fill="url(#color2024)" />
            <Area type="monotone" dataKey="2025" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#color2025)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Worker Risk Index & Machinery Incidents */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Worker Risk Index</h3>
            <p className="text-sm text-gray-400">Multi-factor safety assessment</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={workerRiskIndex}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="category" stroke="#94a3b8" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
              <Radar name="Risk Score" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Machinery Involved in Incidents</h3>
            <p className="text-sm text-gray-400">Equipment-wise incident distribution (2025)</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={machineryIncidents} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis type="category" dataKey="machine" stroke="#94a3b8" width={100} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Bar dataKey="incidents" fill="#f97316" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mine Comparison Chart */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl text-white mb-1">Mine Safety Score Comparison</h3>
          <p className="text-sm text-gray-400">Performance metrics across top 5 mines</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={mineComparison}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="mine" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            />
            <Legend />
            <Bar dataKey="safety" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            <Bar dataKey="compliance" fill="#10b981" radius={[8, 8, 0, 0]} />
            <Bar dataKey="training" fill="#f59e0b" radius={[8, 8, 0, 0]} />
            <Bar dataKey="equipment" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Incident Heatmap */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl text-white mb-1">Incident Heatmap</h3>
          <p className="text-sm text-gray-400">Time-based incident pattern analysis</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-sm text-gray-400 p-2">Time</th>
                <th className="text-center text-sm text-gray-400 p-2">Mon</th>
                <th className="text-center text-sm text-gray-400 p-2">Tue</th>
                <th className="text-center text-sm text-gray-400 p-2">Wed</th>
                <th className="text-center text-sm text-gray-400 p-2">Thu</th>
                <th className="text-center text-sm text-gray-400 p-2">Fri</th>
                <th className="text-center text-sm text-gray-400 p-2">Sat</th>
                <th className="text-center text-sm text-gray-400 p-2">Sun</th>
              </tr>
            </thead>
            <tbody>
              {heatmapData.map((row) => (
                <tr key={row.hour}>
                  <td className="text-sm text-gray-300 p-2">{row.hour}</td>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                    const value = row[day as keyof typeof row] as number;
                    const intensity = Math.min(value / 10, 1);
                    return (
                      <td key={day} className="p-2">
                        <div 
                          className="w-full h-12 rounded flex items-center justify-center text-sm text-white"
                          style={{ 
                            backgroundColor: `rgba(59, 130, 246, ${intensity})`,
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {value}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl text-white mb-2">AI-Generated Insights</h3>
            <div className="space-y-3 text-gray-300">
              <p>• <strong>Peak Risk Hours:</strong> Incidents are 2.3x more likely during 8-12 AM shift change periods</p>
              <p>• <strong>Equipment Priority:</strong> Excavator maintenance should be prioritized - 38% higher incident rate than average</p>
              <p>• <strong>Training Impact:</strong> Mines with 90%+ training completion show 64% fewer incidents</p>
              <p>• <strong>Prediction:</strong> Current trends suggest 85% likelihood of achieving zero-incident week if safety protocols maintained</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
