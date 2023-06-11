import Container from '@/components/container/Container';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Container>
      <h2 className="text-2xl font-semibold">Books & More</h2>
    </Container>
  );
};

export default page;
