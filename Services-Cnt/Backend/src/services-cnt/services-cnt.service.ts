import { Injectable } from '@nestjs/common';
import { CreateServicesCntDto } from './dto/create-services-cnt.dto';
import { UpdateServicesCntDto } from './dto/update-services-cnt.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesCntService {
  constructor(private prisma: PrismaService) {}

  create(CreateServicesCntDto: CreateServicesCntDto) {
    return this.prisma.services.create({ data: CreateServicesCntDto });
  }

  findAll() {
    return this.prisma.services.findMany({
      where: { id: { not: 0 } },
    });
  }

  findOne(id: number) {
    return this.prisma.services.findUnique({ where: { id } });
  }

  update(id: number, updateServicesCntDto: UpdateServicesCntDto) {
    return this.prisma.services.update({
      where: { id },
      data: updateServicesCntDto,
    });
  }

  remove(id: number) {
    return this.prisma.services.delete({ where: { id } });
  }
}
