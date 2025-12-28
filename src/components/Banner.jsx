import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useNavigate } from 'react-router-dom';
import { Button } from '../shared/components/ui';

const Banner = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: '/different_foods.jpg',
      title: 'Delicious Meals Await You',
      description: 'Experience mouth-watering dishes made with fresh ingredients.',
      cta: 'Explore Our Menu',
    },
    {
      image: '/burger-pizza.jpg',
      title: 'Taste the Best Burgers & Pizzas',
      description: 'Crispy, cheesy, and full of flavor. Just what you need!',
      cta: 'View All Dishes',
    },
    {
      image: '/healthy.jpg',
      title: 'Healthy & Organic Food',
      description: 'Fresh, natural, and nutritious meals for a healthy lifestyle.',
      cta: 'Check Our Specials',
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[650px] xl:h-[700px] rounded-3xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl"
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 gradient-text"
                  style={{
                    background: 'linear-gradient(135deg, #fff 0%, #ffd700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 font-medium"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/foods')}
                    className="shadow-2xl hover:shadow-primary transition-all duration-300"
                  >
                    {slide.cta}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:grid grid-cols-3 gap-6 max-w-4xl mx-auto -mt-16 relative z-20 px-4"
      >
        {[
          { icon: '🍕', number: '150+', label: 'Delicious Dishes' },
          { icon: '⭐', number: '4.9/5', label: 'Customer Rating' },
          { icon: '👨‍🍳', number: '25+', label: 'Expert Chefs' },
        ].map((stat, index) => (
          <div
            key={index}
            className="glass backdrop-blur-md bg-white/10 dark:bg-black/30 border border-white/20 rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
            <div className="text-sm text-gray-200">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;
