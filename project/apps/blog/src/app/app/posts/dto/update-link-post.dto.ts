import { IsNotEmpty,IsOptional, IsString } from 'class-validator';
import { UpdateBasePostDto } from './update-base-post.dto';

export class UpdateLinkPostDto extends UpdateBasePostDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public linkUrl?: string;
}
