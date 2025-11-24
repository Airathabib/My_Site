'use client';

import { useTheme } from 'next-themes';
import { Icon } from '@/shared/UI/Icon/Icon';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const { theme = 'light', setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={styles.switcherWrapper}>
      <button
        type='button'
        className={styles.switcher}
        onClick={toggleTheme}
        aria-label={
          theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'
        }
      >
        <div className={styles.iconWrapper} data-active={theme === 'light'}>
          <Icon name='sun' size={24} />
        </div>
        <div className={styles.iconWrapper} data-active={theme === 'dark'}>
          <Icon name='moon' size={24} />
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
