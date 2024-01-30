import { ArrayNotEmpty, IsArray, IsBoolean, IsMongoId, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBasePostDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsMongoId()
  public userId: string;

  @IsUUID('all', { each: true })
  @IsArray()
  @ArrayNotEmpty()
  public tags: string[];

  @IsBoolean()
  public isRepost: boolean;

  @IsBoolean()
  public isDraft: boolean;
}
