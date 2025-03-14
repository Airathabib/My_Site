'use client';
import { FC, PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import styles from './ThemeSwther.module.scss';

const ThemeSwither: FC<PropsWithChildren> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.Wrapper}>
      {theme === 'dark' ? (
        <button className={styles.WrapperSwitchBtn}>
          <BsSun
            className={styles.WrapperSwitchSun}
            onClick={() => setTheme('light')}
          />
        </button>
      ) : (
        <button className={styles.WrapperSwitchBtn}>
          <FiMoon
            className={styles.WrapperSwitchMoon}
            onClick={() => setTheme('dark')}
          />
        </button>
      )}
      {children}
    </div>
  );
};

export default ThemeSwither;
