import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Produto } from './dto';

@Injectable()
export class ProdutoService {
    constructor(private readonly prisma: PrismaService) {}

    async cadastrarProduto(produto: Produto) {
        const novoProduto = await this.prisma.produto.create({
            data: {
                ...produto,
                ativo: true
            }
        });
        return novoProduto;
    }
}
