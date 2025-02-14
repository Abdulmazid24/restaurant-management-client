import React from 'react';

const IndianSpicesBlog = () => {
  return (
    <div className="bg-orange-100 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          🌶️ Spices That Define Indian Cuisine
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Indian cuisine is famous for its rich flavors, vibrant colors, and
          complex spices. Whether it's the creamy butter chicken, spicy chicken
          biryani, or fragrant masala chai, Indian food relies on a diverse
          range of spices to create its signature taste.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">
          Why Are Spices So Important in Indian Cooking?
        </h2>
        <p className="text-gray-700 text-lg">
          Indian spices are not just about heat—they bring depth, aroma, and
          health benefits to every dish. They are used for:
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-lg">
          <li>
            Enhancing flavors (spices like cumin and coriander add earthiness).
          </li>
          <li>Balancing taste (a mix of sweet, sour, bitter, and spicy).</li>
          <li>Health benefits (many spices have medicinal properties).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">
          Essential Indian Spices & Their Uses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {spices.map((spice, index) => (
            <div key={index} className="bg-orange-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-orange-600">
                {spice.name}
              </h3>
              <p className="text-gray-700 mt-2">{spice.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">
          Conclusion
        </h2>
        <p className="text-gray-700 text-lg">
          Indian cuisine is a journey of flavors, thanks to its incredible use
          of spices. From the golden richness of turmeric to the aromatic depth
          of garam masala, every spice adds something unique to a dish.
          Understanding these spices will help you truly appreciate the magic
          behind Indian cuisine.
        </p>
      </div>
    </div>
  );
};

const spices = [
  {
    name: 'Turmeric (Haldi) – The Golden Spice',
    description:
      'Bright yellow color, earthy flavor. Used in curries, rice, and drinks like golden milk. Powerful anti-inflammatory properties.',
  },
  {
    name: 'Cumin (Jeera) – The Warm, Earthy Spice',
    description:
      'Roasted cumin adds a nutty taste to dishes. Common in lentils, curries, and spice blends like garam masala. Aids digestion and metabolism.',
  },
  {
    name: 'Cardamom (Elaichi) – The Sweet & Spicy Delight',
    description:
      'Used in desserts, chai tea, and rich curries. Provides a mix of sweet, floral, and slightly minty flavor. Helps with digestion and freshens breath.',
  },
  {
    name: 'Cloves (Laung) – The Aromatic Powerhouse',
    description:
      'Strong, slightly bitter, and sweet. Used in meat dishes, biryanis, and chai. Known for pain relief and antibacterial properties.',
  },
  {
    name: 'Garam Masala – The Magic Blend',
    description:
      'A mix of cardamom, cumin, cloves, cinnamon, nutmeg, and black pepper. Adds depth to curries, stews, and rice dishes. Balances heat, sweetness, and complexity in Indian cooking.',
  },
];

export default IndianSpicesBlog;
