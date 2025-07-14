
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

const TechnologiesSection = () => {
  const { t } = useLanguage();

  const technologies = {
    frontend: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'NestJS', 'Express', 'Java', 'PHP', 'Laravel'],
    database: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Linux', 'VS Code']
  };

  const techColors = {
    frontend: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
    backend: 'bg-green-500/20 text-green-400 border-green-500/50',
    database: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    tools: 'bg-purple-500/20 text-purple-400 border-purple-500/50'
  };

  return (
    <section id="technologies" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">
          {t('tech.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="border border-primary/30 rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:border-primary/60 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary border-b border-primary/50 pb-2">
                {t(`tech.${category}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className={`${techColors[category as keyof typeof techColors]} hover:scale-105 transition-transform cursor-default`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
