import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, Loader2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  linkRepo: string;
  visible: boolean;
}

// Proyectos de ejemplo
const exampleProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce API",
    description:
      "RESTful API for e-commerce platform with JWT authentication, payment integration, and inventory management",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    link: "https://github.com/example/ecommerce-api",
    linkRepo: "https://github.com/example/ecommerce-api",
    visible: true,
  },
  {
    id: "2",
    title: "Task Management System",
    description:
      "Backend system for task management with real-time notifications, user roles, and project collaboration",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    link: "https://github.com/example/task-management",
    linkRepo: "https://github.com/example/task-management",
    visible: true,
  },
  {
    id: "3",
    title: "Social Media API",
    description:
      "Scalable social media backend with GraphQL, real-time messaging, and advanced caching strategies",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    link: "https://github.com/example/social-api",
    linkRepo: "https://github.com/example/social-api",
    visible: true,
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        `${(import.meta.env.VITE_APP_BACK_URL =
          "http://localhost:3000/api/v1")}/projects`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // const apiProjects = data.filter((project: Project) => project.visible);
        setProjects(data);
      } else {
        // Si la API no está disponible, usar proyectos de ejemplo
        console.log("API not available, using example projects");
        setProjects(exampleProjects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      // Si hay error en la API, usar proyectos de ejemplo
      setProjects(exampleProjects);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin mr-2" />
            <span className="text-lg">{t("projects.loading")}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-primary/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-primary text-glow">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex-1 border-primary/50 hover:border-primary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t("projects.viewDemo")}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.linkRepo, "_blank")}
                  className="flex-1 border-primary/50 hover:border-primary"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t("projects.viewCode")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
