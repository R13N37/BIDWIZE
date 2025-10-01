import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Hammer,
  Car,
  Smartphone,
  Home,
  Diamond,
  Shirt,
  Book,
  Palette,
  Trophy,
  Bike,
  Sofa,
  Gamepad2,
  Camera,
  Disc,
} from "lucide-react";

const categories = [
  {
    name: "Vehicles",
    description: "Cars, motorcycles, and other vehicles available for bidding.",
    icon: Car,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Electronics",
    description: "Smartphones, laptops, and gadgets from trusted sellers.",
    icon: Smartphone,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Real Estate",
    description: "Apartments, houses, and commercial properties for auction.",
    icon: Home,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Jewelry",
    description: "Exclusive jewelry and watches from verified sellers.",
    icon: Diamond,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Fashion",
    description: "Clothing, shoes, and accessories at competitive prices.",
    icon: Shirt,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Antiques",
    description: "Rare antiques, coins, and collectibles from different eras.",
    icon: Hammer,
    color: "bg-amber-100 text-amber-600",
  },
  {
    name: "Books",
    description: "First editions, rare novels, and collectible literature.",
    icon: Book,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Art",
    description: "Paintings, sculptures, and contemporary art pieces.",
    icon: Palette,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Sports",
    description: "Sports memorabilia, gear, and limited-edition items.",
    icon: Trophy,
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Bicycles",
    description: "Mountain bikes, road bikes, and accessories.",
    icon: Bike,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    name: "Furniture",
    description: "Modern and vintage furniture for home and office.",
    icon: Sofa,
    color: "bg-teal-100 text-teal-600",
  },
  {
    name: "Toys & Games",
    description: "Collectible toys, board games, and video games.",
    icon: Gamepad2,
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    name: "Photography",
    description: "Cameras, lenses, and professional equipment.",
    icon: Camera,
    color: "bg-sky-100 text-sky-600",
  },
  {
    name: "Music",
    description: "Instruments, records, and audio equipment.",
    icon: Disc,
    color: "bg-rose-100 text-rose-600",
  },
  {
    name: "Other Auctions",
    description: "Various unique items and collectibles.",
    icon: Hammer,
    color: "bg-gray-100 text-gray-600",
  },
];

const Categories: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Auction Categories
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our wide range of categories and start bidding on your favorite items.
        </p>
      </div>

      {/* Сетка карточек */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card
              key={index}
              className="flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-200 rounded-2xl"
            >
              <CardHeader className="flex items-center space-x-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full ${category.color}`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">
                  {category.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-1">
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {category.description}
                </p>
                <Button
                  variant="default"
                  className="w-full text-sm sm:text-base"
                >
                  View Auctions
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
