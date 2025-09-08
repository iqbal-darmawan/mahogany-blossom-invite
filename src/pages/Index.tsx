import WeddingHero from "@/components/WeddingHero";
import CoupleStory from "@/components/CoupleStory";
import WeddingDetails from "@/components/WeddingDetails";
import RSVPForm from "@/components/RSVPForm";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WeddingHero />
      <CoupleStory />
      <WeddingDetails />
      <RSVPForm />
      <WeddingFooter />
    </div>
  );
};

export default Index;
