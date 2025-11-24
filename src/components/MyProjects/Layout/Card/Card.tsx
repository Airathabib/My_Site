import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardInfo } from '@/entities/data/data';
import { Icon } from '@/shared/UI/Icon/Icon';
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
              <Icon name='git' size={16} />
              <span>Посмотреть код</span>
            </Link>

            <Link href={showLink} target='_blank' className={styles.CardLink}>
              <Icon name='cardLink' size={16} />
              <span>Посмотреть вживую</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
