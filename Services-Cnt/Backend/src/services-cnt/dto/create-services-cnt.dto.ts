import { ApiProperty } from "@nestjs/swagger";
export class CreateServicesCntDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ required: false})
    description?: string;

    @ApiProperty()
    price: number;

}