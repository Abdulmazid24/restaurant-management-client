import { useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
const MovingText = () => {
  useEffect(() => {
    gsap.to('.moving-content', {
      y: -200,
      duration: 5,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'Grilled Chicken',
      image: 'https://i.ibb.co.com/Q7Z1bCdf/grilled-checan.jpg',
    },
    {
      id: 2,
      name: 'Cheese Burger',
      image: 'https://i.ibb.co.com/s9PcR2LS/cheese-burger.jpg',
    },
    {
      id: 3,
      name: 'Pasta Alfredo',
      image: 'https://i.ibb.co.com/Q7tSXvWf/pusta.jpg',
    },
    {
      id: 4,
      name: 'Vegetable Pizza',
      image: 'https://i.ibb.co.com/3mtnPW7Q/pizza.jpg',
    },
    {
      id: 5,
      name: 'Sushi Rolls',
      image: 'https://i.ibb.co.com/35pqrsp5/rolls.jpg',
    },
  ];
  return (
    <div className="   flex flex-col items-center py-10">
      <div className="relative w-full max-w-lg flex flex-col items-center space-y-4 text-white">
        {menuItems.map((item, index) => (
          <div className=" moving-content bg-gray-800 p-4 rounded-lg shadow-lg w-72 flex items-center gap-4 border border-gray-700">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingText;
