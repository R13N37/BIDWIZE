import React from 'react'
import auction from '../../../assets/auction.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import img1 from '../../../assets/1.jpg'

export function AutoScrollCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // Customize delay here
  )
}

const cardsData = [
  {
    title: "Card One",
    description: "Description for card one",
    content: "This is the first card content.",
    bgImage: auction
  },
  {
    title: "Card Two",
    description: "Description for card two",
    content: "Here goes the second card content.",
    bgImage: auction
  },
  {
    title: "Card Three",
    description: "Description for card three",
    content: "Third card's custom content.",
    bgImage: auction
  },
  {
    title: "Card Four",
    description: "Description for card two",
    content: "Here goes the second card content.",
    bgImage: auction
  },
  {
    title: "Card Five",
    description: "Description for card three",
    content: "Third card's custom content.",  
    bgImage: auction
  }
]

const Home = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="w-full h-auto">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {cardsData.map((card, index) => (
            <CarouselItem
              key={index}
              className="w-full px-4 sm:px-8 md:px-12 lg:px-20 lg:py-5"
            >
              <div className="p-2">
                <Card
  key={index}
  style={{
    backgroundImage: `url(${card.bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  className="relative w-full h-[18rem] sm:h-[26rem] md:h-[36rem] lg:h-[44rem]"
>
  <CardContent className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-black/40 backdrop-blur-lg rounded-xl 
                          px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 
                          w-[90%] sm:w-[80%] md:w-[60%] max-w-[600px] 
                          flex flex-col items-center text-center space-y-3">
    <div className="text-base sm:text-lg md:text-2xl font-bold text-white">
      {card.title}
    </div>
    <p className="text-sm sm:text-base text-white/80">
      {card.description}
    </p>
    <p className="text-sm sm:text-base text-white">
      {card.content}
    </p>
  </CardContent>
</Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};


export default Home;