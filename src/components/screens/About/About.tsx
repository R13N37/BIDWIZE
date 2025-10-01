import React from "react";
import { FaGavel, FaHandshake, FaLock, FaUsers } from "react-icons/fa";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type AboutProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  features?: Feature[];
};

const About: React.FC<AboutProps> = ({
  title = "About Our Platform",
  description = "We connect buyers and sellers globally through secure and fair auctions. Our mission is to make bidding accessible, transparent, and exciting for everyone.",
  imageUrl = "/auction.jpg",
  features = [
    {
      icon: FaGavel,
      title: "Exclusive Auctions",
      description: "Access rare and unique items you won't find anywhere else.",
    },
    {
      icon: FaHandshake,
      title: "Trusted Sellers",
      description: "We verify our sellers to ensure a safe buying experience.",
    },
    {
      icon: FaLock,
      title: "Secure Payments",
      description: "Enjoy peace of mind with encrypted payment processing.",
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "Join a growing community of passionate collectors.",
    },
  ],
}) => {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-6">{description}</p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <feature.icon className="text-4xl text-yellow-500 mb-2" />
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
