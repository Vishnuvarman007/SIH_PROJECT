import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, Lock, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOTP] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleOTPVerify = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-600/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1726262693471-06c423669a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lJTIwc2FmZXR5JTIwd29ya2VyJTIwaGVsbWV0fGVufDF8fHx8MTc2NDQwNTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Mine Safety"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12 text-white z-10">
          <h2 className="text-4xl mb-4">Protecting Lives Underground</h2>
          <p className="text-xl text-gray-300">
            Advanced AI-powered monitoring for comprehensive mine safety across India
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-2xl text-white">DGMS</div>
              <div className="text-sm text-gray-400">Mine Safety Portal</div>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl text-white mb-2">
                Officer Login
              </h1>
              <p className="text-gray-400">
                Access the DGMS Intelligent Monitoring System
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="officer@dgms.gov.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/10 bg-white/5" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                size="lg"
              >
                Login with OTP
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-sm text-gray-400">
                Secure authentication powered by Government of India
              </p>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            Protected by enterprise-grade security
          </div>
        </div>
      </div>

      {/* OTP Dialog */}
      <Dialog open={showOTP} onOpenChange={setShowOTP}>
        <DialogContent className="bg-slate-900 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Verify OTP</DialogTitle>
            <DialogDescription className="text-gray-400">
              Enter the 6-digit code sent to {email}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="otp">One-Time Password</Label>
              <Input
                id="otp"
                type="text"
                placeholder="000000"
                maxLength={6}
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                className="text-center text-2xl tracking-widest bg-white/5 border-white/10 text-white mt-2"
              />
            </div>
            <Button 
              onClick={handleOTPVerify}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700"
              size="lg"
            >
              Verify & Login
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-gray-400 hover:text-white"
            >
              Resend OTP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
