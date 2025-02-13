import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/different_foods.jpg')" }}
          >
            <div className="absolute inset-0"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white z-10 px-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Delicious Meals Await You
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Experience mouth-watering dishes made with fresh ingredients.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('foods')}
                className="mt-6 bg-gradient-to-r from-pink-950 to-purple-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all"
              >
                Explore Our Menu
              </motion.button>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/burger-pizza.jpg')" }}
          >
            <div className="absolute inset-0"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white z-10 px-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Taste the Best Burgers & Pizzas
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Crispy, cheesy, and full of flavor. Just what you need!
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('foods')}
                className="mt-6 bg-gradient-to-r from-pink-950 to-purple-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all"
              >
                View All Dishes
              </motion.button>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/healthy.jpg')" }}
          >
            <div className="absolute inset-0"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white z-10 px-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Healthy & Organic Food
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Fresh, natural, and nutritious meals for a healthy lifestyle.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('foods')}
                className="mt-6 bg-gradient-to-r from-pink-950 to-purple-600  text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all"
              >
                Check Our Specials
              </motion.button>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
