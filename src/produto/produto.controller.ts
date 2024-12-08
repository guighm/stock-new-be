import { Body, Controller, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './dto';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}
    @Post('cadastro')
    async cadastrarProduto(@Body() produto: Produto) {
        return this.produtoService.cadastrarProduto(produto);
    }
}
