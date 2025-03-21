import Header from '@/pages/Header/page';
import Hero from '@/pages/Hero/page';
import About from '@/pages/About/page';
import Experience from '@/pages/Experience/page';
import MyStack from '@/pages/MyStack/page';
import Footer from '@/pages/Footer/page';
import MyProjects from '@/pages/MyProjects/page';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <MyStack />
      <MyProjects />
      <Footer />
    </div>
  );
}
