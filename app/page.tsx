import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Experience from '@/components/Experience';
import GinCarousel from '@/components/GinCarousel';
import Cocktails from '@/components/Cocktails';
import Gallery from '@/components/Gallery';
import ChubbyChick from '@/components/ChubbyChick';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Reservation from '@/components/Reservation';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Experience />
        <GinCarousel />
        <Cocktails />
        <Gallery />
        <ChubbyChick />
        <Testimonials />
        <Location />
        <Reservation />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
