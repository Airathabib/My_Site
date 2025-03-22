import React from 'react';
import Card from './Card/Card';

import styles from './Layout.module.scss';

type CardInfo = {
  id?: string;
  src: string;
  alt: string;
  title: string;
  descr: string;
  gitLink: string;
  showLink: string;
};

const LAYOUT: CardInfo[] = [
  {
    id: crypto.randomUUID(),
    alt: 'JS animation',
    src: '/JSAnim.png',
    title: 'Учебное задание',
    descr: ' Учебное задание. Верстка лендинга. Практика GSAP',
    gitLink: 'https://github.com/Airathabib/JS_animation',
    showLink: 'https://airathabib.github.io/JS_animation/',
  },
  {
    id: crypto.randomUUID(),
    src: '/flappy.png',
    alt: 'flappy bird game',
    title: 'Учебное задание. Игра Flappy Bird',
    descr: ' Учебное задание. Верстка игры Flappy Bird. Практика JS',
    gitLink: 'https://github.com/Airathabib/---Flappy-Bird-JS-Canvas-API-',
    showLink: 'https://airathabib.github.io/---Flappy-Bird-JS-Canvas-API-/',
  },
  {
    id: crypto.randomUUID(),
    src: '/snake.png',
    alt: 'snake game',
    title: 'Учебное задание. Игра змейка',
    descr: ' Учебное задание. Верстка игры змейка. Практика JS',
    gitLink: 'https://github.com/Airathabib/snake',
    showLink: 'https://airathabib.github.io/snake/',
  },
];

const Layout: React.FC = () => {
  const data = LAYOUT;
  return (
    <div className={styles.Layout}>
      <div className={styles.LayoutCardWrapper}>
        {data.map((item) => (
          <Card
            key={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            descr={item.descr}
            gitLink={item.gitLink}
            showLink={item.showLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;
