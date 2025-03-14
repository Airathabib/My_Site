import React from 'react';
import Image from 'next/image';

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={styles.Hero}>
      <div>
        <h1 className={styles.HeroTitle}>Привет, я Айрат!</h1>
        <span className={styles.HeroGreet}>Будем знакомы</span>
      </div>
      <div>
        <Image
          className={styles.HeroImage}
          src={'/cuate.svg'}
          alt='developer'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Hero;
