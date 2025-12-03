import { MapPin, Users, Star, Building, TrendingUp, Calendar, Shield } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const mines = [
  {
    id: 'MN-2847',
    name: 'Jharia Coal Mine',
    location: 'Dhanbad, Jharkhand',
    type: 'Underground',
    safetyRating: 'A+',
    ratingScore: 96,
    manager: 'Rajesh Kumar',
    workers: 2847,
    established: '1895',
    lastInspection: '2025-11-15',
    status: 'Operational',
    production: '2.4M tonnes/year',
    image: 'https://images.unsplash.com/photo-1740156118334-5ffeb7832eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ0MDA5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'MN-1923',
    name: 'Raniganj Coal Field',
    location: 'West Bengal',
    type: 'Open Cast',
    safetyRating: 'A',
    ratingScore: 92,
    manager: 'Priya Sharma',
    workers: 1923,
    established: '1774',
    lastInspection: '2025-11-20',
    status: 'Operational',
    production: '1.8M tonnes/year',
    image: 'https://images.unsplash.com/photo-1649034872337-feaa751786ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBtYWNoaW5lcnklMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NDA1MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'MN-3156',
    name: 'Singareni Collieries',
    location: 'Telangana',
    type: 'Underground',
    safetyRating: 'A+',
    ratingScore: 98,
    manager: 'Ravi Patel',
    workers: 3156,
    established: '1945',
    lastInspection: '2025-11-25',
    status: 'Operational',
    production: '3.2M tonnes/year',
    image: 'https://images.unsplash.com/photo-1641571482095-b4c324187adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lJTIwdW5kZXJncm91bmQlMjB0dW5uZWx8ZW58MXx8fHwxNzY0NDA1MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'MN-2741',
    name: 'Korba Coal Field',
    location: 'Chhattisgarh',
    type: 'Open Cast',
    safetyRating: 'B+',
    ratingScore: 87,
    manager: 'Sunita Verma',
    workers: 2741,
    established: '1965',
    lastInspection: '2025-11-10',
    status: 'Operational',
    production: '2.1M tonnes/year',
    image: 'https://images.unsplash.com/photo-1740156118334-5ffeb7832eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ0MDA5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'MN-1847',
    name: 'Talcher Coalfields',
    location: 'Odisha',
    type: 'Open Cast',
    safetyRating: 'A',
    ratingScore: 93,
    manager: 'Mohammed Ali',
    workers: 1847,
    established: '1992',
    lastInspection: '2025-11-18',
    status: 'Operational',
    production: '1.5M tonnes/year',
    image: 'https://images.unsplash.com/photo-1649034872337-feaa751786ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBtYWNoaW5lcnklMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NDA1MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'MN-2658',
    name: 'Wardha Valley Coalfield',
    location: 'Maharashtra',
    type: 'Underground',
    safetyRating: 'B',
    ratingScore: 84,
    manager: 'Anita Desai',
    workers: 2658,
    established: '1908',
    lastInspection: '2025-11-05',
    status: 'Operational',
    production: '1.9M tonnes/year',
    image: 'https://images.unsplash.com/photo-1641571482095-b4c324187adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lJTIwdW5kZXJncm91bmQlMjB0dW5uZWx8ZW58MXx8fHwxNzY0NDA1MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function MineRegistry() {
  const getRatingColor = (rating: string) => {
    if (rating.startsWith('A')) return 'from-green-500 to-emerald-600';
    if (rating.startsWith('B')) return 'from-yellow-500 to-orange-500';
    if (rating.startsWith('C')) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-red-700';
  };

  const getRatingBadge = (rating: string) => {
    if (rating.startsWith('A')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (rating.startsWith('B')) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    if (rating.startsWith('C')) return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-white mb-2">Mine Registry</h1>
          <p className="text-gray-400">Comprehensive directory of all registered mining operations</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Register New Mine
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">2,847</div>
          <div className="text-sm text-gray-400">Total Registered Mines</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">2,789</div>
          <div className="text-sm text-gray-400">Operational Mines</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">1.2M</div>
          <div className="text-sm text-gray-400">Total Workforce</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl text-white mb-1">92.4%</div>
          <div className="text-sm text-gray-400">Average Safety Rating</div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <Input
          placeholder="Search by mine name, location, or ID..."
          className="flex-1 bg-white/5 border-white/10 text-white"
        />
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
          Filters
        </Button>
      </div>

      {/* Mine Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mines.map((mine) => (
          <div key={mine.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group">
            {/* Image */}
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={mine.image}
                alt={mine.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <Badge className={`absolute top-4 right-4 ${getRatingBadge(mine.safetyRating)} border`}>
                {mine.safetyRating}
              </Badge>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-1">{mine.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {mine.location}
                  </div>
                </div>
              </div>

              {/* Safety Score */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Safety Score</span>
                  <span className={`${
                    mine.ratingScore >= 90 ? 'text-green-400' :
                    mine.ratingScore >= 80 ? 'text-yellow-400' : 'text-orange-400'
                  }`}>
                    {mine.ratingScore}%
                  </span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getRatingColor(mine.safetyRating)}`}
                    style={{ width: `${mine.ratingScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div>
                  <div className="text-gray-400">Type</div>
                  <div className="text-white">{mine.type}</div>
                </div>
                <div>
                  <div className="text-gray-400">Manager</div>
                  <div className="text-white">{mine.manager}</div>
                </div>
                <div>
                  <div className="text-gray-400">Workers</div>
                  <div className="text-white">{mine.workers.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-gray-400">Production</div>
                  <div className="text-white">{mine.production}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Established</span>
                  <span className="text-gray-300">{mine.established}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Inspection</span>
                  <span className="text-green-400">{mine.lastInspection}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mine ID</span>
                  <span className="text-gray-300">{mine.id}</span>
                </div>
              </div>

              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                View Full Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Regional Overview */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl text-white">Regional Distribution</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { region: 'Eastern', mines: 1247, workers: 487000, avgRating: 94 },
            { region: 'Western', mines: 856, workers: 342000, avgRating: 91 },
            { region: 'Northern', mines: 423, workers: 198000, avgRating: 89 },
            { region: 'Southern', mines: 321, workers: 173000, avgRating: 95 }
          ].map((region) => (
            <div key={region.region} className="p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-white mb-3">{region.region} Region</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mines</span>
                  <span className="text-white">{region.mines.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Workers</span>
                  <span className="text-white">{(region.workers / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg. Rating</span>
                  <span className={`${
                    region.avgRating >= 90 ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {region.avgRating}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-5 h-5 text-green-400" />
            <h3 className="text-white">Top Performers</h3>
          </div>
          <p className="text-gray-300 text-sm">
            <strong className="text-green-400">234 mines</strong> achieved A+ safety rating this quarter
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h3 className="text-white">Improvement</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Overall mine safety improved by <strong className="text-blue-400">8.5%</strong> year-over-year
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-orange-400" />
            <h3 className="text-white">Inspections Due</h3>
          </div>
          <p className="text-gray-300 text-sm">
            <strong className="text-orange-400">47 mines</strong> scheduled for inspection this month
          </p>
        </div>
      </div>
    </div>
  );
}
