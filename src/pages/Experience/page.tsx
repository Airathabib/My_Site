import Image from 'next/image';
import styles from './Experience.module.scss';
import React from 'react';

const  Experience:React.FC = () =>{
  return (
    <div className={styles.Experience} id='experience'>
      <h2 className={styles.ExperienceTitle}>Опыт работы</h2>
      <div className={styles.ExperienceWrapper}>
        <Image
          src={'/Content Image 02.svg'}
          alt='image'
          width={150}
          height={150}
        />
        <div className={styles.ExperienceDescr}>
          <div className={styles.ExperienceDescrBlock}>
            <h3 className={styles.ExperienceDescrTitle}>Веб-разработчик</h3>
            <p className={styles.ExperienceDescrText}>
              Проходил стажировку с сентября по ноябрь 2024г. в компании
              &rdquo;НАФИ&rdquo; на должности React-разработчика. Работал в
              команде, с полным циклом разработки, от анализа рынка и до
              конечной верстки проекта.
            </p>
          </div>
          <div className={styles.ExperienceDescrBlock}>
            <h4 className={styles.ExperienceDescrTitleH4}>Достижения</h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>
                Разработал адаптивный лендинг с использованием технологий React
                и Tailwind.
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Разработал форму обратной связи и проверкой с помощью Яндекс
                капчи.
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Создал переиспользуемые компоненты для дальнейшего использования
                разработчиками.
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.ExperienceDescrTitleH4}>Стек технологий</h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>HTML5</li>
              <li className={styles.ExperienceDescrListItem}>Tailwind</li>
              <li className={styles.ExperienceDescrListItem}>JavaScript</li>
              <li className={styles.ExperienceDescrListItem}>React</li>
            </ul>
          </div>
          <div>
            <h4 className={styles.ExperienceDescrTitleH4}>Инструменты:</h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>Webpack</li>
              <li className={styles.ExperienceDescrListItem}>Vite</li>
              <li className={styles.ExperienceDescrListItem}>
                Visual Studio Code
              </li>
              <li className={styles.ExperienceDescrListItem}>Figma</li>
            </ul>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}

export default Experience;
