import { Module } from '@nestjs/common';
import { ServicesCntService } from './services-cnt.service';
import { ServicesCntController } from './services-cnt.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ServicesCntController],
  providers: [ServicesCntService],
  imports: [PrismaModule],
})
export class ServicesCntModule {}
