import { Heart, Users } from "lucide-react";
import FloralDivider from "./FloralDivider";

const CoupleStory = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-primary mb-4">Our Love Story</h2>
          <p className="font-elegant text-xl text-muted-foreground">
            Perjalanan cinta kami yang indah
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bride */}
          <div className="text-center md:text-right fade-in-up">
            <div className="wedding-card floral-corner">
              <div className="mb-6">
                <Users className="w-12 h-12 text-primary mx-auto md:ml-auto md:mr-0" />
              </div>
              <h3 className="font-script text-4xl text-primary mb-4">Sarah Aulia</h3>
              <p className="font-elegant text-lg text-foreground mb-4">
                Putri dari Bapak Drs. Hasan Basri & Ibu Siti Aminah
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Seorang wanita yang penuh kasih sayang, lulusan Universitas Indonesia 
                jurusan Psikologi. Memiliki hobi memasak dan suka berkebun. 
                Percaya bahwa kebahagiaan terbesar adalah ketika dapat berbagi 
                dengan orang-orang terkasih.
              </p>
            </div>
          </div>

          {/* Heart Divider */}
          <div className="flex justify-center">
            <div className="relative">
              <FloralDivider variant="heart" className="text-rose" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Heart className="w-16 h-16 text-primary fill-current" />
              </div>
            </div>
          </div>

          {/* Groom */}
          <div className="text-center md:text-left fade-in-up">
            <div className="wedding-card floral-corner">
              <div className="mb-6">
                <Users className="w-12 h-12 text-primary mx-auto md:mr-auto md:ml-0" />
              </div>
              <h3 className="font-script text-4xl text-primary mb-4">Ahmad Rizki</h3>
              <p className="font-elegant text-lg text-foreground mb-4">
                Putra dari Bapak H. Muhammad Yusuf & Ibu Hj. Fatimah
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pria yang bertanggung jawab dan penuh perhatian, lulusan Institut 
                Teknologi Bandung jurusan Teknik Informatika. Hobi fotografi dan 
                traveling. Percaya bahwa cinta sejati adalah ketika dua insan 
                saling melengkapi dalam setiap langkah kehidupan.
              </p>
            </div>
          </div>
        </div>

        <FloralDivider className="mt-16" />
        
        <div className="text-center mt-12">
          <div className="wedding-card-romantic max-w-2xl mx-auto">
            <h3 className="font-script text-3xl text-primary mb-4">Our Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pertemuan pertama kami di sebuah acara teman pada musim semi 2022 
              menjadi awal dari kisah cinta yang indah. Dengan ridho Allah SWT 
              dan restu kedua orang tua, kami memutuskan untuk mengikat janji suci 
              dalam ikatan pernikahan yang Insya Allah berkah dan bahagia dunia akhirat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;