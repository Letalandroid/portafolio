
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, User, LogOut } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { key: 'about', href: '#about' },
    { key: 'technologies', href: '#technologies' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ];

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-primary/30 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-glow">
          &gt; LetalAndroid_
        </Link>

        {!isAdminRoute && (
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="hover:text-primary transition-colors text-glow"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center space-x-4">
          <div className="flex border border-primary/50 rounded">
            <Button
              variant={language === 'es' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('es')}
              className="text-xs border-0"
            >
              ES
            </Button>
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="text-xs border-0"
            >
              EN
            </Button>
          </div>

          {user ? (
            <div className="flex items-center space-x-2">
              <Link to="/admin">
                <Button variant="outline" size="sm" className="border-glow">
                  <Monitor className="w-4 h-4 mr-2" />
                  {t('nav.admin')}
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={logout}
                className="text-destructive hover:text-destructive"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Link to="/admin/login">
              <Button variant="outline" size="sm" className="border-glow">
                <User className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
