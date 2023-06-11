import { cn } from '@/app/helpers/utils';
import { FC, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={cn(styles.container, 'my-20')}>
      <div className={cn(styles.containerWrapper)}>{children}</div>
    </div>
  );
};

export default Container;
