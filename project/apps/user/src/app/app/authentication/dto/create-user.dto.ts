import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;


  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  public firstname: string;


  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;
}
