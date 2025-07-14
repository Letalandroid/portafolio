import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectCreate, ProjectUpdate } from 'src/models/Project';
import { AuthGuard } from 'src/guard/auth/auth.guard';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener la lista de proyectos' })
  @ApiResponse({ status: 200, description: 'Lista obtenida exitosamente' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  async getAllProjects() {
    return this.projectsService.getAllProjects();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiHeader({
    name: 'Authorization',
    description: 'Token JWT en formato Bearer',
    required: true,
  })
  @ApiOperation({ summary: 'Obtener proyecto individualmente' })
  @ApiResponse({ status: 200, description: 'Proyecto obtenido exitosamente' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  async getProjectById(@Param('id') id: number) {
    return this.projectsService.getProjectById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiHeader({
    name: 'Authorization',
    description: 'Token JWT en formato Bearer',
    required: true,
  })
  @ApiOperation({ summary: 'Crear un proyecto' })
  @ApiResponse({ status: 200, description: 'Proyecto creado exitosamente' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  async createProject(@Body() projectCreate: ProjectCreate) {
    return this.projectsService.createProject(projectCreate);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiHeader({
    name: 'Authorization',
    description: 'Token JWT en formato Bearer',
    required: true,
  })
  @ApiOperation({ summary: 'Actualizar un proyecto' })
  @ApiResponse({
    status: 200,
    description: 'Proyecto actualizado exitosamente',
  })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  async updateProject(
    @Param('id') id: number,
    @Body() projectUpdate: ProjectUpdate,
  ) {
    return this.projectsService.updateProject(id, projectUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiHeader({
    name: 'Authorization',
    description: 'Token JWT en formato Bearer',
    required: true,
  })
  @ApiOperation({ summary: 'Eliminar un proyecto' })
  @ApiResponse({ status: 200, description: 'Proyecto eliminado exitosamente' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  async deleteProject(@Param('id') id: number) {
    return this.projectsService.deleteProject(id);
  }
}
