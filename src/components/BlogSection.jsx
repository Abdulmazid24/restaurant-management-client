import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogs = [
    {
      title: 'The Secret Behind Authentic Italian Pizza 🍕',
      description:
        'Ever wondered what makes a true Italian pizza taste so unique? Discover the secret ingredients and traditional methods used in Italy!',
      image: 'https://i.ibb.co/R1c30vG/Margherita-Pizza.jpg',
      link: 'pizza',
    },
    {
      title: 'Why Sushi is More Than Just Raw Fish 🍣',
      description:
        'Sushi is an art, not just food! Learn about its history, different types, and the best way to enjoy this Japanese delicacy.',
      image: 'https://i.ibb.co/HpP4pz2X/Sushi-Platter.jpg',
      link: 'sushi',
    },
    {
      title: 'Spices That Define Indian Cuisine 🌶️',
      description:
        "From turmeric to cardamom, Indian cuisine is packed with spices that not only add flavor but also provide health benefits. Let's explore!",
      image: 'https://i.ibb.co/6c8njZtC/Chicken-Biryani.jpg',
      link: 'spices',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          🍽️ Food Blog Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <Link
                  to={`${blog.link}`}
                  className="mt-4 inline-block text-primary hover:text-primary-dark font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
