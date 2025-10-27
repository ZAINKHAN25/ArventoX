import LandingComponent from '@/components/LandingComponent/LandingComponent.jsx';
import StickyHeaderComponent from '@/components/StickyHeader/StickyHeader.jsx';
import CardsSection from '@/components/CardsSection/CardsSection.jsx';
import FooterComponent from '@/components/Footer/Footer.jsx';

export default function Home() {
  return (
    <>
      <LandingComponent />
      <StickyHeaderComponent />
      <CardsSection />
      <FooterComponent />
    </>
  );
}
