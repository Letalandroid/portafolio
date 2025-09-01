import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLogin } from 'src/models/User';
import { PrismaService } from 'src/prisma.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: UserLogin) {
    const u = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (u) {
      const authPassw = await comparePassword(user.password, u?.password);

      if (authPassw) {
        const payload = {
          userId: u.id,
          role: u.role,
          email: u.email,
        };

        return {
          token: await this.jwtService.signAsync(
            payload,
          ),
          user: {
            id: u.id,
            email: u.email,
            name: u.name,
          }
        };
      } else {
        throw new UnauthorizedException({
          status: 401,
          message: 'Contraseña incorrecta.',
        });
      }
    } else {
      throw new UnauthorizedException({
        status: 401,
        message: 'Usuario incorrecto.',
      });
    }
  }
}
