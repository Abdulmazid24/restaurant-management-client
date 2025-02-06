import { motion } from 'framer-motion';
import { useState } from 'react';

import menu1 from '../assets/menu-items/menu-1.jpg';
import menu2 from '../assets/menu-items/menu-2.jpg';
import menu3 from '../assets/menu-items/menu-3.jpg';
import menu4 from '../assets/menu-items/menu-4.jpg';
import menu5 from '../assets/menu-items/menu-5.jpg';
import menu6 from '../assets/menu-items/menu-6.jpg';
import menu7 from '../assets/menu-items/menu-7.jpg';
import menu8 from '../assets/menu-items/menu-8.jpg';
import menu9 from '../assets/menu-items/menu-9.jpg';
import menu10 from '../assets/menu-items/menu-10.jpg';
import MovingText from './MovingText';
import Marquee from 'react-fast-marquee';

const RotatingMenu = () => {
  const [angle, setAngle] = useState(0);
  const menuItems = [
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
    menu8,
    menu9,
    menu10,
  ];

  return (
    <>
      <div className="bg-emerald-950">
        <Marquee>
          <h2 className="text-3xl text-center font-bold mb-6  text-white p-2 rounded">
            🍽️ Our Special Menu
          </h2>
        </Marquee>
      </div>
      <section className="flex justify-around">
        <div>
          <MovingText></MovingText>
        </div>
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Rotating Container */}
          <motion.div
            animate={{ rotate: angle }}
            transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
            className="relative w-[300px] h-[300px] flex justify-center items-center"
          >
            {menuItems.map((image, index) => {
              // Calculate position for each image
              const radius = 120;
              const theta = (index / menuItems.length) * (2 * Math.PI);
              const x = radius * Math.cos(theta);
              const y = radius * Math.sin(theta);

              return (
                <motion.div
                  key={index}
                  className="absolute w-24 h-24 rounded-full overflow-hidden shadow-lg border border-white"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <img
                    src={image}
                    alt={`menu-${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Rotate Manually (Optional) */}
          <button
            onClick={() => setAngle(prev => prev + 45)}
            className="absolute bottom-5 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600"
          >
            Rotate
          </button>
        </div>
        <div>
          <MovingText></MovingText>
        </div>
      </section>
    </>
  );
};

export default RotatingMenu;
