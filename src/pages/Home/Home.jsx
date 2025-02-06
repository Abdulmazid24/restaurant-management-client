import React from 'react';
import Banner from '../../components/Banner';
import RotatingMenu from '../../components/RotatingMenu';
import MovingText from '../../components/MovingText';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <RotatingMenu></RotatingMenu>
      </div>
    </div>
  );
};

export default Home;
