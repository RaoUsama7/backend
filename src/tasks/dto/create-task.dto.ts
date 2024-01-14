import { IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsEnum(['completed', 'pending'])
  status: 'completed' | 'pending';
}
