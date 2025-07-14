
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
  visible: boolean;
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/admin/login');
      return;
    }
    fetchProjects();
  }, [user, navigate]);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch('/api/admin/projects', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleProjectVisibility = async (projectId: string, visible: boolean) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`/api/admin/projects/${projectId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ visible: !visible })
      });

      if (response.ok) {
        setProjects(projects.map(p => 
          p.id === projectId ? { ...p, visible: !visible } : p
        ));
        toast({
          title: visible ? 'Proyecto ocultado' : 'Proyecto mostrado',
          description: '',
        });
      }
    } catch (error) {
      console.error('Error updating project:', error);
      toast({
        title: 'Error',
        description: 'No se pudo actualizar el proyecto',
        variant: 'destructive',
      });
    }
  };

  const deleteProject = async (projectId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      return;
    }

    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`/api/admin/projects/${projectId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setProjects(projects.filter(p => p.id !== projectId));
        toast({
          title: 'Proyecto eliminado',
          description: '',
        });
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: 'Error',
        description: 'No se pudo eliminar el proyecto',
        variant: 'destructive',
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-glow">
            &gt; {t('admin.dashboard')}_
          </h1>
          <Button 
            onClick={() => navigate('/admin/projects/new')}
            className="bg-primary hover:bg-primary/80 text-background border-glow"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t('admin.newProject')}
          </Button>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
          <CardHeader>
            <CardTitle className="text-primary">{t('admin.projects')}</CardTitle>
            <CardDescription className="text-muted-foreground">
              Gestiona tus proyectos desde este panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="bg-background/50 border-primary/20">
                  <CardHeader>
                    <div className="aspect-video rounded overflow-hidden mb-2">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-sm text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/admin/projects/edit/${project.id}`)}
                        className="border-primary/50 hover:border-primary"
                      >
                        <Edit className="w-3 h-3 mr-1" />
                        {t('admin.edit')}
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleProjectVisibility(project.id, project.visible)}
                        className="border-primary/50 hover:border-primary"
                      >
                        {project.visible ? (
                          <>
                            <EyeOff className="w-3 h-3 mr-1" />
                            {t('admin.hide')}
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3 mr-1" />
                            {t('admin.show')}
                          </>
                        )}
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        className="border-primary/50 hover:border-primary"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                        className="border-destructive/50 hover:border-destructive text-destructive"
                      >
                        <Trash className="w-3 h-3 mr-1" />
                        {t('admin.delete')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
