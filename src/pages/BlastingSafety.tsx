import { Bomb, AlertTriangle, CheckCircle, Clock, User, FileWarning } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const blastingLogs = [
  {
    id: 'BL-2025-0847',
    mine: 'Jharia Coal Mine',
    location: 'Section A-12',
    shotFirer: 'Vikram Singh',
    license: 'SF-MH-2847',
    date: '2025-11-29',
    time: '14:30',
    chargeWeight: '125 kg',
    holes: 24,
    status: 'Completed',
    clearanceTime: '18 min'
  },
  {
    id: 'BL-2025-0846',
    mine: 'Raniganj Mine',
    location: 'Zone B-7',
    shotFirer: 'Arjun Patel',
    license: 'SF-WB-1923',
    date: '2025-11-29',
    time: '11:45',
    chargeWeight: '98 kg',
    holes: 18,
    status: 'Completed',
    clearanceTime: '22 min'
  },
  {
    id: 'BL-2025-0845',
    mine: 'Singareni Mine',
    location: 'Level 3, Tunnel 5',
    shotFirer: 'Mohammed Rafi',
    license: 'SF-TS-3156',
    date: '2025-11-29',
    time: '09:15',
    chargeWeight: '156 kg',
    holes: 32,
    status: 'Misfire',
    clearanceTime: 'Pending'
  },
  {
    id: 'BL-2025-0844',
    mine: 'Korba Coal Field',
    location: 'Open Cast Area 4',
    shotFirer: 'Suresh Kumar',
    license: 'SF-CG-2741',
    date: '2025-11-28',
    time: '16:20',
    chargeWeight: '210 kg',
    holes: 45,
    status: 'Completed',
    clearanceTime: '15 min'
  }
];

const chargeWeightData = [
  { date: '24 Nov', weight: 185 },
  { date: '25 Nov', weight: 203 },
  { date: '26 Nov', weight: 178 },
  { date: '27 Nov', weight: 195 },
  { date: '28 Nov', weight: 210 },
  { date: '29 Nov', weight: 156 },
];

const violationTypes = [
  { type: 'Unauthorized Access', count: 3 },
  { type: 'Incomplete Clearance', count: 5 },
  { type: 'Missing Documentation', count: 2 },
  { type: 'Expired License', count: 1 },
  { type: 'Safety Distance', count: 4 },
];

const misfireAlerts = [
  { id: 'MF-847', mine: 'Singareni Mine', location: 'Level 3, Tunnel 5', time: '2 hours ago', severity: 'Critical' },
  { id: 'MF-841', mine: 'Talcher Coalfields', location: 'Section C', time: '1 day ago', severity: 'Major' },
];

export default function BlastingSafety() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-white mb-2">Blasting Safety Module</h1>
        <p className="text-gray-400">Monitor and manage all blasting operations and shot-firer activities</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Bomb className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">847</div>
          <div className="text-sm text-gray-400">Total Blasts This Month</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">2</div>
          <div className="text-sm text-gray-400">Active Misfires</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">99.7%</div>
          <div className="text-sm text-gray-400">Success Rate</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">284</div>
          <div className="text-sm text-gray-400">Authorized Shot-Firers</div>
        </div>
      </div>

      {/* Misfire Alerts */}
      {misfireAlerts.length > 0 && (
        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h3 className="text-xl text-white">Active Misfire Alerts</h3>
          </div>
          <div className="space-y-3">
            {misfireAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-red-500/20">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white">{alert.id}</span>
                    <Badge className="bg-red-500/20 text-red-400">{alert.severity}</Badge>
                  </div>
                  <div className="text-sm text-gray-400">{alert.mine} • {alert.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-2">{alert.time}</div>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Charge Weight Trend & Violations */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Explosive Charge Weight Trend</h3>
            <p className="text-sm text-gray-400">Daily total charge weight (kg)</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chargeWeightData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="date" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Line type="monotone" dataKey="weight" stroke="#f97316" strokeWidth={3} dot={{ fill: '#f97316', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Violation Breakdown</h3>
            <p className="text-sm text-gray-400">Current month violations by type</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={violationTypes} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis type="category" dataKey="type" stroke="#94a3b8" width={150} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Bar dataKey="count" fill="#eab308" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Blasting Logs Table */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl text-white mb-1">Recent Blasting Logs</h3>
            <p className="text-sm text-gray-400">Latest blasting operations across all mines</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Export Report
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm text-gray-400 pb-3">ID</th>
                <th className="text-left text-sm text-gray-400 pb-3">Mine & Location</th>
                <th className="text-left text-sm text-gray-400 pb-3">Shot-Firer</th>
                <th className="text-left text-sm text-gray-400 pb-3">Date & Time</th>
                <th className="text-left text-sm text-gray-400 pb-3">Charge</th>
                <th className="text-left text-sm text-gray-400 pb-3">Holes</th>
                <th className="text-left text-sm text-gray-400 pb-3">Clearance</th>
                <th className="text-left text-sm text-gray-400 pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {blastingLogs.map((log, idx) => (
                <tr key={log.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 text-sm text-gray-300">{log.id}</td>
                  <td className="py-4">
                    <div className="text-sm text-white">{log.mine}</div>
                    <div className="text-xs text-gray-400">{log.location}</div>
                  </td>
                  <td className="py-4">
                    <div className="text-sm text-white">{log.shotFirer}</div>
                    <div className="text-xs text-gray-400">{log.license}</div>
                  </td>
                  <td className="py-4">
                    <div className="text-sm text-white">{log.date}</div>
                    <div className="text-xs text-gray-400">{log.time}</div>
                  </td>
                  <td className="py-4 text-sm text-white">{log.chargeWeight}</td>
                  <td className="py-4 text-sm text-white">{log.holes}</td>
                  <td className="py-4 text-sm text-white">{log.clearanceTime}</td>
                  <td className="py-4">
                    <Badge className={
                      log.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30 border'
                        : 'bg-red-500/20 text-red-400 border-red-500/30 border'
                    }>
                      {log.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shot-Firer Authorization Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <User className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl text-white">Shot-Firer Authorization</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-400 mb-2">License Status</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: '96%' }}></div>
                </div>
                <span className="text-sm text-white">96%</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">273 active, 11 pending renewal</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Training Completion</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400" style={{ width: '89%' }}></div>
                </div>
                <span className="text-sm text-white">89%</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">253 certified, 31 in training</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-400">11 Licenses Expiring Soon</span>
              </div>
              <div className="text-xs text-gray-400">Action required within 30 days</div>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">45 New Certifications This Month</span>
              </div>
              <div className="text-xs text-gray-400">15.8% increase from last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
