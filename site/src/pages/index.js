import CardProduto from "@/components/card_produto";
import { useEffect, useState } from "react";
import CorpoPagina from "@/components/corpo_pagina";
import TopoPagina from "@/components/topo_pagina";

export default function HomePage() {
  const [livros, salvaLivros] = useState([]);

  useEffect(() => {
    buscaLivros();
  }, []);

  const buscaLivros = async () => {
    const response = await fetch("http://localhost:3000/api/livros");
    const data = await response.json();
    salvaLivros(data);
  };

  return (
    <div>
      <TopoPagina />
      <CorpoPagina>
        <div class="grid grid-flow-row-dense grid-cols-4 gap-4">
          {livros.map((livro) => (
            <CardProduto
              key={livro.id}
              titulo={livro.titulo}
              descricao={livro.descricao}
              preco={livro.preco}
              paginas={livro.paginas}
              codigo={livro.codigo}
              capa={livro.capa}
            />
          ))}
        </div>
      </CorpoPagina>
    </div>
  );
}
