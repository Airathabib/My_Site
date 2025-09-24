import styles from './MyStack.module.scss';
import Image from 'next/image';

const techStack = [
  { src: '/html5.svg', alt: 'HTML5', name: 'HTML5' },
  { src: '/css3.svg', alt: 'CSS3', name: 'CSS3' },
  { src: '/sass.svg', alt: 'Sass', name: 'SASS' },
  { src: '/tailwind.svg', alt: 'Tailwind', name: 'Tailwind' },
  { src: '/javascript.svg', alt: 'JavaScript', name: 'JavaScript' },
  { src: '/typescript.svg', alt: 'TypeScript', name: 'TypeScript' },
  { src: '/react.svg', alt: 'React', name: 'React' },
  { src: '/next.svg', alt: 'Next-JS', name: 'NextJS' },
  { src: '/redux.svg', alt: 'Redux', name: 'Redux' },
  { src: '/reactrouter.svg', alt: 'React Router', name: 'React Router' },
];

const toolsStack = [
  { src: '/vscode.svg', alt: 'VSCode', name: 'VS Code' },
  { src: '/webpack.svg', alt: 'Webpack', name: 'Webpack' },
  { src: '/vite.svg', alt: 'Vite', name: 'Vite' },
  { src: '/gulp.svg', alt: 'Gulp', name: 'Gulp' },
  { src: '/git.svg', alt: 'Git', name: 'Git' },
];

const StackItem = ({ item }: { item: { src: string; alt: string; name: string } }) => (
  <li className={styles.StackListItem}>
    <Image src={item.src} alt={item.alt} width={48} height={48} />
    <span className={styles.StackListItemText}>{item.name}</span>
  </li>
);

export default function MyStack() {
  return (
    <div className={styles.Stack} id='stack'>
      <h2 className={styles.StackTitle}>Мой стек</h2>
      <ul className={styles.StackList}>
        {techStack.map((item, index) => (
          <StackItem key={index} item={item} />
        ))}
      </ul>

      <h3 className={styles.StackTitleH3}>Инструменты и прочее:</h3>
      <ul className={styles.StackList}>
        {toolsStack.map((item, index) => (
          <StackItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
