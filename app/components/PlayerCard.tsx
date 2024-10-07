import Link from "next/link";
import React from "react";

// Define an interface for the props
interface PlayerCardProps {
  alias: string;
  game_tag: string;
  name: string;
  role: string;
  instagram?: string; // Make social media links optional
  twitch?: string;
  twitter?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  alias,
  game_tag,
  name,
  role,
  instagram,
  twitch,
  twitter,
}) => {
  return (
    <div className="bg-primary text-white w-80 h-36 drop-shadow-2xl">
      <h1 className="font-light">{role}</h1>
      <h1 className="font-regular">{name}</h1>
      <h1 className="font-light">
        {alias} / {game_tag}
      </h1>
      <Link href={`https://www.instagram.com/${instagram}`}></Link>
      <Link href={`https://www.twitch.com/${twitch}`}></Link>
      <Link href={`https://www.x.com/${twitter}`}></Link>
    </div>

  );
};

export default PlayerCard;
