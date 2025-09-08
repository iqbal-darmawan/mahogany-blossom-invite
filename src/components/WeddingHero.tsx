import { Heart } from "lucide-react";
import heroFloral from "@/assets/hero-floral.jpg";
import couplePhoto from "@/assets/couple-photo.jpg";

const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroFloral})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Couple Photo */}
        <div className="mb-8 fade-in-up">
          <div className="relative inline-block">
            <img 
              src={couplePhoto} 
              alt="Foto Pengantin"
              className="w-48 h-64 object-cover rounded-3xl shadow-elegant mx-auto"
            />
            <div className="absolute -top-4 -right-4 text-rose float">
              <Heart className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>

        {/* Wedding Announcement */}
        <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h1 className="font-script text-5xl md:text-7xl text-primary mb-4">
            Sarah & Ahmad
          </h1>
          <p className="font-elegant text-xl md:text-2xl text-muted-foreground mb-6">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
            isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa 
            tenteram kepadanya"
          </p>
          <p className="text-sm text-muted-foreground mb-8">QS. Ar-Rum: 21</p>
        </div>

        {/* Wedding Date */}
        <div className="fade-in-up wedding-card-romantic max-w-md mx-auto" style={{ animationDelay: "0.6s" }}>
          <h2 className="font-elegant text-2xl text-primary mb-4">Save The Date</h2>
          <div className="text-center">
            <p className="font-script text-4xl text-primary-dark mb-2">15</p>
            <p className="font-elegant text-lg text-foreground mb-1">Desember 2024</p>
            <p className="text-sm text-muted-foreground">Sabtu</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;