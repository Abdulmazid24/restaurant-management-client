import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, Button, Badge, Skeleton, SkeletonList } from '../shared/components/ui';
import { API_ENDPOINTS } from '../shared/constants';
import apiClient from '../shared/services/apiClient';

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopFoods = async () => {
      try {
        setLoading(true);
        // Using legacy endpoint for backward compatibility
        const response = await apiClient.get('/top-foods');
        setFoods(response);
      } catch (error) {
        console.error('Error fetching top foods:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopFoods();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 px-4 py-2 rounded-full mb-4">
          <span className="text-2xl">🔥</span>
          <Badge variant="primary" size="lg">
            Best Sellers
          </Badge>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-neutral-50 mb-4">
          Top Selling Foods
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Discover our most loved dishes that keep customers coming back for more
        </p>
      </motion.div>

      {/* Food Cards Grid */}
      {loading ? (
        <SkeletonList count={6} />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {foods.map((food) => (
            <motion.div key={food._id} variants={itemVariants}>
              <Card variant="elevated" hoverable className="h-full overflow-hidden group">
                {/* Food Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Purchase Count Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" size="md" className="shadow-lg backdrop-blur-sm">
                      🏆 {food.purchaseCount} sold
                    </Badge>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        ${food.price}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Food Name */}
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 line-clamp-1">
                    {food.name}
                  </h3>

                  {/* Category */}
                  {food.category && (
                    <div className="mb-4">
                      <Badge variant="default" size="sm">
                        {food.category}
                      </Badge>
                    </div>
                  )}

                  {/* Description */}
                  {food.description && (
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                      {food.description}
                    </p>
                  )}

                  {/* Action Button */}
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={() => navigate(`/foods/${food._id}`)}
                    className="mt-auto"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* See All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <Button
          variant="accent"
          size="xl"
          onClick={() => navigate('/foods')}
          className="shadow-xl hover:shadow-2xl"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          See All Foods
          <svg
            className="w-6 h-6 ml-2"
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
    </div>
  );
};

export default TopFoods;
