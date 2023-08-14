import { Button } from "@material-tailwind/react";
import Image from "next/image";

type Props = {
  name: string;
  imageUrl: string;
  onJoin: () => void;
};
const GameCard = (props: Props) => {
  const { imageUrl, name, onJoin } = props;
  return (
    <div
      className={`flex h-[250px] w-[200px] flex-col items-center justify-start rounded-[7px] bg-[#fafafa] p-[1rem] shadow-md`}
    >
      <h3 className={`mb-[1rem] text-[20px]`}>{name}</h3>
      <Image
        className={`mb-4 shadow-lg`}
        alt="image"
        src={imageUrl}
        width={100}
        height={100}
      />
      <button
        className={`w-full justify-self-end rounded-[7px] bg-[#f82aff] py-2 text-[#fff]`}
        onClick={onJoin}
      >
        Join
      </button>
    </div>
  );
};
export default GameCard;
