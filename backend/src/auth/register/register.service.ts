import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserRegister } from 'src/models/User';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async register(data: UserRegister) {
    try {
      const user = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
      };

      await this.prisma.user.create({ data: user });

      return {
        status: 200,
        message: 'User created successfully',
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Puedes acceder a error.meta, error.code, etc.
        throw new NotFoundException({
          message: 'Error creating user',
          error: error.meta,
        });
      } else if (error instanceof Prisma.PrismaClientValidationError) {
        // Error desconocido de Prisma
        throw new NotFoundException({
          message: 'Error al validar los campos recibidos',
          error: error.message,
          data,
        });
      } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        // Error desconocido de Prisma
        throw new NotFoundException({
          message: 'Unknown error occurred during user creation',
          error: error.message,
        });
      } else {
        // Otros tipos de errores no relacionados con Prisma
        throw new NotFoundException({
          message: 'Unexpected error occurred',
          error: error,
        });
      }
    }
  }
}
