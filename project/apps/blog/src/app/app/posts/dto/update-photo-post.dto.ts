import { IsNotEmpty,IsOptional, IsString } from 'class-validator';
import { UpdateBasePostDto } from './update-base-post.dto';

export class UpdatePhotoPostDto extends UpdateBasePostDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public photoUrl?: string;
}
