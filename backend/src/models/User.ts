import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importar ApiProperty
import { Role } from '@prisma/client';

export class UserBase {

  @ApiProperty({ description: 'Id del usuario' })
  id?: number = 0;

  @ApiProperty({ description: 'Nombre del usuario', minLength: 3, maxLength: 50 })
  name: string = '';

  @ApiProperty({ description: 'Correo electrónico del usuario', minLength: 5 })
  email: string = '';

  @ApiProperty({ description: 'Contraseña del usuario', minLength: 8 })
  password: string = '';

  @ApiProperty({ description: 'Rol del usuario', required: false })
  role?: Role;
}

export class UserRegister {

  @ApiProperty({ description: 'Nombre del usuario', minLength: 3, maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string = '';

  @ApiProperty({ description: 'Correo electrónico del usuario', minLength: 5 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  email: string = '';

  @ApiProperty({ description: 'Contraseña del usuario', minLength: 8 })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string = '';

  @ApiProperty({ description: 'Rol del usuario', required: false })
  role?: Role;
}

export class UserLogin {
  @ApiProperty({ description: 'Correo electrónico del usuario' })
  @IsString()
  @IsNotEmpty()
  email: string = '';

  @ApiProperty({ description: 'Contraseña del usuario' })
  @IsString()
  @IsNotEmpty()
  password: string = '';
}