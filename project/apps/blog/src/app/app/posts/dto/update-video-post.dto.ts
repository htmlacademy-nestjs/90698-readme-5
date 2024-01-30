import { IsNotEmpty,IsOptional, IsString } from 'class-validator';
import { UpdateBasePostDto } from './update-base-post.dto';

export class UpdateVideoPostDto extends UpdateBasePostDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public videoUrl?: string;
}
