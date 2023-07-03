import Container from '@/components/container/Container';
import Image from 'next/image';

export default function BooksPage() {
  return (
    <Container>
      <h2 className="text-2xl font-semibold mb-10">Books & More</h2>
      <p className="mb-10">
        NextJS project that lets you keep track of the books in your collection.
        Uses the Google Books API to bring in book information when you add a
        book. Clerk for authentication, Vercel for hosting. Check out the{' '}
        <a
          href="https://futureinblockchain.com"
          className="text-blue-600 hover:font-medium"
        >
          live site
        </a>{' '}
        or the Github{' '}
        <a
          href="https://github.com/urbanobaz/next13-mongo"
          className="text-blue-600 hover:font-medium"
        >
          repository
        </a>
        .
      </p>

      <h2 className="text-md font-semibold">Still to do:</h2>
      <ul className="flex flex-col list-disc ml-6">
        <li className="line-through">Add authentication</li>
        <li className="line-through">
          Set up database to store books for each user account
        </li>
        <li>Improve design</li>
      </ul>

      <p className="mt-10">
        <strong className="font-semibold">Technologies Used:</strong> React,
        TypeScript, NextJS, MongoDB, Clerk, Vercel, TailwindCSS, Google Books
        API
      </p>

      <Image
        src="/shots-books.png"
        alt={'Project image hightlight'}
        width={980}
        height={750}
        className="mt-5"
      />
    </Container>
  );
}
