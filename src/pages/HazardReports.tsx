import { useState } from 'react';
import { AlertTriangle, Filter, Search, Image, Video, MapPin, User, Calendar, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const hazardReports = [
  {
    id: 'HZ-2025-1847',
    type: 'Gas Overload',
    mine: 'Jharia Coal Mine',
    location: 'Underground Level 3, Section B',
    severity: 'Critical',
    reporter: 'Amit Kumar',
    role: 'Safety Inspector',
    date: '2025-11-29 08:45',
    status: 'Under Review',
    hasImage: true,
    hasVideo: true,
    description: 'Methane levels detected at 2.1% - exceeding safe limit of 1.5%'
  },
  {
    id: 'HZ-2025-1846',
    type: 'Roof Fall Risk',
    mine: 'Raniganj Mine',
    location: 'Tunnel 7, Junction Point',
    severity: 'Critical',
    reporter: 'Priya Sharma',
    role: 'Mine Manager',
    date: '2025-11-29 07:30',
    status: 'Action Required',
    hasImage: true,
    hasVideo: false,
    description: 'Visible cracks in roof structure, immediate reinforcement needed'
  },
  {
    id: 'HZ-2025-1845',
    type: 'Machinery Fault',
    mine: 'Singareni Mine',
    location: 'Excavation Zone A',
    severity: 'Major',
    reporter: 'Ravi Patel',
    role: 'Equipment Operator',
    date: '2025-11-29 06:15',
    status: 'Resolved',
    hasImage: true,
    hasVideo: true,
    description: 'Hydraulic system failure in excavator, replaced faulty pump'
  },
  {
    id: 'HZ-2025-1844',
    type: 'PPE Violation',
    mine: 'Korba Coal Field',
    location: 'Surface Operations',
    severity: 'Minor',
    reporter: 'Sunita Verma',
    role: 'Safety Officer',
    date: '2025-11-28 16:20',
    status: 'Notice Sent',
    hasImage: true,
    hasVideo: false,
    description: '3 workers found without proper helmet during inspection'
  },
  {
    id: 'HZ-2025-1843',
    type: 'Ventilation Issue',
    mine: 'Talcher Coalfields',
    location: 'Underground Level 2',
    severity: 'Major',
    reporter: 'Mohammed Ali',
    role: 'Ventilation Technician',
    date: '2025-11-28 14:10',
    status: 'Under Review',
    hasImage: false,
    hasVideo: true,
    description: 'Fan motor overheating, reduced airflow to 60% capacity'
  }
];

export default function HazardReports() {
  const [selectedReport, setSelectedReport] = useState(hazardReports[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Major': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Minor': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-blue-500/20 text-blue-400';
      case 'Action Required': return 'bg-red-500/20 text-red-400';
      case 'Resolved': return 'bg-green-500/20 text-green-400';
      case 'Notice Sent': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-white mb-2">Hazard Reports</h1>
        <p className="text-gray-400">Review and manage safety hazard reports from all mines</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search by ID, mine, or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Severity" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900 border-white/10 text-white">
            <SelectItem value="all">All Severities</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="major">Major</SelectItem>
            <SelectItem value="minor">Minor</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900 border-white/10 text-white">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="review">Under Review</SelectItem>
            <SelectItem value="action">Action Required</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Reports List */}
        <div className="lg:col-span-2 space-y-3">
          {hazardReports.map((report) => (
            <div
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className={`p-5 bg-white/5 backdrop-blur-sm border rounded-xl cursor-pointer transition-all ${
                selectedReport.id === report.id
                  ? 'border-blue-500 bg-white/10'
                  : 'border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-5 h-5 mt-1 ${
                    report.severity === 'Critical' ? 'text-red-400' : 
                    report.severity === 'Major' ? 'text-orange-400' : 'text-yellow-400'
                  }`} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white">{report.type}</span>
                      <Badge className={`${getSeverityColor(report.severity)} border`}>
                        {report.severity}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-400">{report.mine}</div>
                  </div>
                </div>
                <Badge className={getStatusColor(report.status)}>
                  {report.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-300 mb-3">{report.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{report.id}</span>
                  <span>•</span>
                  <span>{report.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  {report.hasImage && <Image className="w-4 h-4 text-blue-400" />}
                  {report.hasVideo && <Video className="w-4 h-4 text-purple-400" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-fit sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl text-white">Report Details</h3>
            <Badge className={`${getSeverityColor(selectedReport.severity)} border`}>
              {selectedReport.severity}
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-400 mb-1">Report ID</div>
              <div className="text-white">{selectedReport.id}</div>
            </div>

            <div>
              <div className="text-sm text-gray-400 mb-1">Hazard Type</div>
              <div className="text-white">{selectedReport.type}</div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1">Location</div>
                  <div className="text-white">{selectedReport.mine}</div>
                  <div className="text-sm text-gray-400">{selectedReport.location}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1">Reported By</div>
                  <div className="text-white">{selectedReport.reporter}</div>
                  <div className="text-sm text-gray-400">{selectedReport.role}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1">Date & Time</div>
                  <div className="text-white">{selectedReport.date}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1">Description</div>
                  <div className="text-white text-sm">{selectedReport.description}</div>
                </div>
              </div>
            </div>

            {/* Media */}
            {(selectedReport.hasImage || selectedReport.hasVideo) && (
              <div>
                <div className="text-sm text-gray-400 mb-3">Evidence</div>
                <div className="grid grid-cols-2 gap-3">
                  {selectedReport.hasImage && (
                    <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-white/10">
                      <Image className="w-8 h-8 text-gray-600" />
                    </div>
                  )}
                  {selectedReport.hasVideo && (
                    <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-white/10">
                      <Video className="w-8 h-8 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Mark as Critical
              </Button>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Send Notice
              </Button>
              <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                Request Follow-Up Evidence
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
