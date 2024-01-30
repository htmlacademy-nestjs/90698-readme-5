import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBasePostDto } from './create-base-post.dto';

export class CreateQuotePostDto extends CreateBasePostDto {
  @IsString()
  @IsNotEmpty()
  public quote: string;

  @IsString()
  @IsNotEmpty()
  public quoteAuthor: string;
}
