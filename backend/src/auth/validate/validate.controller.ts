import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ValidateService } from './validate.service';

@Controller('auth')
export class ValidateController {
  constructor(private readonly validateService: ValidateService) {}

  @Get('validate')
  @ApiOperation({ summary: 'Validar usuario existente' })
  @ApiResponse({ status: 200, description: 'Validación de sesión exitoso.' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  async login(@Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado.');
    }

    const { isValid, user } = await this.validateService.validateToken(token);

    if (isValid) {
      return { user, message: 'Validación de sesión exitoso.' };
    } else {
      throw new UnauthorizedException('Credenciales inválidas.');
    }
  }
}