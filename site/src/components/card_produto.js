import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function CardProduto({
  titulo = "",
  capa = "",
  descricao = "",
  preco = "",
  classificacao = "",
  paginas = "",
  codigo = "",
}) {
  const descricaoReduzida = useMemo(() => {
    const max = 80;
    if (descricao.length <= max) return descricao;
    return descricao.substring(0, max - 3) + "...";
  }, [descricao]);

  return (
    <div className="flex flex-col w-70 h-[680px] rounded shadow-lg">
      <Link href={`/${codigo}`}>
        <img
          className="h-[320px] w-full object-fit rounded"
          src={capa}
          alt="Livro"
        />
      </Link>
      <div className="px-6 pt-4 pb-2">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base">{descricaoReduzida}</p>
        <p className="text-gray-900 font-semibold mt-2">{preco}</p>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
          {paginas} páginas
        </span>
      </div>
      <div className="flex flex-col h-[100%] justify-end px-2 pb-2">
        <Link href={`/${codigo}`}>
          <button className="w-full bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
}
