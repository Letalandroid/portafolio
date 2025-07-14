
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Terminal className="w-24 h-24 text-primary mx-auto mb-6 animate-pulse" />
        
        <h1 className="text-6xl font-bold text-primary text-glow mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t('404.title')}
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t('404.message')}
        </p>
        
        <div className="border border-primary/30 p-6 rounded-lg bg-card/50 backdrop-blur-sm max-w-md mx-auto mb-8">
          <div className="font-mono text-sm text-left text-primary">
            <div>&gt; ERROR: Page not found</div>
            <div>&gt; LOCATION: {window.location.pathname}</div>
            <div>&gt; STATUS: 404</div>
            <div>&gt; SOLUTION: Return to home</div>
          </div>
        </div>
        
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/80 text-background font-bold border-glow">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('404.back')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
