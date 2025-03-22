import React from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import MyStack from '@/components/MyStack/MyStack';
import MyProjects from '@/components/MyProjects/MyProjects';
import Footer from '@/components/Footer/Footer';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <MyStack />
      <MyProjects />
      <Footer />
    </>
  );
};

export default MainPage;
