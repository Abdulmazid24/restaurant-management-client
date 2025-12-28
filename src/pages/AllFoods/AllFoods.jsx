import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  Card,
  CardContent,
  Button,
  Badge,
  Input,
  Skeleton,
  SkeletonList,
} from '../../shared/components/ui';
import { FOOD_CATEGORIES, SORT_OPTIONS } from '../../shared/constants';
import apiClient from '../../shared/services/apiClient';

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllFoods = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (selectedCategory && selectedCategory !== 'all')
          params.append('category', selectedCategory);
        if (sortBy) {
          const sortOption = Object.values(SORT_OPTIONS).find((opt) => opt.value === sortBy);
          if (sortOption) {
            params.append('sortBy', sortOption.value);
            params.append('sortOrder', sortOption.order);
          }
        }

        const response = await apiClient.get(`/foods?${params.toString()}`);
        setFoods(response);
      } catch (error) {
        console.error('Error fetching foods:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchAllFoods();
    }, 300);

    return () => clearTimeout(debounce);
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <div
        className="relative h-[250px] sm:h-[300px] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/different_foods.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 w-full px-4">
          <Marquee gradient={false} speed={40}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mx-8">
              🍕 All Foods Available - Choose Your Favorite 🍔
            </h1>
          </Marquee>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <Input
              type="text"
              placeholder="Search for a food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl font-sans text-base bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
              >
                <option value="">All Categories</option>
                {FOOD_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl font-sans text-base bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-50 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
              >
                <option value="">Sort By</option>
                {Object.values(SORT_OPTIONS).map((opt) => (
                  <option key={opt.value + opt.order} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {search && (
              <Badge variant="primary">
                Search: "{search}"
                <button
                  onClick={() => setSearch('')}
                  className="ml-2 hover:text-white"
                >
                  ✕
                </button>
              </Badge>
            )}
            {selectedCategory && (
              <Badge variant="secondary">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('')}
                  className="ml-2 hover:text-white"
                >
                  ✕
                </button>
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {loading ? 'Loading...' : `${foods.length} food${foods.length !== 1 ? 's' : ''} found`}
          </p>
        </div>

        {/* Food Grid */}
        {loading ? (
          <SkeletonList count={8} />
        ) : foods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foods.map((food, index) => (
              <motion.div
                key={food._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card variant="elevated" hoverable className="h-full overflow-hidden group">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    {food.category && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="shadow-lg backdrop-blur-sm">
                          {food.category}
                        </Badge>
                      </div>
                    )}

                    {/* Price */}
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                        <span className="text-xl font-bold text-primary-600">${food.price}</span>
                      </div>
                    </div>

                    {/* Purchase Count */}
                    {food.purchaseCount > 0 && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="success" className="shadow-lg backdrop-blur-sm">
                          {food.purchaseCount} sold
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5">
                    {/* Name */}
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 line-clamp-1">
                      {food.name}
                    </h3>

                    {/* Description */}
                    {food.description && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2 min-h-[40px]">
                        {food.description}
                      </p>
                    )}

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant={food.quantity > 0 ? 'success' : 'error'} size="sm">
                        {food.quantity > 0 ? `${food.quantity} available` : 'Out of stock'}
                      </Badge>
                    </div>

                    {/* Details Button */}
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      onClick={() => navigate(`/foods/${food._id}`)}
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
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300 mb-2">
              No food items found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Try adjusting your search or filters
            </p>
            <Button variant="primary" onClick={() => {
              setSearch('');
              setSelectedCategory('');
              setSortBy('');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
