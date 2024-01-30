import { IsNotEmpty,IsOptional, IsString } from 'class-validator';
import { UpdateBasePostDto } from './update-base-post.dto';

export class UpdateTextPostDto extends UpdateBasePostDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public content?: string;
}
