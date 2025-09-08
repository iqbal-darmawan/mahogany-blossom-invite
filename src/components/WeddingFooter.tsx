import { Heart, Instagram, Facebook, Twitter } from "lucide-react";
import FloralDivider from "./FloralDivider";

const WeddingFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FloralDivider />
        
        <div className="my-12">
          <h3 className="font-script text-4xl text-primary mb-6">Sarah & Ahmad</h3>
          <p className="font-elegant text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            "Dan Allah menjadikan bagimu dari jenis kalian sendiri pasangan-pasangan 
            hidup supaya kalian merasa tenteram"
          </p>
          
          <div className="wedding-card-romantic max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary fill-current mr-3" />
              <span className="font-script text-2xl text-primary">15 Desember 2024</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Kami mengundang Anda untuk berbagi kebahagiaan di hari istimewa kami
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-primary hover:text-primary-light transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary hover:text-primary-light transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary hover:text-primary-light transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <FloralDivider />
        
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © 2024 Sarah & Ahmad Wedding. Dibuat dengan ❤️ untuk hari istimewa kami.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;