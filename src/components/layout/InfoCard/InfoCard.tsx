import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import AuctionCard from '@/assets/auction-card.jpg'

const features = [
  {
    title: 'Verified Auctioneers',
    description: 'All auctions are handled by licensed and verified professionals.',
    icon: '🔨',
  },
  {
    title: 'Fair Bidding System',
    description: 'Transparent bidding process with real-time updates for every participant.',
    icon: '📈',
  },
  {
    title: '24/7 Customer Service',
    description: 'Get help anytime from our dedicated support team.',
    icon: '🕑',
  },
]

const InfoCard: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                'flex flex-col items-center justify-center text-center p-6 gap-2 rounded-md shadow-sm',
                idx === 1
                  ? 'bg-[#a7cced] text-black'
                  : idx === 2
                  ? 'bg-[#3f5159] text-white'
                  : 'bg-[#fff4e4]'
              )}
            >
              <div className="text-3xl">{feature.icon}</div>
              <div className="font-bold text-lg">{feature.title}</div>
              <div className="text-sm max-w-xs">{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="w-full h-full rounded-md overflow-hidden shadow-md">
            <img
              src={AuctionCard}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Block */}
          <div className="flex flex-col justify-center">
            <h4 className="text-black font-semibold">Welcome to Bidwize</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Your Trusted Online Auction Platform
            </h2>
            <p className="text-gray-600 max-w-xl">
              Discover, bid, and win unique items from around the world — all from the comfort of your home.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button className="text-white hover:bg-yellow-500">
                Start Bidding
              </Button>
              <Button variant="outline" className='text-white'>How It Works</Button>
              <Button variant="outline" className='text-white'>Our Guarantee</Button>
            </div>

            <Card className="mt-6 max-w-xl">
              <CardContent className="p-4 text-gray-700 text-sm">
                Bidwize offers a seamless and secure way to participate in auctions globally. From vintage collectibles to modern tech — we connect buyers and sellers through a simple and fair process.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoCard
