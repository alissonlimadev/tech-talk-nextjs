import CorpoPagina from "@/components/corpo_pagina";
import TopoPagina from "@/components/topo_pagina";

export default function PaginaSobre() {
  return (
    <div>
      <TopoPagina />
      <CorpoPagina>
        <h1 className="text-2xl">Sobre a nossa livraria</h1>
        <br />
        <p>
          Bem-vindo à Livraria do Dev, a sua fonte essencial de literatura em
          programação!
        </p>
        <br />
        <p>
          A Livraria do Dev nasceu de uma paixão simples, porém profunda:
          democratizar o acesso ao conhecimento em programação e desenvolvimento
          de software. Sabemos que a jornada de aprendizado em tecnologia pode
          ser desafiadora, e nosso objetivo é torná-la tão acessível,
          compreensível e estimulante quanto possível. Oferecemos uma cuidadosa
          seleção de livros, desde clássicos da ciência da computação até os
          últimos lançamentos sobre tecnologias emergentes. Seja você um novato
          curioso querendo entender os fundamentos da programação, um estudante
          buscando aprofundar seu conhecimento acadêmico, ou um profissional
          experiente em busca das últimas tendências e práticas do setor, nossa
          coleção é meticulosamente curada para atender às suas necessidades.
        </p>
      </CorpoPagina>
    </div>
  );
}
