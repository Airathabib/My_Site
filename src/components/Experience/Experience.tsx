import Image from 'next/image';
import styles from './Experience.module.scss';
import React from 'react';

export default function Experience() {
  return (
    <div className={styles.Experience} id='experience'>
      <h2 className={styles.ExperienceTitle}>Опыт работы</h2>

      {/* === БЛОК 1: Мессенджер (Новый опыт) === */}
      <div className={styles.ExperienceWrapper}>
        <Image
          src={'/messenger.svg'}
          alt='Messenger Project'
          width={150}
          height={150}
          className={styles.ExperienceIcon}
        />
        <div className={styles.ExperienceDescr}>
          <div className={styles.ExperienceDescrBlock}>
            <h3 className={styles.ExperienceDescrTitle}>
              Frontend-разработчик (Стажировка)
            </h3>
            <p className={styles.ExperienceDescrText}>
              Разработка полнофункционального веб-мессенджера в составе команды
              разработчиков. Реализация real-time обмена сообщениями с
              использованием WebSocket. Работа по архитектуре Feature-Sliced
              Design (FSD) для обеспечения масштабируемости и чистоты кода.
            </p>
          </div>

          <div className={styles.ExperienceDescrBlock}>
            <h4 className={styles.ExperienceDescrTitleH4}>
              Ключевые задачи и достижения
            </h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>
                Реализовал модуль чата с поддержкой отправки текстовых сообщений
                и эмодзи в реальном времени.
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Интегрировал WebSocket для двустороннего обмена данными без
                перезагрузки страницы.
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Применил архитектуру FSD, разделив проект на слои (app, pages,
                widgets, features, entities, shared).
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Настроил глобальное состояние приложения с помощью Redux Toolkit
                (RTK Query) для управления данными пользователей и сообщений.
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Обеспечил типизацию всего проекта на TypeScript, включая пропсы
                компонентов и ответы API.
              </li>
            </ul>
          </div>

          <div className={styles.ExperienceDescrBlock}>
            <h4 className={styles.ExperienceDescrTitleH4}>Стек технологий</h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>
                Next.js 16 / React 19
              </li>
              <li className={styles.ExperienceDescrListItem}>TypeScript</li>
              <li className={styles.ExperienceDescrListItem}>
                Redux Toolkit (RTK Query)
              </li>
              <li className={styles.ExperienceDescrListItem}>WebSocket</li>
              <li className={styles.ExperienceDescrListItem}>
                SCSS Modules / Styled Components
              </li>
              <li className={styles.ExperienceDescrListItem}>
                React Hook Form
              </li>
            </ul>
          </div>

          <div className={styles.ExperienceDescrBlock}>
            <h4 className={styles.ExperienceDescrTitleH4}>
              Инструменты и практики
            </h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>
                Feature-Sliced Design (FSD)
              </li>
              <li className={styles.ExperienceDescrListItem}>Git / GitHub</li>
              <li className={styles.ExperienceDescrListItem}>
                ESLint / Prettier / Stylelint
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Husky / lint-staged (Pre-commit hooks)
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Vercel (Deploy)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* === БЛОК 2: НАФИ (Старый опыт) === */}
      <div className={styles.ExperienceWrapper}>
        <Image
          src={'/Content Image 02.svg'}
          alt='NAFI Internship'
          width={150}
          height={150}
          className={styles.ExperienceIcon}
        />
        <div className={styles.ExperienceDescr}>
          <div className={styles.ExperienceDescrBlock}>
            <h3 className={styles.ExperienceDescrTitle}>
              Веб-разработчик (Стажировка)
            </h3>
            <p className={styles.ExperienceDescrText}>
              Проходил стажировку с сентября по ноябрь 2024г. в аналитическом
              центре &rdquo;НАФИ&rdquo; на должности React-разработчика. Работал
              в команде над полным циклом разработки: от анализа требований до
              верстки и интеграции.
            </p>
          </div>
          <div className={styles.ExperienceDescrBlock}>
            <h4 className={styles.ExperienceDescrTitleH4}>Достижения</h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>
                Разработал адаптивный лендинг с использованием React и Tailwind
                CSS.
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Реализовал форму обратной связи с валидацией и защитой от спама
                через Яндекс Капчу.
              </li>
              <li className={styles.ExperienceDescrListItem}>
                Создал библиотеку переиспользуемых UI-компонентов для ускорения
                разработки.
              </li>
            </ul>
          </div>
          <div className={styles.ExperienceDescrBlock}>
            <h4 className={styles.ExperienceDescrTitleH4}>Стек технологий</h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>React</li>
              <li className={styles.ExperienceDescrListItem}>Tailwind CSS</li>
              <li className={styles.ExperienceDescrListItem}>
                JavaScript (ES6+)
              </li>
              <li className={styles.ExperienceDescrListItem}>HTML5 / SCSS</li>
            </ul>
          </div>
          <div className={styles.ExperienceDescrBlock}>
            <h4 className={styles.ExperienceDescrTitleH4}>Инструменты</h4>
            <ul className={styles.ExperienceDescrList}>
              <li className={styles.ExperienceDescrListItem}>Webpack / Vite</li>
              <li className={styles.ExperienceDescrListItem}>Figma</li>
              <li className={styles.ExperienceDescrListItem}>VS Code</li>
              <li className={styles.ExperienceDescrListItem}>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
