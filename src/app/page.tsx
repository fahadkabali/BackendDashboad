'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Star,
  Smartphone,
  Zap,
  ShoppingCart,
  Gift,
  Menu,
  X
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
}

const MotionWrapper = ({ children, delay = 0 }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const features = [
  {
    icon: Smartphone,
    title: 'User-Friendly Interface',
    description: 'Intuitive design for effortless navigation and shopping.',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Search',
    description: 'Find the perfect gadget in seconds with our powerful search engine.',
  },
  {
    icon: ShoppingCart,
    title: 'Secure Checkout',
    description: 'Shop with confidence using our encrypted payment system.',
  },
  {
    icon: Gift,
    title: 'Exclusive Deals',
    description: 'Access app-only discounts and special offers.',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    role: 'Tech Enthusiast',
    comment: "GadgetApp has revolutionized how I shop for tech. It's so convenient!",
  },
  {
    name: 'Jane Doe',
    role: 'Digital Creator',
    comment: "The exclusive deals on this app are unbeatable. I've saved so much!",
  },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    setRotate({ rotateX, rotateY });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-500 to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#1BC464] to-green-600 bg-clip-text text-transparent">
            GadgetApp
          </h1>
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="hover:text-[#1BC464] transition-colors">Features</Link>
            <Link href="#testimonials" className="hover:text-[#1BC464] transition-colors">Testimonials</Link>
            <Link href="#download" className="hover:text-[#1BC464] transition-colors">Download</Link>
          </nav>
          <Button className="bg-[#1BC464] hover:bg-[#1bc464d7] hidden md:flex">
            Get Started
          </Button>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link href="#features" className="hover:text-[#1BC464]">Features</Link>
              <Link href="#testimonials" className="hover:text-[#1BC464]">Testimonials</Link>
              <Link href="#download" className="hover:text-[#1BC464]">Download</Link>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-32 pt-12">
          <div className="flex flex-col justify-between md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <MotionWrapper>
                <Badge className="mb-4 bg-green-100 text-[#1BC464] hover:bg-green-200">
                  🚀 Now Available
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1BC464] to-green-600 bg-clip-text text-transparent">
                  Discover Gadgets on the Go
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.2}>
                <p className="text-xl text-gray-600 mb-8">
                  Shop the latest tech right from your pocket with our innovative mobile app.
                  Experience the future of shopping today.
                </p>
              </MotionWrapper>
              <MotionWrapper delay={0.4}>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-[#1BC464] hover:bg-[#1bc464d7]">
                    Download Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </MotionWrapper>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -z-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 -top-10 -right-10" />
              <motion.div
                className="relative"
                style={{ perspective: 1000 }}
                animate={{
                  rotateX: isHovered ? rotate.rotateX : 0,
                  rotateY: isHovered ? rotate.rotateY : 0,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onMouseMove={handleMouseMove}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Image
                  width={1331}
                  height={888}
                  src="/app-pics.png"
                  alt="GadgetApp Screenshot"
                  className="rounded-3xl object-cover shadow-2xl mx-auto h-[500px] w-[250px] border-8 border-white"
                />
                <Badge className="absolute top-4 right-4 bg-[#1bc464] text-white">
                  New Release
                </Badge>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="mb-32">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-[#1BC464] hover:bg-green-200">
              Features
            </Badge>
            <h3 className="text-4xl font-bold mb-4">Why Choose GadgetApp?</h3>
            <p className="text-xl text-gray-600">Experience shopping like never before</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-green-100 rounded-full group-hover:bg-[#1BC464] transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-[#1BC464] group-hover:text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </section>

        <section id="download" className="mb-32">
          <Card className="bg-gradient-to-r from-[#1BC464] to-green-600 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-4xl font-bold mb-6">
                    Transform Your Shopping Experience
                  </h3>
                  <p className="text-xl mb-8 text-green-100">
                    Download GadgetApp today and join thousands of happy shoppers.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-white text-[#1BC464] hover:bg-green-100">
                      <Image
                        src="/apple.jpeg"
                        alt="App Store"
                        className="mr-2 h-6 w-6"
                        height={24}
                        width={24}
                      />
                      App Store
                    </Button>
                    <Button size="lg" className="bg-white text-[#1BC464] hover:bg-green-100">
                      <Image
                        src="/google-play.png"
                        alt="Google Play"
                        className="mr-2 h-6 w-6"
                        height={24}
                        width={24}
                      />
                      Google Play
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="testimonials" className="mb-32">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-[#1BC464] hover:bg-green-200">
              Testimonials
            </Badge>
            <h3 className="text-4xl font-bold mb-4">Loved by Users</h3>
            <p className="text-xl text-gray-600">See what our community has to say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Image
                        src="/hero.jpg"
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 object-cover ring-4 ring-green-100"
                        width={56}
                        height={56}
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <div className="flex text-[#1BC464] mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="italic text-gray-600">
                      &quot;{testimonial.comment}&quot;
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </section>

        <section className="text-center mb-32">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Transform Your Gadget Shopping?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Download GadgetApp now and get 20% off your first in-app purchase!
            </p>
            <Button size="lg" className="bg-[#1BC464] hover:bg-[#1bc464d7]">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-[#1BC464] to-green-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-100">
            © {new Date().getFullYear()} GadgetApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}