import { GraduationCap, Users, Video, FileCheck, TrendingUp, Award, Clock } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const workers = [
  { id: 'WKR-2847', name: 'Amit Kumar', role: 'Mine Operator', mine: 'Jharia Coal Mine', completion: 95, lastTraining: '2025-11-15', status: 'Active' },
  { id: 'WKR-1923', name: 'Priya Sharma', role: 'Safety Inspector', mine: 'Raniganj Mine', completion: 100, lastTraining: '2025-11-20', status: 'Certified' },
  { id: 'WKR-3156', name: 'Ravi Patel', role: 'Equipment Operator', mine: 'Singareni Mine', completion: 78, lastTraining: '2025-10-28', status: 'In Progress' },
  { id: 'WKR-2741', name: 'Sunita Verma', role: 'Supervisor', mine: 'Korba Coal Field', completion: 100, lastTraining: '2025-11-25', status: 'Certified' },
  { id: 'WKR-1847', name: 'Mohammed Ali', role: 'Technician', mine: 'Talcher Coalfields', completion: 62, lastTraining: '2025-09-15', status: 'Overdue' },
  { id: 'WKR-2658', name: 'Rajesh Singh', role: 'Mine Manager', mine: 'Jharia Coal Mine', completion: 100, lastTraining: '2025-11-18', status: 'Certified' },
];

const roleComplianceData = [
  { role: 'Mine Operators', compliance: 89 },
  { role: 'Safety Inspectors', compliance: 98 },
  { role: 'Equipment Operators', compliance: 85 },
  { role: 'Supervisors', compliance: 95 },
  { role: 'Technicians', compliance: 82 },
  { role: 'Managers', compliance: 100 },
];

const completionData = [
  { name: 'Completed', value: 892, color: '#10b981' },
  { name: 'In Progress', value: 178, color: '#3b82f6' },
  { name: 'Not Started', value: 45, color: '#6b7280' },
  { name: 'Overdue', value: 32, color: '#ef4444' },
];

const videoAnalytics = [
  { title: 'PPE Safety Protocols', views: 1247, avgScore: 92, duration: '15 min' },
  { title: 'Emergency Evacuation', views: 1189, avgScore: 89, duration: '20 min' },
  { title: 'Gas Detection Systems', views: 1056, avgScore: 94, duration: '18 min' },
  { title: 'Machinery Operation', views: 987, avgScore: 87, duration: '25 min' },
  { title: 'First Aid Basics', views: 945, avgScore: 91, duration: '12 min' },
];

const quizScores = [
  { category: 'Safety Basics', avgScore: 88, attempts: 1247 },
  { category: 'PPE Usage', avgScore: 92, attempts: 1189 },
  { category: 'Emergency Response', avgScore: 85, attempts: 1134 },
  { category: 'Equipment Handling', avgScore: 89, attempts: 1098 },
  { category: 'Hazard Recognition', avgScore: 91, attempts: 1076 },
];

export default function TrainingCompliance() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Certified': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Active': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Overdue': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-white mb-2">Training Compliance</h1>
        <p className="text-gray-400">Monitor worker training progress and safety certification status</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">1,247</div>
          <div className="text-sm text-gray-400">Total Workers Enrolled</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm px-2 py-1 rounded bg-green-500/20 text-green-400">
              +12%
            </div>
          </div>
          <div className="text-3xl text-white mb-1">892</div>
          <div className="text-sm text-gray-400">Certified Workers</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">89.7%</div>
          <div className="text-sm text-gray-400">Average Completion Rate</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">32</div>
          <div className="text-sm text-gray-400">Overdue Trainings</div>
        </div>
      </div>

      {/* Completion Overview & Role Compliance */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Training Status Distribution</h3>
            <p className="text-sm text-gray-400">Overall completion breakdown</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={completionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {completionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {completionData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-300">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl text-white mb-1">Role-wise Compliance Heatmap</h3>
            <p className="text-sm text-gray-400">Training completion by worker role</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={roleComplianceData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" domain={[0, 100]} />
              <YAxis type="category" dataKey="role" stroke="#94a3b8" width={130} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Bar dataKey="compliance" fill="#3b82f6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Worker List */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl text-white mb-1">Worker Training Status</h3>
            <p className="text-sm text-gray-400">Individual progress tracking</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Export Report
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm text-gray-400 pb-3">Worker ID</th>
                <th className="text-left text-sm text-gray-400 pb-3">Name & Role</th>
                <th className="text-left text-sm text-gray-400 pb-3">Mine</th>
                <th className="text-left text-sm text-gray-400 pb-3">Completion</th>
                <th className="text-left text-sm text-gray-400 pb-3">Last Training</th>
                <th className="text-left text-sm text-gray-400 pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 text-sm text-gray-300">{worker.id}</td>
                  <td className="py-4">
                    <div className="text-sm text-white">{worker.name}</div>
                    <div className="text-xs text-gray-400">{worker.role}</div>
                  </td>
                  <td className="py-4 text-sm text-gray-300">{worker.mine}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Progress value={worker.completion} className="h-2 w-24" />
                      <span className={`text-sm ${
                        worker.completion >= 90 ? 'text-green-400' :
                        worker.completion >= 70 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {worker.completion}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-300">{worker.lastTraining}</td>
                  <td className="py-4">
                    <Badge className={`${getStatusColor(worker.status)} border`}>
                      {worker.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Video Analytics */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Video className="w-5 h-5 text-purple-400" />
          <h3 className="text-xl text-white">Training Video Analytics</h3>
        </div>
        <div className="space-y-3">
          {videoAnalytics.map((video, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-white mb-1">{video.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl text-white mb-1">{video.avgScore}%</div>
                  <div className="text-xs text-gray-400">Avg. Score</div>
                </div>
              </div>
              <Progress value={video.avgScore} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Performance */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <FileCheck className="w-5 h-5 text-green-400" />
          <h3 className="text-xl text-white">Quiz Score Summary</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={quizScores}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="category" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            />
            <Legend />
            <Bar dataKey="avgScore" fill="#10b981" radius={[8, 8, 0, 0]} name="Average Score (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-white">Improvement</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Training completion increased by <strong className="text-green-400">18%</strong> this quarter
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-5 h-5 text-blue-400" />
            <h3 className="text-white">Top Performers</h3>
          </div>
          <p className="text-gray-300 text-sm">
            <strong className="text-blue-400">45 workers</strong> achieved perfect scores on all modules
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-5 h-5 text-orange-400" />
            <h3 className="text-white">Action Needed</h3>
          </div>
          <p className="text-gray-300 text-sm">
            <strong className="text-orange-400">32 workers</strong> have overdue training modules
          </p>
        </div>
      </div>
    </div>
  );
}
