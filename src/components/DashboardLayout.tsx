import { Outlet, Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  BarChart3, 
  Bomb, 
  Wrench, 
  Wind,
  GraduationCap,
  FileText,
  MapPin,
  ClipboardCheck,
  Bell,
  Settings,
  ChevronDown,
  Shield,
  LogOut
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { path: '/dashboard/hazards', icon: AlertTriangle, label: 'Hazard Reports' },
  { path: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/dashboard/blasting', icon: Bomb, label: 'Blasting Safety' },
  { path: '/dashboard/machinery', icon: Wrench, label: 'Machinery' },
  { path: '/dashboard/ventilation', icon: Wind, label: 'Ventilation' },
  { path: '/dashboard/training', icon: GraduationCap, label: 'Training' },
  { path: '/dashboard/advisory', icon: FileText, label: 'Advisory' },
  { path: '/dashboard/mines', icon: MapPin, label: 'Mine Registry' },
  { path: '/dashboard/inspection', icon: ClipboardCheck, label: 'Inspection' },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 z-50">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white">DGMS</div>
              <div className="text-xs text-gray-400">Safety Portal</div>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Header */}
        <header className="sticky top-0 bg-black/40 backdrop-blur-xl border-b border-white/10 z-40">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white">
                    All Regions
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-900 border-white/10 text-white">
                  <DropdownMenuItem>Eastern Region</DropdownMenuItem>
                  <DropdownMenuItem>Western Region</DropdownMenuItem>
                  <DropdownMenuItem>Northern Region</DropdownMenuItem>
                  <DropdownMenuItem>Southern Region</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                  8
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-3 text-white hover:bg-white/5">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1655975719898-8f3432eed322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzY0NDA1MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080" />
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="text-sm">Rajesh Sharma</div>
                      <div className="text-xs text-gray-400">Senior DGMS Officer</div>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-900 border-white/10 text-white" align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Help & Support</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
