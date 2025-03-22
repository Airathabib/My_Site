import React from 'react';
import Link from 'next/link';
import UpBtn from '@/entities/UpBtn/UpBtn';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContacts} id='contacts'>
        <h3 className={styles.FooterContactsTitle}>Мои контакты</h3>
        <Image src={'/Hero 3D.svg'} alt='Image' width={200} height={200} />
        <ul className={styles.FooterList}>
          <li className={styles.FooterListItem}>
            <Link
              className={styles.FooterContactsLink}
              href='https://github.com/Airathabib'
              target='_blank'
            >
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
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
              </div>
              <span>Github</span>
            </Link>
          </li>

          <li className={styles.FooterListItem}>
            <Link
              className={styles.FooterContactsLink}
              href='mailto:airat.24@mail.ru'
              target='_blank'
            >
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
                  <path d='M3 7l9 6l9 -6' />
                </svg>
              </div>
              <span>Mail</span>
            </Link>
          </li>
          <li className={styles.FooterListItem}>
            <Link
              className={styles.FooterContactsLink}
              href='https://t.me/Airat_Habibulaev'
              target='_blank'
            >
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
                </svg>
              </div>
              <span>Telegram</span>
            </Link>
          </li>
        </ul>
      </div>
      <UpBtn />
    </div>
  );
};

export default Footer;
