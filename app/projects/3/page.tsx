import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="px-[34px] mt-[100px] max-w-[980px] w-full mx-auto lg:px-0 lg:mt-40">
        <h2 className="text-2xl font-semibold mb-10">Portfolio</h2>
        <p className="mb-5">
          NextJS project highlighting a little bit more information about
          myself. Uses the new Next 13 app directory. Check out the{' '}
          <a
            href="https://www.urbanobaz.com/"
            className="text-blue-600 hover:font-medium"
          >
            live site
          </a>{' '}
          or the Github{' '}
          <a
            href="https://github.com/urbanobaz/portfolioV3"
            className="text-blue-600 hover:font-medium"
          >
            repository
          </a>
          .
        </p>

        <p>
          <strong className="font-semibold">Technologies Used:</strong> React,
          TypeScript, TailwindCSS, NextJS
        </p>
        <Image
          src="/portfolio.png"
          alt={'Project image hightlight'}
          width={980}
          height={750}
          className="mt-5 hidden rounded-xl sm:block"
        />
        <Image
          src="/portfolio-small.png"
          alt={'Project image hightlight'}
          width={980}
          height={750}
          className="mt-5 block rounded-xl sm:hidden"
        />
      </div>
    </div>
  );
}
