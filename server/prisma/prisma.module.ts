import { Module } from '@nestjs/common';
import { PrismaService } from '../src/prisma.service';


@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 allows other modules to use it
})
export class PrismaModule {}