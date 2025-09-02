import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ValidateService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateToken(
    token: string,
  ): Promise<{ isValid: boolean; user?: any }> {
    try {
      const decoded = await this.jwtService.decode(token);

      const user = await this.prisma.user.findUnique({
        where: {
          id: decoded.userId,
        },
      });

      if (!user) {
        return { isValid: false };
      }

      return {
        isValid: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    } catch (error) {
      return { isValid: false };
    }
  }
}
