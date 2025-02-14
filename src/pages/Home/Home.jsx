import React from 'react';
import Banner from '../../components/Banner';
import RotatingMenu from '../../components/RotatingMenu';
import TopFoods from '../../components/TopFoods';
import BlogSection from '../../components/BlogSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <TopFoods></TopFoods>
      </div>
      <div>
        <RotatingMenu></RotatingMenu>
      </div>
      <div>
        <BlogSection></BlogSection>
      </div>
    </div>
  );
};

export default Home;
