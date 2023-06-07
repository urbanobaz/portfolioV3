import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import PalmTree from '/public/favicon.ico';
import { cn } from '@/app/helpers/utils';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="mx-10 h-14 left-0 flex justify-between lg:mx-1/8">
      <Link
        className="flex justify-center flex-col text-2xl cursor-pointer"
        href={'/'}
      >
        <Image height={30} src={PalmTree} alt={'Logo'} />
      </Link>

      <div
        className={cn('flex justify-center flex-col', styles.linksContainer)}
      >
        <ul>
          <Link className="mr-4 cursor-pointer" href={'/projects/1'}>
            Project 1
          </Link>
          <Link className="mr-4 cursor-pointer" href={'/projects/2'}>
            Project 2
          </Link>
          <Link className="cursor-pointer" href={'/projects/3'}>
            Project 3
          </Link>
        </ul>
      </div>
      <div
        className={cn(
          'flex justify-center flex-col',
          styles.linksIconContainer
        )}
      >
        <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon>
      </div>
    </nav>
  );
};

export default Navbar;
