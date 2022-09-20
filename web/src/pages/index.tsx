import { Box } from '../components/Box';
import { Card } from '../components/Card';

export default function Home() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src="./logo-nlw-esports.svg" alt="Esports NLW" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <Card title="League of Legends" gameImg="./game-1.png" adQuantity={4} />
        <Card title="Apex Legends" gameImg="./game-2.png" adQuantity={4} />
        <Card title="CSGO" gameImg="./game-3.png" adQuantity={4} />
        <Card title="World of Warcraft" gameImg="./game-4.png" adQuantity={4} />
        <Card title="Dota 2" gameImg="./game-5.png" adQuantity={4} />
        <Card title="Fortnite" gameImg="./game-6.png" adQuantity={1} />
      </div>

      <Box />
    </div>
  );
}
