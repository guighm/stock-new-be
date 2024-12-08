import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaProduto } from './dto';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {

    constructor(private readonly categoriaService: CategoriaService) {}

    @Post('cadastro')
    async cadastrarCategoria(@Body() categoria : CategoriaProduto) {
        return this.categoriaService.cadastrarCategoria(categoria);
    }

    @Get('lista')
    async listarCategorias() {
        return this.categoriaService.listarCategorias();
    }
}
