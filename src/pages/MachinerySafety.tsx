import { Wrench, AlertCircle, CheckCircle, Clock, TrendingUp, Activity } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';

const machinery = [
  {
    id: 'EXC-2847',
    type: 'Excavator',
    model: 'CAT 6030',
    mine: 'Jharia Coal Mine',
    health: 87,
    status: 'Operational',
    lastMaintenance: '2025-11-15',
    nextMaintenance: '2025-12-15',
    faults: 2,
    uptime: 94.2
  },
  {
    id: 'DMP-1923',
    type: 'Dumper',
    model: 'Komatsu HD785',
    mine: 'Raniganj Mine',
    health: 92,
    status: 'Operational',
    lastMaintenance: '2025-11-20',
    nextMaintenance: '2025-12-20',
    faults: 0,
    uptime: 98.5
  },
  {
    id: 'LOD-3156',
    type: 'Loader',
    model: 'Volvo L350',
    mine: 'Singareni Mine',
    health: 65,
    status: 'Warning',
    lastMaintenance: '2025-10-28',
    nextMaintenance: '2025-11-28',
    faults: 5,
    uptime: 78.3
  },
  {
    id: 'CNV-2741',
    type: 'Conveyor',
    model: 'Belt Conveyor 1200',
    mine: 'Korba Coal Field',
    health: 95,
    status: 'Operational',
    lastMaintenance: '2025-11-25',
    nextMaintenance: '2025-12-25',
    faults: 0,
    uptime: 99.1
  },
  {
    id: 'CRS-1847',
    type: 'Crusher',
    model: 'Jaw Crusher JC-1200',
    mine: 'Talcher Coalfields',
    health: 58,
    status: 'Critical',
    lastMaintenance: '2025-09-15',
    nextMaintenance: '2025-10-15',
    faults: 8,
    uptime: 62.7
  },
  {
    id: 'DRL-2658',
    type: 'Drill',
    model: 'Sandvik DR461i',
    mine: 'Jharia Coal Mine',
    health: 88,
    status: 'Operational',
    lastMaintenance: '2025-11-18',
    nextMaintenance: '2025-12-18',
    faults: 1,
    uptime: 95.8
  }
];

const faultAlerts = [
  { machine: 'LOD-3156', type: 'Hydraulic Leak', severity: 'Major', time: '1 hour ago' },
  { machine: 'CRS-1847', type: 'Motor Overheating', severity: 'Critical', time: '3 hours ago' },
  { machine: 'EXC-2847', type: 'Belt Tension Issue', severity: 'Minor', time: '6 hours ago' },
];

const maintenanceTimeline = [
  { date: '2025-12-01', machine: 'DMP-1923', type: 'Scheduled', status: 'Upcoming' },
  { date: '2025-12-05', machine: 'EXC-2847', type: 'Preventive', status: 'Upcoming' },
  { date: '2025-11-28', machine: 'LOD-3156', type: 'Emergency', status: 'Overdue' },
  { date: '2025-12-10', machine: 'CNV-2741', type: 'Inspection', status: 'Upcoming' },
  { date: '2025-11-20', machine: 'CRS-1847', type: 'Repair', status: 'Overdue' },
];

export default function MachinerySafety() {
  const getHealthColor = (health: number) => {
    if (health >= 85) return 'from-green-500 to-emerald-600';
    if (health >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-700';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operational': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-white mb-2">Machinery Safety Monitoring</h1>
        <p className="text-gray-400">Real-time health and maintenance tracking for all mining equipment</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">1,247</div>
          <div className="text-sm text-gray-400">Total Machinery Units</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">1,189</div>
          <div className="text-sm text-gray-400">Operational Units</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">58</div>
          <div className="text-sm text-gray-400">Active Fault Alerts</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">92.4%</div>
          <div className="text-sm text-gray-400">Average Uptime</div>
        </div>
      </div>

      {/* Active Fault Alerts */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <AlertCircle className="w-5 h-5 text-orange-400" />
          <h3 className="text-xl text-white">Active Fault Alerts</h3>
        </div>
        <div className="space-y-3">
          {faultAlerts.map((alert, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  alert.severity === 'Critical' ? 'bg-red-500 animate-pulse' : 
                  alert.severity === 'Major' ? 'bg-orange-500' : 'bg-yellow-500'
                }`}></div>
                <div>
                  <div className="text-white">{alert.type}</div>
                  <div className="text-sm text-gray-400">Machine ID: {alert.machine}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className={
                  alert.severity === 'Critical' ? 'bg-red-500/20 text-red-400 border-red-500/30 border' :
                  alert.severity === 'Major' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30 border' :
                  'bg-yellow-500/20 text-yellow-400 border-yellow-500/30 border'
                }>
                  {alert.severity}
                </Badge>
                <span className="text-sm text-gray-400 min-w-[100px] text-right">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Machinery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {machinery.map((machine) => (
          <div key={machine.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${getHealthColor(machine.health)} rounded-xl flex items-center justify-center`}>
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <Badge className={`${getStatusColor(machine.status)} border`}>
                {machine.status}
              </Badge>
            </div>

            <div className="mb-4">
              <h3 className="text-xl text-white mb-1">{machine.type}</h3>
              <p className="text-sm text-gray-400">{machine.model}</p>
              <p className="text-xs text-gray-500 mt-1">ID: {machine.id}</p>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Health Score</span>
                  <span className={`${
                    machine.health >= 85 ? 'text-green-400' :
                    machine.health >= 70 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {machine.health}%
                  </span>
                </div>
                <Progress value={machine.health} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Uptime</span>
                  <span className="text-blue-400">{machine.uptime}%</span>
                </div>
                <Progress value={machine.uptime} className="h-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div>
                <div className="text-gray-400">Mine</div>
                <div className="text-white">{machine.mine}</div>
              </div>
              <div>
                <div className="text-gray-400">Active Faults</div>
                <div className={`${machine.faults === 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {machine.faults}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Last Maintenance</span>
                <span className="text-gray-300">{machine.lastMaintenance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Next Due</span>
                <span className={`${
                  new Date(machine.nextMaintenance) < new Date() ? 'text-red-400' : 'text-green-400'
                }`}>
                  {machine.nextMaintenance}
                </span>
              </div>
            </div>

            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              View Details
            </Button>
          </div>
        ))}
      </div>

      {/* Maintenance Timeline */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl text-white">Maintenance Timeline</h3>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Schedule Maintenance
          </Button>
        </div>
        <div className="space-y-4">
          {maintenanceTimeline.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-center min-w-[80px]">
                <div className="text-lg text-white">{item.date.split('-')[2]}</div>
                <div className="text-xs text-gray-400">{item.date.split('-')[1]}/{item.date.split('-')[0]}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white">{item.machine}</span>
                  <Badge className="bg-blue-500/20 text-blue-400">
                    {item.type}
                  </Badge>
                </div>
              </div>
              <Badge className={
                item.status === 'Overdue' 
                  ? 'bg-red-500/20 text-red-400 border-red-500/30 border'
                  : 'bg-green-500/20 text-green-400 border-green-500/30 border'
              }>
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h3 className="text-white">Performance Trend</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Overall machinery performance improved by <strong className="text-blue-400">12.5%</strong> this quarter
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-orange-400" />
            <h3 className="text-white">Maintenance Due</h3>
          </div>
          <p className="text-gray-300 text-sm">
            <strong className="text-orange-400">23 units</strong> require maintenance within next 7 days
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <h3 className="text-white">Zero Downtime</h3>
          </div>
          <p className="text-gray-300 text-sm">
            <strong className="text-green-400">87 units</strong> maintained 100% uptime this month
          </p>
        </div>
      </div>
    </div>
  );
}
