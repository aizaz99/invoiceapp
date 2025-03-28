import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.invoice.findMany();
  }

  async findOne(id: string) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }
}