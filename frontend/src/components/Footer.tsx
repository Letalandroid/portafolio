
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/letalandroid', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/letalandroid', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/letalandroid', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@letalandroid.dev', label: 'Email' },
  ];

  return (
    <footer className="border-t border-primary/30 py-8 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 LetalAndroid - {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 border border-primary/30 rounded hover:border-primary/60 hover:bg-primary/10"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
