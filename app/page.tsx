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

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Story />
        <Divider />
        <Experience />
        <Divider />
        <GinCarousel />
        <Divider />
        <Cocktails />
        <Divider />
        <Gallery />
        <Divider />
        <ChubbyChick />
        <Divider />
        <Testimonials />
        <Divider />
        <Location />
        <Divider />
        <Reservation />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
