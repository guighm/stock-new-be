import { Injectable } from '@nestjs/common';
import { CategoriaProduto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaService {
    constructor(private readonly prisma: PrismaService) {}

    async cadastrarCategoria(categoria: CategoriaProduto) {
        const categoriaProduto = await this.prisma.categoriaProduto.create({
            data: categoria,
        });
        return categoriaProduto;
    }

    async listarCategorias() {
        const categorias = await this.prisma.categoriaProduto.findMany({
            select: {
                id: true,
                nome: true
            }
        });
        return categorias;
    }
}
