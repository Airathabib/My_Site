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
    src: '/auto-seller.png',
    alt: 'TANK_AUTO',
    title: 'АВТОРУСЬ TANK',
    descr:
      'Современный адаптивный лендинг официального дилера автомобилей TANK.',
    gitLink: 'https://github.com/Airathabib/auto_seller',
    showLink:
      'http://auto-seller-git-main-airats-projects-5df64959.vercel.app/',
  },
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
  {
    id: crypto.randomUUID(),
    src: '/mern_blog.png',
    title: 'MERN блог',
    alt: 'Pet project',
    descr:
      'Современный блог-платформа с вложенными комментариями, лайками, тегами и тёмной темой.Построен на React, Redux Toolkit, Material UI и TypeScript-дружественной архитектуре.',
    gitLink: 'https://github.com/Airathabib/mern-blog-frontend',
    showLink: 'https://mern-blog-frontend-taupe.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    src: '/el_store.png',
    title: 'Electronic store',
    alt: 'Pet project',
    descr:
      'Современный интернет-магазин с полной функциональностью. Учебный fullstack-проект с использованием: фронтенда на React + Redux Toolkit и бэкенда на Node.js + Express + PostgreSQL.',
    gitLink: 'https://github.com/Airathabib/skyLine-gadgets-frontend',
    showLink: 'https://sky-line-gadgets-frontend.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    src: '/font-converter.png',
    alt: 'Font & Icon Converter',
    title: 'Font & Icon Converter (Electron)',
    descr:
      'Desktop-приложение для конвертации шрифтов (TTF/OTF → WOFF/WOFF2) и генерации фавиконок. Построено на Electron + React + TypeScript + Node.js. Включает встроенный Express-сервер, работу с бинарными данными (sharp, ttf2woff), CSP-политики и оптимизированную сборку через Vite.',
    gitLink: 'https://github.com/Airathabib/font-converter',
    showLink: '',
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
