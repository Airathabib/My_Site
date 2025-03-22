import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardInfo } from '@/entities/data/data';

import styles from './Card.module.scss';

const Card: React.FC<CardInfo> = (props) => {
  const { src, alt, title, descr, gitLink, showLink } = props;
  return (
    <>
      <div className={styles.Card}>
        <div className={styles.CardImageWrapper}>
          <Image
            className={styles.CardImage}
            src={src}
            alt={alt}
            width={550}
            height={350}
            layout='responsive'
          />
        </div>
        <div className={styles.CardInfo}>
          <h3 className={styles.CardInfoTitle}>{title}</h3>
          <p className={styles.CardInfoDescr}>{descr}</p>
          <div className={styles.CardLinkWrapper}>
            <Link href={gitLink} target='_blank' className={styles.CardLink}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
              </svg>
              <span>Посмотреть код</span>
            </Link>

            <Link href={showLink} target='_blank' className={styles.CardLink}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
                <path d='M11 13l9 -9' />
                <path d='M15 4h5v5' />
              </svg>
              <span>Посмотреть вживую</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
