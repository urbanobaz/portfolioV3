import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full flex justify-center mt-10">
      <h2 className="text-xl">Books & More</h2>
    </div>
  );
};

export default page;
