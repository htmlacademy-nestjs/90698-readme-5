import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBasePostDto } from './create-base-post.dto';

export class CreateLinkPostDto extends CreateBasePostDto {
  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public linkUrl: string;
}
