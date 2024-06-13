import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ServicesCntModule } from './services-cnt/services-cnt.module';

@Module({
  imports: [PrismaModule, ServicesCntModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
