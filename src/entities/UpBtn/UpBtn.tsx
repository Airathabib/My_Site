'use client';
import React, { useEffect, useState } from 'react';
import { Icon } from '@/shared/UI/Icon/Icon';
import styles from './UpBtn.module.scss';

const UpBtn: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => setScroll(window.scrollY);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.Wrapper}>
      {scroll > 100 ? (
        <button className={styles.WrapperUpBtn} onClick={goTop}>
          <Icon name='arrowUp' size={32} />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default UpBtn;
