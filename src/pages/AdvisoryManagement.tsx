import { useState } from 'react';
import { FileText, Upload, Send, Calendar, AlertCircle, CheckCircle, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';

const advisories = [
  {
    id: 'ADV-2025-0847',
    title: 'Updated PPE Requirements for Underground Operations',
    type: 'Safety Protocol',
    priority: 'High',
    date: '2025-11-28',
    status: 'Published',
    mines: ['All Mines'],
    views: 2847,
    content: 'All underground operations must ensure workers are equipped with enhanced respiratory protection systems...'
  },
  {
    id: 'ADV-2025-0846',
    title: 'Monsoon Safety Guidelines',
    type: 'Seasonal Alert',
    priority: 'Critical',
    date: '2025-11-25',
    status: 'Published',
    mines: ['Eastern Region'],
    views: 3156,
    content: 'With monsoon season approaching, all mines in eastern region must implement enhanced drainage protocols...'
  },
  {
    id: 'ADV-2025-0845',
    title: 'Machinery Maintenance Schedule Updates',
    type: 'Operational',
    priority: 'Medium',
    date: '2025-11-22',
    status: 'Published',
    mines: ['All Mines'],
    views: 1923,
    content: 'Updated maintenance schedules for all heavy machinery to be implemented from December 1, 2025...'
  },
  {
    id: 'ADV-2025-0844',
    title: 'Emergency Evacuation Drill Notice',
    type: 'Training',
    priority: 'High',
    date: '2025-11-20',
    status: 'Scheduled',
    mines: ['Jharia, Raniganj'],
    views: 0,
    content: 'Mandatory emergency evacuation drill scheduled for December 5, 2025...'
  },
  {
    id: 'ADV-2025-0843',
    title: 'New Gas Detection System Implementation',
    type: 'Equipment',
    priority: 'Critical',
    date: '2025-11-18',
    status: 'Draft',
    mines: ['Underground Mines'],
    views: 0,
    content: 'Rollout plan for advanced AI-powered gas detection systems across all underground operations...'
  }
];

const emergencyTemplates = [
  { name: 'Immediate Evacuation', icon: '🚨', severity: 'Critical' },
  { name: 'Gas Leak Alert', icon: '⚠️', severity: 'Critical' },
  { name: 'Roof Fall Warning', icon: '🏗️', severity: 'High' },
  { name: 'Equipment Failure', icon: '🔧', severity: 'Medium' },
];

export default function AdvisoryManagement() {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'High': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-500/20 text-green-400';
      case 'Scheduled': return 'bg-blue-500/20 text-blue-400';
      case 'Draft': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-white mb-2">DGMS Advisory Management</h1>
          <p className="text-gray-400">Create, manage, and distribute safety advisories and notices</p>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileText className="w-4 h-4 mr-2" />
              Create Advisory
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Advisory</DialogTitle>
              <DialogDescription className="text-gray-400">
                Compose and publish a new safety advisory or notice
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="title">Advisory Title</Label>
                <Input
                  id="title"
                  placeholder="Enter advisory title"
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10 text-white">
                      <SelectItem value="safety">Safety Protocol</SelectItem>
                      <SelectItem value="seasonal">Seasonal Alert</SelectItem>
                      <SelectItem value="operational">Operational</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="equipment">Equipment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white mt-2">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10 text-white">
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="mines">Target Mines</Label>
                <Input
                  id="mines"
                  placeholder="All Mines, or specific mine names"
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Enter advisory content..."
                  rows={6}
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="attachment">Attach Document</Label>
                <div className="mt-2 border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:border-blue-500/30 transition-all cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (max 10MB)</p>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4 mr-2" />
                  Publish Now
                </Button>
                <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5">
                  Save as Draft
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">847</div>
          <div className="text-sm text-gray-400">Total Advisories</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">823</div>
          <div className="text-sm text-gray-400">Published</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">15</div>
          <div className="text-sm text-gray-400">Critical Alerts</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">98.5%</div>
          <div className="text-sm text-gray-400">Read Rate</div>
        </div>
      </div>

      {/* Emergency Alert Templates */}
      <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <AlertCircle className="w-6 h-6 text-red-400" />
          <div>
            <h3 className="text-xl text-white">Emergency Alert Templates</h3>
            <p className="text-sm text-gray-300">Quick send critical alerts to all mines</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyTemplates.map((template) => (
            <Button
              key={template.name}
              variant="outline"
              className="h-auto p-4 border-white/10 text-white hover:bg-white/10 flex flex-col items-center gap-2"
            >
              <div className="text-4xl">{template.icon}</div>
              <div className="text-sm text-center">{template.name}</div>
              <Badge className={`${getPriorityColor(template.severity)} border text-xs`}>
                {template.severity}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Advisory List */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl text-white mb-1">Recent Advisories</h3>
            <p className="text-sm text-gray-400">Latest notices and safety communications</p>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-white/10 text-white">
              <SelectItem value="all">All Advisories</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4">
          {advisories.map((advisory) => (
            <div key={advisory.id} className="p-5 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-white text-lg">{advisory.title}</h4>
                    <Badge className={`${getPriorityColor(advisory.priority)} border`}>
                      {advisory.priority}
                    </Badge>
                    <Badge className={getStatusColor(advisory.status)}>
                      {advisory.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{advisory.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {advisory.date}
                    </span>
                    <span>•</span>
                    <span>{advisory.type}</span>
                    <span>•</span>
                    <span>{advisory.mines.join(', ')}</span>
                    {advisory.views > 0 && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {advisory.views} views
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-3 border-t border-white/10">
                <Button size="sm" variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                {advisory.status === 'Draft' && (
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Publish
                  </Button>
                )}
                {advisory.status === 'Published' && (
                  <Button size="sm" variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    <Send className="w-4 h-4 mr-2" />
                    Resend
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-xl text-white mb-6">Advisory Timeline</h3>
        <div className="space-y-4">
          {advisories.slice(0, 4).map((advisory, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${
                  advisory.priority === 'Critical' ? 'bg-red-500' :
                  advisory.priority === 'High' ? 'bg-orange-500' : 'bg-blue-500'
                }`}></div>
                {idx < 3 && <div className="w-0.5 h-full bg-white/10 mt-2"></div>}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white">{advisory.title}</span>
                  <Badge className={`${getPriorityColor(advisory.priority)} border text-xs`}>
                    {advisory.priority}
                  </Badge>
                </div>
                <div className="text-sm text-gray-400">{advisory.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
