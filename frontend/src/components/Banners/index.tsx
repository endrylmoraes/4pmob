import { BannerCategorias } from "./BannerCategorias";

export default function Banners() {
  return (
    <div className="grid gap-8 w-full">
      <BannerCategorias
        categoria="pets"
        titulo="Pets"
        descricao="Imóveis para você e seus bichinhos."
      />
      <BannerCategorias
        categoria="familia"
        titulo="Família"
        descricao="Grandes espaços para quem você ama."
      />
      <BannerCategorias
        categoria="mobiliado"
        titulo="Mobiliado"
        descricao="Casa completa, entre já para morar."
      />
      <BannerCategorias
        categoria="lugar10"
        titulo="Lugar 10"
        descricao="Perto de tudo que você precisa para viver."
      />
    </div>
  );
}
