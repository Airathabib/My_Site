import styles from './MyStack.module.scss';
import Image from 'next/image';
export default function MyStack() {
  return (
    <div className={styles.Stack} id='stack'>
      <h2 className={styles.StackTitle}>Мой стек</h2>
      <ul className={styles.StackList}>
        <li className={styles.StackListItem}>
          <Image src={'/html5.svg'} alt='HTML5' width={48} height={48} />
          <span className={styles.StackListItemText}>HTML5</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/css3.svg'} alt='Css3' width={48} height={48} />
          <span className={styles.StackListItemText}>CSS3</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/sass.svg'} alt='Sass' width={48} height={48} />
          <span className={styles.StackListItemText}>SASS</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/tailwind.svg'} alt='Tailwind' width={48} height={48} />
          <span className={styles.StackListItemText}>Tailwind</span>
        </li>
        <li className={styles.StackListItem}>
          <Image
            src={'/javascript.svg'}
            alt='JavaSript'
            width={48}
            height={48}
          />
          <span className={styles.StackListItemText}>JavaScript</span>
        </li>
        <li className={styles.StackListItem}>
          <Image
            src={'/typescript.svg'}
            alt='Typescript'
            width={48}
            height={48}
          />
          <span className={styles.StackListItemText}>TypeScript</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/react.svg'} alt='React' width={48} height={48} />
          <span className={styles.StackListItemText}>React</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/next.svg'} alt='Next-JS' width={48} height={48} />
          <span className={styles.StackListItemText}>NextJS</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/redux.svg'} alt='Redux' width={48} height={48} />
          <span className={styles.StackListItemText}>Redux</span>
        </li>
        <li className={styles.StackListItem}>
          <Image
            src={'/reactrouter.svg'}
            alt='React router'
            width={48}
            height={48}
          />
          <span className={styles.StackListItemText}>React Router</span>
        </li>
      </ul>

      <h3 className={styles.StackTitleH3}>Инструменты и прочее:</h3>
      <ul className={styles.StackList}>
        <li className={styles.StackListItem}>
          <Image src={'/vscode.svg'} alt='VSCode' width={48} height={48} />
          <span className={styles.StackListItemText}>VS Code</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/webpack.svg'} alt='Webpack' width={48} height={48} />
          <span className={styles.StackListItemText}>Webpack</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/vite.svg'} alt='Vite' width={48} height={48} />
          <span className={styles.StackListItemText}>Vite</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/gulp.svg'} alt='Gulp' width={48} height={48} />
          <span className={styles.StackListItemText}>Gulp</span>
        </li>
        <li className={styles.StackListItem}>
          <Image src={'/git.svg'} alt='Git' width={48} height={48} />
          <span className={styles.StackListItemText}>Git</span>
        </li>
      </ul>
    </div>
  );
}
