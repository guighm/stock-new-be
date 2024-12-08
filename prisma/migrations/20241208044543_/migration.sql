-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "quantidadeAtual" INTEGER NOT NULL DEFAULT 0,
    "quantidadeMinima" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "categoriaID" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "comprimento" DOUBLE PRECISION NOT NULL,
    "largura" DOUBLE PRECISION NOT NULL,
    "GETIN" TEXT NOT NULL,
    "NCM" TEXT NOT NULL,
    "dataDeEntrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataDeEdicao" TIMESTAMP(3) NOT NULL,
    "observacoes" TEXT,
    "ativo" BOOLEAN NOT NULL,
    "valorEntrada" DOUBLE PRECISION NOT NULL,
    "valorSaida" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaProduto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataDeCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataDeEdicao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoriaProduto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_GETIN_key" ON "Produto"("GETIN");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_NCM_key" ON "Produto"("NCM");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "CategoriaProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
