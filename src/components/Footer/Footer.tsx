import React from 'react';
import Link from 'next/link';
import UpBtn from '@/entities/UpBtn/UpBtn';
import Image from 'next/image';
import { Icon } from '@/shared/UI/Icon/Icon';
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
              <Icon name='git' size={20} />

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
                <Icon name='mail' size={22} />
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
                <Icon name='telegram' size={22} />
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
