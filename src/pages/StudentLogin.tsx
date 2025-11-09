import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Key, GraduationCap } from 'lucide-react';

const StudentLogin = () => {
  const navigate = useNavigate();
  const { loginStudent } = useAuth();
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    studentId: '',
    email: '',
    password: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login - in real app, validate credentials
    const savedUsers = localStorage.getItem('registeredStudents');
    const users = savedUsers ? JSON.parse(savedUsers) : [];
    
    const user = users.find((u: any) => u.email === loginData.email);
    
    if (user) {
      loginStudent(user);
      toast({
        title: 'Welcome back! 🎉',
        description: 'Successfully logged in',
      });
      navigate('/menu');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid credentials. Please register first.',
        variant: 'destructive',
      });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const savedUsers = localStorage.getItem('registeredStudents');
    const users = savedUsers ? JSON.parse(savedUsers) : [];
    
    const newUser = {
      name: registerData.name,
      studentId: registerData.studentId,
      email: registerData.email,
    };
    
    users.push(newUser);
    localStorage.setItem('registeredStudents', JSON.stringify(users));
    
    loginStudent(newUser);
    
    toast({
      title: 'Registration Successful! 🎊',
      description: `Welcome ${registerData.name}!`,
    });
    
    navigate('/menu');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-cream">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full gradient-warm mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Student Portal</h1>
          <p className="text-muted-foreground">Login or create your account</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="student@college.edu"
                    className="pl-10"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Login 🔐
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="register-name"
                    placeholder="John Doe"
                    className="pl-10"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-id">Student ID</Label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="register-id"
                    placeholder="STU2025001"
                    className="pl-10"
                    value={registerData.studentId}
                    onChange={(e) => setRegisterData({ ...registerData, studentId: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="student@college.edu"
                    className="pl-10"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Register 🆕
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default StudentLogin;
