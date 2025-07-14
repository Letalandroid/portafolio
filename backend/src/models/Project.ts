import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importar ApiProperty
import { Role } from '@prisma/client';

export class ProjectBase {

  @ApiProperty({ description: 'Id del usuario' })
  id: number;

  @ApiProperty({ description: 'Imagen del proyecto', minLength: 5 })
  image: string;

  @ApiProperty({ description: 'Titulo del proyecto', minLength: 5 })
  title: string;

  @ApiProperty({ description: 'Descripcion del proyecto', minLength: 5 })
  description: string;

  @ApiProperty({ description: 'Link del proyecto', minLength: 5 })
  link: string;

  @ApiProperty({ description: 'Link del repositorio del proyecto', minLength: 5 })
  linkRepo: string;

  @ApiProperty({ description: 'Fecha del proyecto' })
  createdAt?: Date = new Date();
}

export class ProjectCreate {

  @ApiProperty({ description: 'Imagen del proyecto', minLength: 3 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  image: string;

  @ApiProperty({ description: 'Titulo del proyecto', minLength: 5 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @ApiProperty({ description: 'Descripcion del proyecto', minLength: 5 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;

  @ApiProperty({ description: 'Link del proyecto', minLength: 5 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  link: string;

  @ApiProperty({ description: 'Link del repositorio proyecto', minLength: 5 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  linkRepo: string;
}

export class ProjectUpdate {

  @ApiProperty({ description: 'Imagen del proyecto', minLength: 3 })
  @IsString()
  @MinLength(5)
  image: string;

  @ApiProperty({ description: 'Titulo del proyecto', minLength: 5 })
  @IsString()
  @MinLength(5)
  title: string;

  @ApiProperty({ description: 'Descripcion del proyecto', minLength: 5 })
  @IsString()
  @MinLength(5)
  description: string;

  @ApiProperty({ description: 'Link del proyecto', minLength: 5 })
  @IsString()
  @MinLength(5)
  link: string;

  @ApiProperty({ description: 'Link del repositorio del proyecto', minLength: 5 })
  @IsString()
  @MinLength(5)
  linkRepo: string;
}