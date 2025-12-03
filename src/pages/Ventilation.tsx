import { Wind, Gauge, AlertTriangle, TrendingUp, ArrowRight, Activity } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const gasLevels = [
  { name: 'Methane (CH₄)', current: 0.4, safe: 1.5, unit: '%', status: 'Safe', color: 'green' },
  { name: 'Oxygen (O₂)', current: 20.8, safe: 19.0, unit: '%', status: 'Safe', color: 'blue' },
  { name: 'Carbon Dioxide (CO₂)', current: 0.8, safe: 1.5, unit: '%', status: 'Safe', color: 'yellow' },
  { name: 'Carbon Monoxide (CO)', current: 0.002, safe: 0.005, unit: '%', status: 'Safe', color: 'red' },
  { name: 'Hydrogen Sulfide (H₂S)', current: 0.001, safe: 0.002, unit: '%', status: 'Safe', color: 'purple' },
];

const sensorData = [
  { id: 'SNR-2847', location: 'Jharia - Level 3, Section A', ch4: 0.3, o2: 20.9, co2: 0.6, status: 'Normal' },
  { id: 'SNR-1923', location: 'Jharia - Level 3, Section B', ch4: 0.5, o2: 20.7, co2: 0.9, status: 'Normal' },
  { id: 'SNR-3156', location: 'Raniganj - Tunnel 5', ch4: 1.2, o2: 19.8, co2: 1.1, status: 'Warning' },
  { id: 'SNR-2741', location: 'Singareni - Level 2', ch4: 0.4, o2: 20.6, co2: 0.7, status: 'Normal' },
  { id: 'SNR-1847', location: 'Korba - Underground Zone A', ch4: 1.8, o2: 19.2, co2: 1.4, status: 'Critical' },
  { id: 'SNR-2658', location: 'Talcher - Level 4', ch4: 0.6, o2: 20.5, co2: 0.8, status: 'Normal' },
];

const methaneTrend = [
  { time: '00:00', value: 0.3 },
  { time: '04:00', value: 0.35 },
  { time: '08:00', value: 0.42 },
  { time: '12:00', value: 0.38 },
  { time: '16:00', value: 0.45 },
  { time: '20:00', value: 0.41 },
  { time: '24:00', value: 0.40 },
];

const oxygenTrend = [
  { time: '00:00', value: 20.9 },
  { time: '04:00', value: 20.8 },
  { time: '08:00', value: 20.7 },
  { time: '12:00', value: 20.8 },
  { time: '16:00', value: 20.9 },
  { time: '20:00', value: 20.8 },
  { time: '24:00', value: 20.8 },
];

const airflowData = [
  { location: 'Main Shaft', flow: 145, target: 150, efficiency: 97 },
  { location: 'North Wing', flow: 88, target: 90, efficiency: 98 },
  { location: 'South Wing', flow: 92, target: 90, efficiency: 102 },
  { location: 'East Tunnel', flow: 67, target: 75, efficiency: 89 },
];

export default function Ventilation() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getGasColor = (color: string) => {
    const colors: { [key: string]: string } = {
      green: 'from-green-500 to-emerald-600',
      blue: 'from-blue-500 to-cyan-600',
      yellow: 'from-yellow-500 to-orange-500',
      red: 'from-red-500 to-red-700',
      purple: 'from-purple-500 to-pink-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-white mb-2">Ventilation & Gas Monitoring</h1>
        <p className="text-gray-400">Real-time atmospheric monitoring for underground mining operations</p>
      </div>

      {/* Critical Alerts */}
      {sensorData.filter(s => s.status === 'Critical' || s.status === 'Warning').length > 0 && (
        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
            <h3 className="text-xl text-white">Critical Gas Alerts</h3>
          </div>
          <div className="space-y-3">
            {sensorData.filter(s => s.status === 'Critical' || s.status === 'Warning').map((sensor) => (
              <div key={sensor.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-red-500/20">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white">{sensor.id}</span>
                    <Badge className={`${getStatusColor(sensor.status)} border`}>
                      {sensor.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-400">{sensor.location}</div>
                  <div className="text-sm text-red-400 mt-1">
                    CH₄: {sensor.ch4}% • O₂: {sensor.o2}% • CO₂: {sensor.co2}%
                  </div>
                </div>
                <div className="text-sm text-gray-400">Just now</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Real-time Gas Levels */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {gasLevels.map((gas) => (
          <div key={gas.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className={`w-12 h-12 bg-gradient-to-br ${getGasColor(gas.color)} rounded-lg flex items-center justify-center mb-4`}>
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <div className="mb-2">
              <div className="text-2xl text-white mb-1">{gas.current}{gas.unit}</div>
              <div className="text-xs text-gray-400">{gas.name}</div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Safe Limit</span>
                <span>{gas.safe}{gas.unit}</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${getGasColor(gas.color)}`}
                  style={{ width: `${Math.min((gas.current / gas.safe) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <Badge className={`mt-4 ${getStatusColor(gas.status)} border`}>
              {gas.status}
            </Badge>
          </div>
        ))}
      </div>

      {/* Gas Trend Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Methane Levels (24h Trend)</h3>
            <p className="text-sm text-gray-400">Average CH₄ concentration across all sensors</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={methaneTrend}>
              <defs>
                <linearGradient id="methanGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[0, 1.5]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#methanGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Oxygen Levels (24h Trend)</h3>
            <p className="text-sm text-gray-400">Average O₂ concentration across all sensors</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={oxygenTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[19, 21]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sensor Status Table */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="text-xl text-white">Live Sensor Dashboard</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm text-gray-400 pb-3">Sensor ID</th>
                <th className="text-left text-sm text-gray-400 pb-3">Location</th>
                <th className="text-left text-sm text-gray-400 pb-3">CH₄ (%)</th>
                <th className="text-left text-sm text-gray-400 pb-3">O₂ (%)</th>
                <th className="text-left text-sm text-gray-400 pb-3">CO₂ (%)</th>
                <th className="text-left text-sm text-gray-400 pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {sensorData.map((sensor) => (
                <tr key={sensor.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 text-sm text-white">{sensor.id}</td>
                  <td className="py-4 text-sm text-gray-300">{sensor.location}</td>
                  <td className={`py-4 text-sm ${sensor.ch4 > 1.0 ? 'text-red-400' : 'text-green-400'}`}>
                    {sensor.ch4}
                  </td>
                  <td className={`py-4 text-sm ${sensor.o2 < 19.5 ? 'text-red-400' : 'text-green-400'}`}>
                    {sensor.o2}
                  </td>
                  <td className={`py-4 text-sm ${sensor.co2 > 1.0 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {sensor.co2}
                  </td>
                  <td className="py-4">
                    <Badge className={`${getStatusColor(sensor.status)} border`}>
                      {sensor.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Airflow Monitoring */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Wind className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl text-white">Ventilation Airflow Status</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {airflowData.map((area, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white">{area.location}</h4>
                <Badge className={
                  area.efficiency >= 95 
                    ? 'bg-green-500/20 text-green-400 border-green-500/30 border'
                    : area.efficiency >= 85
                    ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30 border'
                    : 'bg-red-500/20 text-red-400 border-red-500/30 border'
                }>
                  {area.efficiency}%
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Current Flow</span>
                  <span className="text-white">{area.flow} m³/min</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Target Flow</span>
                  <span className="text-gray-300">{area.target} m³/min</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      area.efficiency >= 95 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                      area.efficiency >= 85 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' :
                      'bg-gradient-to-r from-red-500 to-red-400'
                    }`}
                    style={{ width: `${area.efficiency}%` }}
                  ></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ArrowRight className="w-4 h-4" />
                  <span>Flow Direction: Inward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-white">Air Quality</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Overall air quality is <strong className="text-green-400">excellent</strong> across 94% of monitored zones
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Wind className="w-5 h-5 text-blue-400" />
            <h3 className="text-white">Ventilation Efficiency</h3>
          </div>
          <p className="text-gray-300 text-sm">
            System operating at <strong className="text-blue-400">96.5%</strong> efficiency with optimal airflow
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <h3 className="text-white">Attention Required</h3>
          </div>
          <p className="text-gray-300 text-sm">
            <strong className="text-orange-400">2 zones</strong> require immediate ventilation system inspection
          </p>
        </div>
      </div>
    </div>
  );
}
