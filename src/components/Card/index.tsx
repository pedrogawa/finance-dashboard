import { BsArrowUpCircle } from "react-icons/bs";

export default function Card() {
  return (
    <div className="flex flex-col p-4 h-[156px] bg-green-500 w-full rounded-md gap-4">
      <div className="flex gap-4 items-center">
        <BsArrowUpCircle color="#fff" size={22} />
        <span className="text-white font-semibold text-2xl m-0">Entradas</span>
      </div>
      <div className="text-white font-bold text-3xl">R$ 8.500,00</div>
      <div className="flex gap-3 items-center">
        Limite: R$ 2.500,00
        <div className="inline-block bg-white/30 px-2 py-1 rounded-md text-red-500 font-semibold">
          +50%
        </div>
      </div>
    </div>
  );
}
