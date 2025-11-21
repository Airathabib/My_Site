'use client';
import React, { useState } from 'react';
import Layout from './Layout/LayoutProject';
import ReactJS from './ReactJS/ReactProject';
import { Icon } from '@/shared/UI/Icon/Icon';
import styles from './MyProjects.module.scss';

const MyProjects: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className={styles.Projects}>
      <div>
        <h1 className={styles.ProjectsTitle}>Мои проекты</h1>
      </div>
      <div className={styles.ProjectsBtnWrapper}>
        <button
          className={styles.ProjectsBtn}
          onClick={() => {
            setIsVisible(true);
          }}
        >
          {' '}
          <span>Верстка</span>
          <Icon name='tags' size={20} />
        </button>
        <button
          className={styles.ProjectsBtn}
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <Icon name='react' size={20} />
          <span>React/JS</span>
        </button>
      </div>
      <div>{isVisible ? <Layout /> : <ReactJS />}</div>
    </div>
  );
};

export default MyProjects;
