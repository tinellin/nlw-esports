type CardProps = {
  gameImg: string;
  title: string;
  adQuantity: number;
};

export function Card({ gameImg, title, adQuantity }: CardProps) {
  return (
    <a href="/" className="relative rounded overflow-hidden">
      <img src={gameImg} alt={title} />
      <div className="bg-game-gradient w-full pt-16 p-4 px-4 absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm mt-1">
          {adQuantity > 1 ? `${adQuantity} anúncios` : `${adQuantity} anúncio`}
        </span>
      </div>
    </a>
  );
}
