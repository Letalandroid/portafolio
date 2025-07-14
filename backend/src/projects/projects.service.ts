import { Injectable } from '@nestjs/common';
import { ProjectCreate, ProjectUpdate } from 'src/models/Project';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProjects() {
    return this.prisma.projects.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getProjectById(id: number) {
    return this.prisma.projects.findUnique({
      where: { id },
    });
  }

  async createProject(data: ProjectCreate) {
    return this.prisma.projects.create({
      data,
    });
  }

  async updateProject(id: number, data: ProjectUpdate) {
    return this.prisma.projects.update({
      where: { id },
      data,
    });
  }
  async deleteProject(id: number) {
    return this.prisma.projects.delete({
      where: { id },
    });
  }
}
