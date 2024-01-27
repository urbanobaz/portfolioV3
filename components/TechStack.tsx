import { motion } from 'framer-motion';
import Image from 'next/image';

const TechStack = () => {
  return (
    <div className="flex flex-col max-w-[400px]">
      <div className="flex w-full">
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/js-logo.png"
            alt="Javascript logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/react-logo.png"
            alt="React logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/typescript.svg"
            alt="TypeScript logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/nodejs.jpg"
            alt="TypeScript logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
      </div>
      <div className="flex w-full">
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/html.png"
            alt="HTML logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/css.webp"
            alt="CSS logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/python.jpeg"
            alt="Python logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/c.png"
            alt="C logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </motion.div>
      </div>
      <div className="flex w-full">
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/nextjs.svg"
            alt="NextJS logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.55, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/mongodb.png"
            alt="MongoDB logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/postgres.png"
            alt="Postgres logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.65, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/aws.jpeg"
            alt="AWS logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </motion.div>
      </div>
      <div className="flex w-full">
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/figma.png"
            alt="Figma logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.75, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/rest-api.jpeg"
            alt="Rest API logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/sql.jpeg"
            alt="SQL logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.85, type: 'spring' }}
          className="w-1/3 md:w-1/4  rounded-xl aspect-[1/1] m-2"
        >
          <Image
            src="/java.png"
            alt="Java logo"
            width={200}
            height={200}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
