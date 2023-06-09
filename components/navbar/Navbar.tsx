'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import PalmTree from '/public/favicon.ico';
import { cn } from '@/app/helpers/utils';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <>
      <nav className="mx-10 h-14 left-0 flex justify-between scroll-smooth lg:mx-1/8">
        <Link
          className="flex justify-center flex-col text-2xl cursor-pointer"
          href={'/'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
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
        <button
          className={cn(
            'flex justify-center flex-col',
            styles.linksIconContainer
          )}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          {dropdownVisible ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} />
          )}
        </button>
      </nav>
      <div
        className={cn(
          'flex flex-col px-10 w-full pt-3',
          styles.dropdownContainer,
          !dropdownVisible && styles.disabled
        )}
      >
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'#about'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          About
        </Link>
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'#projects'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          Projects
        </Link>
      </div>
    </>
  );
};

export default Navbar;
