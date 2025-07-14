
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Terminal } from 'lucide-react';

const AdminLogin = () => {
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(credentials.email, credentials.password);
    
    if (success) {
      toast({
        title: 'Acceso concedido',
        description: 'Bienvenido al sistema',
      });
      navigate('/admin');
    } else {
      toast({
        title: 'Acceso denegado',
        description: 'Credenciales incorrectas',
        variant: 'destructive',
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <Card className="bg-card/50 backdrop-blur-sm border-primary/30 border-glow">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-center text-primary text-glow">
              &gt; Sistema de acceso_
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Introduce tus credenciales para acceder al panel administrativo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  {t('admin.email')}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-primary/50 focus:border-primary"
                  placeholder="admin@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  {t('admin.password')}
                </label>
                <Input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-primary/50 focus:border-primary"
                  placeholder="••••••••"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/80 text-background font-bold border-glow"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <Terminal className="w-4 h-4 mr-2" />
                    {t('admin.login')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
