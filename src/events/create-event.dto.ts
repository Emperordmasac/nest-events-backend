import { IsDateString, IsString, Length } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @Length(5, 255, { message: 'name length is not valid' })
  name: string;

  @Length(5, 255, { message: 'description length is not valid' })
  description: string;

  @IsDateString()
  when: string;

  @Length(5, 255, { message: 'address length is not valid' })
  address: string;
}
