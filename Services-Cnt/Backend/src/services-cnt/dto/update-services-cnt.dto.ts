import { PartialType } from '@nestjs/swagger';
import { CreateServicesCntDto } from './create-services-cnt.dto';

export class UpdateServicesCntDto extends PartialType(CreateServicesCntDto) {}
