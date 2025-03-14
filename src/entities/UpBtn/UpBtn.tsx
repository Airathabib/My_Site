'use client';
import React, { useEffect, useState } from 'react';
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='42'
            height='42'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-up'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
          </svg>
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default UpBtn;
