import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [PrismaModule, ProdutoModule, CategoriaModule],
})
export class AppModule {}
