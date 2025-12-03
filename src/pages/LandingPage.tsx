import { Link } from 'react-router';
import { Shield, Activity, Users, BarChart3, CheckCircle, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-white">DGMS</div>
              <div className="text-xs text-gray-400">Ministry of Coal</div>
            </div>
          </div>
          <Link to="/login">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Login as Officer
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm mb-6">
              Government of India Initiative
            </div>
            <h1 className="text-5xl text-white mb-6">
              DGMS Intelligent Mine Safety Monitoring System
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI-powered real-time safety monitoring for mining operations across India. 
              Ensuring worker safety through advanced analytics, hazard detection, and compliance tracking.
            </p>
            <div className="flex gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  Login as DGMS Officer
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1761141535933-7f8e9f468865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGFzaGJvYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ0MDUwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dashboard Preview"
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">
            Comprehensive Safety Monitoring
          </h2>
          <p className="text-xl text-gray-400">
            Advanced features to keep mines safe and compliant
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Activity,
              title: 'Real-Time Monitoring',
              description: 'Live tracking of gas levels, machinery status, and environmental conditions',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Bell,
              title: 'Instant Alerts',
              description: 'Immediate notifications for hazards, violations, and critical incidents',
              color: 'from-orange-500 to-red-500'
            },
            {
              icon: BarChart3,
              title: 'AI Analytics',
              description: 'Predictive insights on accident risks and safety trends',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: CheckCircle,
              title: 'Compliance Tracking',
              description: 'Monitor PPE usage, training completion, and safety protocols',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: Users,
              title: 'Worker Safety',
              description: 'Track individual safety records and training certifications',
              color: 'from-yellow-500 to-orange-500'
            },
            {
              icon: Shield,
              title: 'Incident Management',
              description: 'Complete documentation and analysis of safety incidents',
              color: 'from-indigo-500 to-blue-500'
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-900/40 to-orange-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '2,847', label: 'Registered Mines' },
              { value: '98.5%', label: 'Safety Score' },
              { value: '1.2M+', label: 'Workers Protected' },
              { value: '24/7', label: 'Real-Time Monitoring' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">DGMS</div>
              </div>
              <p className="text-gray-400 text-sm">
                Directorate General of Mines Safety<br />
                Ministry of Coal, Government of India
              </p>
            </div>
            <div>
              <div className="text-white mb-4">Quick Links</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About DGMS</div>
                <div>Safety Guidelines</div>
                <div>Training Programs</div>
                <div>Contact Support</div>
              </div>
            </div>
            <div>
              <div className="text-white mb-4">Contact</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Email: support@dgms.gov.in</div>
                <div>Phone: 1800-XXX-XXXX</div>
                <div>Emergency: 112</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
            © 2025 DGMS - Directorate General of Mines Safety. All rights reserved. | In partnership with CMPDI
          </div>
        </div>
      </footer>
    </div>
  );
}
