import React from 'react';
import Card from './Card/Card';

import { REACT_PROJECT } from '../../../../entities/data/data';
import styles from './React.module.scss';

const ReactJS: React.FC = () => {
  const data = REACT_PROJECT;
  return (
    <div className={styles.React}>
      <div className={styles.ReactCardWrapper}>
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

export default ReactJS;
