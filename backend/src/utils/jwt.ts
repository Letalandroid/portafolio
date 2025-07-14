// src/config/jwt-config.module.ts
import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Global() // Hace que JwtService esté disponible en toda la aplicación
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');

        if (!secret) {
          throw new Error('JWT_SECRET debe estar definido en el archivo .env');
        }

        console.log('✅ JWT Module configurado correctamente');

        return {
          secret,
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRES_IN') || '24h',
          },
        };
      },
    }),
  ],
  exports: [JwtModule], // Exporta JwtModule para que otros módulos puedan usarlo
})
export class JwtConfigModule {}