import React from 'react';

const SushiBlog = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6 lg:p-10">
        <img
          src="https://i.ibb.co/HpP4pz2X/Sushi-Platter.jpg"
          alt="Sushi Platter"
          className="w-full h-64 object-cover rounded-xl"
        />

        <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-4">
          🍣 Why Sushi is More Than Just Raw Fish
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Sushi is one of the most famous Japanese dishes worldwide. While many
          people think of it as just raw fish, sushi is actually a delicate art
          form with a rich history, deep cultural significance, and an
          incredible variety of flavors and styles.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          📜 The History of Sushi
        </h3>
        <p className="text-gray-600 mt-2">
          Sushi dates back over 1,000 years and originated as a method of
          preserving fish in fermented rice. Over time, it evolved into the
          fresh and artistic dish we know today. Modern sushi became popular in
          Japan in the 19th century and later spread globally.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          🍣 Sushi is More Than Just Fish – It’s an Art
        </h3>
        <ul className="list-disc ml-6 text-gray-600 mt-3 space-y-2">
          <li>
            <strong>Sushi Rice (Shari) is the Heart of Sushi:</strong> The rice
            is seasoned with vinegar, sugar, and salt for a tangy, balanced
            taste.
          </li>
          <li>
            <strong>Different Types of Sushi:</strong> From Nigiri and Maki to
            Sashimi and Vegetarian Sushi, there’s something for everyone!
          </li>
          <li>
            <strong>Quality Matters:</strong> Sushi-grade fish must be fresh,
            precisely sliced, and paired with wasabi & soy sauce.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          🎯 Conclusion
        </h3>
        <p className="text-gray-600 mt-2">
          Sushi is an artful experience, not just a meal. From its carefully
          prepared rice to the elegant way it’s presented, sushi is a balance of
          simplicity, technique, and flavor. Whether you’re enjoying classic
          nigiri or a modern sushi roll, you’re tasting centuries of Japanese
          culinary tradition.
        </p>
      </div>
    </div>
  );
};

export default SushiBlog;
