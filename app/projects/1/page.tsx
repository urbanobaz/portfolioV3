import Container from '@/components/container/Container';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Container>
      <h2 className="text-2xl font-semibold mb-10">Books & More</h2>
      <p className="mb-10">
        NextJS project that lets you keep track of the books in your collection.
        Uses the Google Books API to bring in book information when you add a
        book. Check out the{' '}
        <a
          href="https://booksv3.vercel.app/"
          className="text-blue-600 hover:font-medium"
        >
          live site
        </a>{' '}
        or the Github{' '}
        <a
          href="https://github.com/urbanobaz/booksv3"
          className="text-blue-600 hover:font-medium"
        >
          repository
        </a>
        .
      </p>

      <h2 className="text-md font-semibold">Still to do:</h2>
      <ul className="flex flex-col list-disc ml-6">
        <li>Add authentication</li>
        <li>Set up database to store books for each user account</li>
        <li>Improve design</li>
      </ul>

      <p className="mt-10">
        <strong className="font-semibold">Technologies Used:</strong> React,
        NextJS, Google Books API
      </p>
    </Container>
  );
};

export default page;
