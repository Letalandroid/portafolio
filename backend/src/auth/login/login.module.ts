import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConfigModule } from 'src/utils/jwt';

@Module({
  providers: [
    LoginService,
    PrismaService
  ],
  controllers: [LoginController],
})
export class LoginModule {}
