import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBasePostDto } from './create-base-post.dto';

export class CreatePhotoPostDto extends CreateBasePostDto {
  @IsString()
  @IsNotEmpty()
  public photoUrl: string;
}
