import { Module } from '@nestjs/common';
import { ValidateService } from './validate.service';
import { ValidateController } from './validate.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ValidateService, JwtService, PrismaService],
  controllers: [ValidateController]
})
export class ValidateModule {}
