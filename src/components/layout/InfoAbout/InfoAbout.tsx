import React from "react";

const cardsData = [
  {
    icon: "🏆", // можно заменить на иконки из FontAwesome или SVG
    title: "Exclusive Auctions",
    description: "Discover rare and unique items available only on our platform.",
  },
  {
    icon: "⏰",
    title: "Live Bidding",
    description: "Participate in real-time auctions with instant updates.",
  },
  {
    icon: "💼",
    title: "Trusted Sellers",
    description: "Connect with verified and reputable sellers worldwide.",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    description: "Enjoy safe and protected payment processes.",
  },
];

const InfoAbout = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {cardsData.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-[#f0f4ef] rounded-lg p-6 w-64 flex-shrink-0"
          >
            <div className="text-yellow-400 text-4xl mb-4">{icon}</div>
            <h3 className="text-black text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoAbout;
