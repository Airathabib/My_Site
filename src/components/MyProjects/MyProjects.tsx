'use client';
import React, { useState } from 'react';
import Layout from './Layout/LayoutProject';
import ReactJS from './ReactJS/ReactProject';
import Button from '@/shared/Button/Button';
import styles from './MyProjects.module.scss';

const MyProjects: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className={styles.Projects}>
      <h1 className={styles.ProjectsTitle}>Мои проекты</h1>
      <div className={styles.ProjectsBtnWrapper}>
        <Button
          variant='secondary'
          icon='react'
          aria-pressed={!isVisible}
          onClick={() => setIsVisible(false)}
        >
          React/JS
        </Button>
        <Button
          variant='secondary'
          icon='tags'
          aria-pressed={isVisible}
          onClick={() => setIsVisible(true)}
        >
          Верстка
        </Button>
      </div>
      <div>{isVisible ? <Layout /> : <ReactJS />}</div>
    </div>
  );
};

export default MyProjects;
