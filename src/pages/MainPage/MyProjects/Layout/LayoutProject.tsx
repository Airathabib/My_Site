import React from 'react';
import Card from './Card/Card';
import { LAYOUT } from '../data';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  const data = LAYOUT;
  return (
    <div className={styles.Layout}>
      <div className={styles.LayoutCardWrapper}>
        {data.map((item) => (
          <Card
            key={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            descr={item.descr}
            gitLink={item.gitLink}
            showLink={item.showLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;
