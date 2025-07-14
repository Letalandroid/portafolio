
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.about': { es: 'Sobre mí', en: 'About' },
  'nav.technologies': { es: 'Tecnologías', en: 'Technologies' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.admin': { es: 'Admin', en: 'Admin' },
  
  // About section
  'about.greeting': { es: '> Hola, soy', en: '> Hello, I am' },
  'about.role': { es: 'Desarrollador Backend', en: 'Backend Developer' },
  'about.description': { es: 'Especializado en crear APIs robustas y arquitecturas escalables. Apasionado por la tecnología y siempre en busca de nuevos desafíos.', en: 'Specialized in creating robust APIs and scalable architectures. Passionate about technology and always looking for new challenges.' },
  'about.downloadCV': { es: 'Descargar CV', en: 'Download CV' },
  
  // Technologies
  'tech.title': { es: '> Tecnologías que domino', en: '> Technologies I master' },
  'tech.frontend': { es: 'Frontend', en: 'Frontend' },
  'tech.backend': { es: 'Backend', en: 'Backend' },
  'tech.database': { es: 'Bases de Datos', en: 'Databases' },
  'tech.tools': { es: 'Herramientas', en: 'Tools' },
  
  // Projects
  'projects.title': { es: '> Proyectos realizados', en: '> Completed projects' },
  'projects.viewDemo': { es: 'Ver Demo', en: 'View Demo' },
  'projects.viewCode': { es: 'Ver Código', en: 'View Code' },
  'projects.loading': { es: 'Cargando proyectos...', en: 'Loading projects...' },
  
  // Contact
  'contact.title': { es: '> Contacto', en: '> Contact' },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.send': { es: 'Enviar mensaje', en: 'Send message' },
  'contact.sending': { es: 'Enviando...', en: 'Sending...' },
  'contact.success': { es: 'Mensaje enviado correctamente', en: 'Message sent successfully' },
  'contact.error': { es: 'Error al enviar mensaje', en: 'Error sending message' },
  
  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  
  // Admin
  'admin.login': { es: 'Iniciar Sesión', en: 'Login' },
  'admin.email': { es: 'Email', en: 'Email' },
  'admin.password': { es: 'Contraseña', en: 'Password' },
  'admin.dashboard': { es: 'Panel de Control', en: 'Dashboard' },
  'admin.projects': { es: 'Gestión de Proyectos', en: 'Project Management' },
  'admin.newProject': { es: 'Nuevo Proyecto', en: 'New Project' },
  'admin.edit': { es: 'Editar', en: 'Edit' },
  'admin.delete': { es: 'Eliminar', en: 'Delete' },
  'admin.hide': { es: 'Ocultar', en: 'Hide' },
  'admin.show': { es: 'Mostrar', en: 'Show' },
  'admin.logout': { es: 'Cerrar Sesión', en: 'Logout' },
  
  // 404
  '404.title': { es: 'Error 404 - Página no encontrada', en: 'Error 404 - Page not found' },
  '404.message': { es: 'La página que buscas no existe en este sistema.', en: 'The page you are looking for does not exist in this system.' },
  '404.back': { es: 'Volver al inicio', en: 'Back to home' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
