import React from 'react';
import Header from '@/pages/MainPage/Header/Header';
import Hero from '@/pages/MainPage/Hero/Hero';
import About from '@/pages/MainPage/About/About';
import Experience from '@/pages/MainPage/Experience/Experience';
import MyStack from '@/pages/MainPage/MyStack/MyStack';
import Footer from '@/pages/MainPage/Footer/Footer';
import MyProjects from './MyProjects/MyProjects';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <MyStack />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default MainPage;
