import Container from '@/components/container/Container';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Container>
      <h2 className="text-2xl font-semibold mb-10">Books & More</h2>
      <p className="mb-5">
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

      <p>
        <strong className="font-semibold">Technologies Used:</strong> React,
        NextJS
      </p>
    </Container>
  );
};

export default page;
