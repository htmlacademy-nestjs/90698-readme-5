import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBasePostDto } from './create-base-post.dto';

export class CreateVideoPostDto extends CreateBasePostDto {
  @IsString()
  @IsNotEmpty()
  public videoUrl: string;
}
