import { ArrayNotEmpty, IsArray, IsBoolean, IsNotEmpty,IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBasePostDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public title?: string;

  @IsUUID('all', { each: true })
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  public tags?: string[];

  @IsBoolean()
  public isDraft: boolean;
}
