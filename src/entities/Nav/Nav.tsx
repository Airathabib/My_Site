'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeSwitcher from '@/features/theme/ThemeSwitcher';

import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <nav className={styles.Nav}>
      <ul
        className={
          nav
            ? [styles.NavMenu, styles.active].join(' ').toString()
            : [styles.NavMenu].toString()
        }
      >
        <Link
          className={styles.NavLink}
          href='#about'
          onClick={() => setNav(!nav)}
        >
          Обо мне
        </Link>

        <Link
          className={styles.NavLink}
          href='#experience'
          onClick={() => setNav(!nav)}
        >
          Опыт работы
        </Link>

        <Link
          className={styles.NavLink}
          href='#stack'
          onClick={() => setNav(!nav)}
        >
          Мой стек
        </Link>

        <Link
          className={styles.NavLink}
          href='#contacts'
          onClick={() => setNav(!nav)}
        >
          Контакты
        </Link>
      </ul>
      <ThemeSwitcher />
      <div onClick={() => setNav(!nav)} className={styles.NavMobileBtn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </nav>
  );
};

export default Nav;
