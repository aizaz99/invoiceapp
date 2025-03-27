import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { InvoicesModule } from './invoices/invoices.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [InvoicesModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
