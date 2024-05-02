import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopoPagina() {
  return (
    <header class="bg-blue-900 text-white py-2 w-screen">
      <div className="w-page mx-auto flex justify-between items-center">
        <Link href="/">
          <div class="flex items-center">
            <div className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center mr-10">
              <Image
                src="/icon.png"
                alt="Logo da Livraria"
                width={55}
                height={55}
              />
            </div>
            <h1 class="text-3xl font-semibold">Livraria do Dev</h1>
          </div>
        </Link>
        <Link href="/sobre">
          <p class="text-md font-semibold">Sobre</p>
        </Link>
      </div>
    </header>
  );
}
