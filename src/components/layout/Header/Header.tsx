import React from 'react';
import logo from '../../../assets/Logo.png';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CustomButton from '@/components/shared/CustomButton/CustomButton'; 

type HeaderProps = {
  content?: string; 
  style?: string;  
};

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Menu
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Social links
  const socialLinks = [
    { icon: FaFacebookF, href: '#', hoverClass: 'hover:border-blue-500 hover:bg-blue-500' },
    { icon: FaInstagram, href: '#', hoverClass: 'hover:border-pink-500 hover:bg-pink-500' },
    { icon: FaTelegramPlane, href: '#', hoverClass: 'hover:border-blue-400 hover:bg-blue-400' },
    { icon: FaTiktok, href: '#', hoverClass: 'hover:border-black hover:bg-black' },
    { icon: CgProfile, href: '#', hoverClass: 'hover:border-black hover:bg-black' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#3f5159] shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between sm:items-center px-4 sm:px-6 lg:px-8">
        
       <div className="flex items-center justify-center w-full md:justify-start">
          <img src={logo} alt="logo" className="h-16 w-28 sm:h-20 sm:w-32" />
       </div>

        <nav className="hidden md:flex items-center justify-center"> 
          {navLinks.map((link) => (
            <CustomButton
              key={link.name}
              content={link.name}
              style={"flex justify-center h-[5rem] w-[7rem] bg-transparent hover:bg-black duration-200 hover:text-white font-mono font-bold flex-col"}
            />
          ))}
        </nav>

        {/* Social media for mobile */}
        <div className="hidden sm:flex items-center gap-4">
          {socialLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`group flex items-center justify-center border rounded-full transition-colors duration-200 ${item.hoverClass} w-10 h-10`}
              >
                <IconComponent className="text-2xl text-black p-1 group-hover:text-white transition-colors duration-200" />
              </a>
            );
          })}
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center">
  <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
    <SheetTrigger asChild>
      <Button
  variant="secondary"
  size="icon"
  className="text-white"
>
  <Menu className="h-6 w-6" />
  <span className="sr-only">Toggle navigation menu</span>
</Button>
    </SheetTrigger>

    <SheetContent
      side="left"
      className="w-[280px] sm:w-[320px] bg-[#3f5159] text-white flex flex-col items-center text-center"
    >
      <SheetHeader className="pb-4 border-b border-gray-600 w-full">
        <SheetTitle className="text-xl font-bold text-white">MENU</SheetTitle>
      </SheetHeader>

      <nav className="grid gap-4 py-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-lg font-semibold hover:text-gray-300 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex justify-center gap-4 mt-auto pt-4 pb-6 border-t border-gray-600 w-full">
        {socialLinks.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className="group flex items-center justify-center h-8 w-8 border border-white rounded-full transition-colors duration-200"
            >
              <IconComponent className="text-white text-xl group-hover:text-gray-300 transition-colors duration-200" />
            </a>
          );
        })}
      </div>
    </SheetContent>
  </Sheet>
</div>
      </div>
    </header>
  );
};

export default Header;