import CorpoPagina from "@/components/corpo_pagina";
import TopoPagina from "@/components/topo_pagina";

export default function Pdp({ livro }) {
  const {
    titulo,
    autor,
    preco,
    classificacao,
    paginas,
    descricao,
    publicacao,
    capa,
  } = livro;

  return (
    <>
      <TopoPagina />
      <CorpoPagina>
        <div className="p-10">
          <div class="max-w-4xl mx-auto">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/2">
                <img class="w-full" src={capa} alt="Livro" />
              </div>
              <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h1 class="text-3xl font-semibold mb-2">{titulo}</h1>
                <p class="text-gray-700 text-lg mb-4">{descricao}</p>
                <p class="text-gray-900 font-semibold mb-4">{preco}</p>
                <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                  Comprar
                </button>

                <div class="mt-8">
                  <h2 class="text-xl font-semibold mb-4">Detalhes do Livro</h2>
                  <ul>
                    <li class="mb-2">
                      <span class="font-semibold">Autor:</span> {autor}
                    </li>
                    <li class="mb-2">
                      <span class="font-semibold">Ano de Publicação:</span>{" "}
                      {publicacao}
                    </li>
                    <li class="mb-2">
                      <span class="font-semibold">Classificação:</span>{" "}
                      {classificacao}
                    </li>
                    <li class="mb-2">
                      <span class="font-semibold">Páginas:</span> {paginas}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CorpoPagina>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  console.log("PARAMETRO RECEBIDO", params.codigolivro);

  const response = await fetch(
    `http://localhost:3005/livros/${params.codigolivro}`,
    {
      headers: { Authorization: process.env.API_AUTH },
    }
  );
  const livro = await response.json();

  console.log(livro);
  return { props: { livro } };
};
