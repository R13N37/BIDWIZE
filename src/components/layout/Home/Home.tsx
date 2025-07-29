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
    Autoplay({ delay: 1000, stopOnInteraction: false }) // Customize delay here
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
    Autoplay({ delay: 1000, stopOnInteraction: false }) // Customize delay here
  )

  return (
    <div className='w-[100%] h-auto'>
      <Carousel plugins={[plugin.current]} opts={{loop:true}} className="flex items-center justify-center w-full p-20 h-full">
      <CarouselContent >
        {cardsData.map((card, index) => (
          <CarouselItem key={index} className='w-[100rem]'>
            <div className="p-1" >
              <Card key={index}  
                style={{ 
                        backgroundImage: `url(${card.bgImage})`,  backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '45rem',
                        width: '100%',
                      }}
                      >
                <CardContent className="flex flex-col justify-center h-full space-y-2">
                  <div className="text-xl font-bold text-white">{card.title}</div>
                  <p className="text-sm text-muted-foreground text-white">{card.description}</p>
                  <p className='text-white'>{card.content}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default Home;