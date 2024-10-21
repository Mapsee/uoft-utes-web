import Link from "next/link";
import React from "react";
import Image from 'next/image';
import Instagram from '../assets/images/icons/instagram.svg';
import Twitter from '../assets/images/icons/twitter.svg';
import Twitch from '../assets/images/icons/twitch.svg';
import UTESLogo from '../assets/images/UTESCrest.svg';

// Define an interface for the props
interface PlayerCardProps {
  alias: string;
  name: string;
  role: string;
  instagram?: string; // Make social media links optional
  twitch?: string;
  twitter?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  alias,
  name,
  role,
  instagram,
  twitch,
  twitter,
}) => {
  return (
    <div className='flex flex-row w-1/4 h-15 px-5 py-3 space-x-2 bg-secondary rounded-xl cyan_shadow text-white'>
      <Image src={UTESLogo} alt='UTES Crest' className='w-1/3 aspect-square' />
      <div className="mt-3">
        <h1 className="font-light text-xs">{role}</h1>
        <h1 className="font-regular font-bold">{name}</h1>
        <h1 className="font-light text-xs pb-3">
          IGN: {alias}
        </h1>
        <div className="flex flex-row space-x-3">
          {twitter && (
            <Link href={`https://www.x.com/${twitter}`}>
              <Image src={Twitter} alt='Twitter' className='w-4 aspect-square' />
            </Link>
          )}
          {twitch && (
            <Link href={`https://www.twitch.com/${twitch}`}>
              <Image src={Twitch} alt='Twitch' className='w-4 aspect-square' />
            </Link>
          )}
          {instagram && (
            <Link href={`https://www.instagram.com/${instagram}`}>
              <Image src={Instagram} alt='Instagram' className='w-4 aspect-square' />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
