import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { ConfigModule } from '@nestjs/config';
import { JwtConfigModule } from './utils/jwt';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Solo aquí, una vez
    }),
    JwtConfigModule,
    LoginModule,
    RegisterModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
