
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // Replace with your actual CV URL
    const cvUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'LetalAndroid_CV.pdf';
    link.click();
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl text-muted-foreground mb-2 typing">
              {t('about.greeting')}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-glow mb-4">
              LetalAndroid
            </h2>
            <h3 className="text-xl md:text-2xl text-primary border-l-2 border-primary pl-4 inline-block">
              {t('about.role')}
            </h3>
          </div>
          
          <div className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <p className="border border-primary/30 p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              {t('about.description')}
            </p>
          </div>

          <Button 
            onClick={handleDownloadCV}
            size="lg"
            className="bg-primary hover:bg-primary/80 text-background font-bold border-glow transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            {t('about.downloadCV')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
