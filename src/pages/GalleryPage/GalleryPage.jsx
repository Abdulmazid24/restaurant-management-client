import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  {
    src: 'https://i.ibb.co.com/R1c30vG/Margherita-Pizza.jpg',
    title: 'Margherita Pizza',
  },
  {
    src: 'https://i.ibb.co.com/bjPnMqxF/Spaghetti-Carbonara.jpg',
    title: 'Spaghetti Carbonara',
  },
  {
    src: 'https://i.ibb.co.com/67BgFZyP/Cheeseburger.jpg',
    title: 'Cheeseburger',
  },
  {
    src: 'https://i.ibb.co.com/J1jjm5K/Greek-Salad.jpg',
    title: 'Caesar Salad',
  },
  {
    src: 'https://i.ibb.co.com/Q7Z1bCdf/grilled-checan.jpg',
    title: 'Grilled Salmon',
  },
  {
    src: 'https://i.ibb.co.com/Y7MTntG7/Chocolate-Lava-Cake.jpg',
    title: 'Chocolate Lava Cake',
  },
  {
    src: 'https://i.ibb.co.com/HpP4pz2X/Sushi-Platter.jpg',
    title: 'Sushi Platter',
  },
  {
    src: 'https://i.ibb.co.com/jZsRf5wj/Chicken-Tikka-Masala.jpg',
    title: 'Chicken Tikka Masala',
  },
  {
    src: 'https://i.ibb.co.com/spjJHm4t/French-Fries.jpg',
    title: 'French Fries',
  },
  {
    src: 'https://i.ibb.co.com/Sw6BpQkn/Tandoori-Chicken.jpg',
    title: 'Tandoori Chicken',
  },
];

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      {/* Page Title */}
      <h1 className="text-5xl font-bold mb-10 text-center">📸 Food Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-40 h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox for Fullscreen View */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map(img => ({ src: img.src }))}
        index={currentIndex}
      />
    </div>
  );
};

export default GalleryPage;
