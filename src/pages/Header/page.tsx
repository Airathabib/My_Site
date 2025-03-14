import React from 'react';
import Nav from '@/entities/Nav/Nav';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Nav />
    </div>
  );
};

export default Header;
