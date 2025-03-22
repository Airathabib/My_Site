import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.About} id='about'>
      <h2 className={styles.AboutTitle}>Обо мне</h2>
      <div className={styles.AboutWrapper}>
        <div>
          <Image
            className={styles.AboutImage}
            src={'/Content Image.svg'}
            alt='image'
            width={0}
            height={0}
          />
        </div>
        <div className={styles.AboutBlock}>
          <p className={styles.AboutDescr}>
            <span className={styles.AboutDescrMe}></span>
            Frontend-разработчик из Ставрополя (Россия), который ищет развития и
            профессионального роста.
          </p>

          <p className={styles.AboutDescr}>
            <span className={styles.AboutDescrInterface}></span>
            Пришёл во frontend-разработку, чтобы разрабатывать крутые интерфейсы
            и максимально улучшать пользовательский опыт.
          </p>

          <p className={styles.AboutDescr}>
            <span className={styles.AboutDescrResourses}></span>
            Cлушаю{' '}
            <Link
              className={styles.AboutLink}
              href='https://web-standards.ru/'
              target='_blank'
            >
              {' '}
              веб-стандарты,
            </Link>
            смотрю лекции
            <Link
              className={styles.AboutLink}
              href='https://www.youtube.com/c/%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4/videos'
              target='_blank'
            >
              ШРИ Яндекса,
            </Link>
            читаю статьи на Habr и Medium. Постоянно читаю новую информацию в
            <Link
              className={styles.AboutLink}
              href='https://thecode.media/tag/frnt/'
              target='_blank'
            >
              Яндекс Практикуме
            </Link>
            и
            <Link
              className={styles.AboutLink}
              href='https://doka.guide/'
              target='_blank'
            >
              Доке.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
