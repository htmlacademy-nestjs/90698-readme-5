import { IsNotEmpty,IsOptional, IsString } from 'class-validator';
import { UpdateBasePostDto } from './update-base-post.dto';

export class UpdateQuotePostDto extends UpdateBasePostDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public quote?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public quoteAuthor?: string;
}
