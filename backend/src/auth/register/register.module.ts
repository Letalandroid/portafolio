import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [RegisterService, PrismaService],
  controllers: [RegisterController]
})
export class RegisterModule {}
