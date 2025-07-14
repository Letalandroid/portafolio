import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RegisterService } from './register.service';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { genHash } from 'src/utils/bcrypt';
import { UserRegister } from 'src/models/User';
import { AuthGuard } from 'src/guard/auth/auth.guard';

@Controller('auth')
@ApiTags('Auth')
export class RegisterController {
  constructor(private readonly authService: RegisterService) {}

  @Post('register')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiHeader({
    name: 'Authorization',
    description: 'Token JWT en formato Bearer',
    required: true,
  })
  @ApiOperation({ summary: 'Registrar un nuevo usuario' }) // Descripción breve del endpoint
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente.' }) // Respuesta esperada
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos para el registro.',
  }) // Respuesta en caso de error
  async register(@Body() user: UserRegister) {
    user.password = await genHash(user.password);
    return this.authService.register(user);
  }
}
