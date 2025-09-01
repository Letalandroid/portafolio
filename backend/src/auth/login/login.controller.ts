import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserLogin } from 'src/models/User';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('auth')
@ApiTags('Auth')
export class LoginController {
  constructor(private readonly authService: LoginService) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión con un usuario existente' }) // Descripción breve del endpoint
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso.' }) // Respuesta esperada
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' }) // Respuesta en caso de error
  async login(@Body() user: UserLogin, @Res() res: Response) {
    const { token, user: u_data } = await this.authService.login(user);
    res.setHeader('Authorization', `Bearer ${token}`);
    return res.status(200).json({
      message: 'Login successful',
      token,
      user: u_data
    });
  }
}
