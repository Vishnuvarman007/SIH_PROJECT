import { useState } from 'react';
import { ClipboardCheck, Upload, Camera, FileDown, Plus, X } from 'lucide-react';
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

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  status: 'pass' | 'fail' | 'na' | null;
}

const initialChecklist: ChecklistItem[] = [
  { id: '1', category: 'PPE Compliance', item: 'All workers wearing helmets', status: null },
  { id: '2', category: 'PPE Compliance', item: 'Safety boots properly used', status: null },
  { id: '3', category: 'PPE Compliance', item: 'High visibility vests worn', status: null },
  { id: '4', category: 'Gas Monitoring', item: 'Methane sensors operational', status: null },
  { id: '5', category: 'Gas Monitoring', item: 'Oxygen levels adequate', status: null },
  { id: '6', category: 'Gas Monitoring', item: 'CO detectors functioning', status: null },
  { id: '7', category: 'Ventilation', item: 'Airflow meets standards', status: null },
  { id: '8', category: 'Ventilation', item: 'Fans operational', status: null },
  { id: '9', category: 'Equipment', item: 'Machinery maintenance up to date', status: null },
  { id: '10', category: 'Equipment', item: 'Fire extinguishers accessible', status: null },
  { id: '11', category: 'Emergency', item: 'Emergency exits clearly marked', status: null },
  { id: '12', category: 'Emergency', item: 'First aid kits stocked', status: null },
  { id: '13', category: 'Documentation', item: 'Training records current', status: null },
  { id: '14', category: 'Documentation', item: 'Safety logs maintained', status: null },
];

export default function InspectionReport() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);
  const [uploadedPhotos, setUploadedPhotos] = useState<number>(0);
  const [formData, setFormData] = useState({
    mine: '',
    inspector: '',
    date: '',
    area: '',
    findings: '',
    recommendations: ''
  });

  const updateChecklistItem = (id: string, status: 'pass' | 'fail' | 'na') => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, status } : item
    ));
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'pass': return 'bg-green-500';
      case 'fail': return 'bg-red-500';
      case 'na': return 'bg-gray-500';
      default: return 'bg-slate-700';
    }
  };

  const categories = Array.from(new Set(checklist.map(item => item.category)));

  const stats = {
    pass: checklist.filter(item => item.status === 'pass').length,
    fail: checklist.filter(item => item.status === 'fail').length,
    na: checklist.filter(item => item.status === 'na').length,
    pending: checklist.filter(item => item.status === null).length
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-white mb-2">Inspection Report Generator</h1>
        <p className="text-gray-400">Create comprehensive safety inspection reports with photo documentation</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-4">
          <div className="text-3xl text-green-400 mb-1">{stats.pass}</div>
          <div className="text-sm text-gray-300">Passed</div>
        </div>
        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-4">
          <div className="text-3xl text-red-400 mb-1">{stats.fail}</div>
          <div className="text-sm text-gray-300">Failed</div>
        </div>
        <div className="bg-gray-500/10 backdrop-blur-sm border border-gray-500/30 rounded-xl p-4">
          <div className="text-3xl text-gray-400 mb-1">{stats.na}</div>
          <div className="text-sm text-gray-300">N/A</div>
        </div>
        <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4">
          <div className="text-3xl text-blue-400 mb-1">{stats.pending}</div>
          <div className="text-sm text-gray-300">Pending</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Inspection Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl text-white mb-6">Inspection Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mine" className="text-white">Mine Name</Label>
                <Select onValueChange={(value) => setFormData({...formData, mine: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white mt-2">
                    <SelectValue placeholder="Select mine" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/10 text-white">
                    <SelectItem value="jharia">Jharia Coal Mine</SelectItem>
                    <SelectItem value="raniganj">Raniganj Coal Field</SelectItem>
                    <SelectItem value="singareni">Singareni Collieries</SelectItem>
                    <SelectItem value="korba">Korba Coal Field</SelectItem>
                    <SelectItem value="talcher">Talcher Coalfields</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="inspector" className="text-white">Inspector Name</Label>
                <Input
                  id="inspector"
                  value={formData.inspector}
                  onChange={(e) => setFormData({...formData, inspector: e.target.value})}
                  placeholder="Enter inspector name"
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-white">Inspection Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="area" className="text-white">Inspection Area</Label>
                <Input
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  placeholder="e.g., Underground Level 3"
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
            </div>
          </div>

          {/* Safety Checklist */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <ClipboardCheck className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl text-white">Safety Checklist</h3>
            </div>
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category}>
                  <h4 className="text-white mb-3 pb-2 border-b border-white/10">{category}</h4>
                  <div className="space-y-2">
                    {checklist
                      .filter(item => item.category === category)
                      .map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <span className="text-gray-300 text-sm">{item.item}</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => updateChecklistItem(item.id, 'pass')}
                              className={`w-8 h-8 rounded ${
                                item.status === 'pass' 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-white/5 text-gray-400 hover:bg-green-500/20'
                              } flex items-center justify-center transition-all`}
                            >
                              ✓
                            </button>
                            <button
                              onClick={() => updateChecklistItem(item.id, 'fail')}
                              className={`w-8 h-8 rounded ${
                                item.status === 'fail' 
                                  ? 'bg-red-500 text-white' 
                                  : 'bg-white/5 text-gray-400 hover:bg-red-500/20'
                              } flex items-center justify-center transition-all`}
                            >
                              ✗
                            </button>
                            <button
                              onClick={() => updateChecklistItem(item.id, 'na')}
                              className={`w-8 h-8 rounded ${
                                item.status === 'na' 
                                  ? 'bg-gray-500 text-white' 
                                  : 'bg-white/5 text-gray-400 hover:bg-gray-500/20'
                              } flex items-center justify-center transition-all text-xs`}
                            >
                              N/A
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Findings & Recommendations */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl text-white mb-6">Findings & Recommendations</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="findings" className="text-white">Key Findings</Label>
                <Textarea
                  id="findings"
                  value={formData.findings}
                  onChange={(e) => setFormData({...formData, findings: e.target.value})}
                  placeholder="Describe key findings from the inspection..."
                  rows={4}
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="recommendations" className="text-white">Recommendations</Label>
                <Textarea
                  id="recommendations"
                  value={formData.recommendations}
                  onChange={(e) => setFormData({...formData, recommendations: e.target.value})}
                  placeholder="List recommendations and corrective actions..."
                  rows={4}
                  className="bg-white/5 border-white/10 text-white mt-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Photo Upload */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl text-white">Photo Documentation</h3>
            </div>
            <div 
              onClick={() => setUploadedPhotos(prev => prev + 1)}
              className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-purple-500/30 transition-all cursor-pointer mb-4"
            >
              <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-1">Click to upload photos</p>
              <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
            </div>
            {uploadedPhotos > 0 && (
              <div className="space-y-2">
                {Array.from({ length: uploadedPhotos }).map((_, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded flex items-center justify-center">
                        <Camera className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-white">Photo {idx + 1}.jpg</div>
                        <div className="text-xs text-gray-400">2.4 MB</div>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedPhotos(prev => prev - 1);
                      }}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Auto Summary */}
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-white mb-3">AI Auto-Summary</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• <strong className="text-blue-400">{stats.pass}</strong> items passed inspection</p>
              <p>• <strong className="text-red-400">{stats.fail}</strong> items require immediate attention</p>
              <p>• <strong className="text-purple-400">{uploadedPhotos}</strong> photos documented</p>
              <p>• Overall compliance: <strong className="text-green-400">
                {((stats.pass / (stats.pass + stats.fail + stats.na)) * 100).toFixed(0)}%
              </strong></p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
              <FileDown className="w-4 h-4 mr-2" />
              Generate PDF Report
            </Button>
            <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 h-12">
              Save as Draft
            </Button>
            <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 h-12">
              Send to Mine Manager
            </Button>
          </div>

          {/* Recent Reports */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-white mb-4">Recent Reports</h3>
            <div className="space-y-2">
              {[
                { mine: 'Jharia Coal Mine', date: '2025-11-25', status: 'Pass' },
                { mine: 'Raniganj Mine', date: '2025-11-22', status: 'Pass' },
                { mine: 'Korba Coal Field', date: '2025-11-20', status: 'Fail' }
              ].map((report, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white">{report.mine}</span>
                    <Badge className={
                      report.status === 'Pass' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30 border'
                        : 'bg-red-500/20 text-red-400 border-red-500/30 border'
                    }>
                      {report.status}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-400">{report.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
