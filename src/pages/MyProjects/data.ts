export type CardInfo = {
  id?: string;
  src: string;
  alt: string;
  title: string;
  descr: string;
  gitLink: string;
  showLink: string;
};

export const REACT_PROJECT: CardInfo[] = [
  {
    id: crypto.randomUUID(),
    src: '/book-shop.png',
    alt: 'Book-Shop',
    title: 'Онлайн магазин книг',
    descr: ' Сайт по продаже книг на основе Google Books',
    gitLink: 'https://github.com/Airathabib/Book_Shop_NextJS',
    showLink: 'https://book-shop-next-js-nine.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    src: '/practice.png',
    alt: 'Practice',
    title: 'Тестовое задание',
    descr: ' Тестовое задание. Верстка лендинга на NextJS',
    gitLink: 'https://github.com/Airathabib/Practice',
    showLink: 'https://practice-roan-pi.vercel.app/',
  },
];

export const LAYOUT: CardInfo[] = [
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
    src: '/snake.png',
    alt: 'snake game',
    title: 'Учебное задание. Игра змейка',
    descr: ' Учебное задание. Верстка игры змейка. Практика JS',
    gitLink: 'https://github.com/Airathabib/snake',
    showLink: 'https://airathabib.github.io/snake/',
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
];
