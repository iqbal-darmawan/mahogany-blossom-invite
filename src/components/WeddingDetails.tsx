import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import FloralDivider from "./FloralDivider";

const WeddingDetails = () => {
  const events = [
    {
      title: "Akad Nikah",
      date: "Sabtu, 15 Desember 2024",
      time: "08:00 - 10:00 WIB",
      location: "Masjid Al-Ikhlas",
      address: "Jl. Raya Bogor No. 123, Jakarta Timur",
      description: "Prosesi akad nikah akan dilaksanakan secara sakral dengan dihadiri keluarga terdekat."
    },
    {
      title: "Resepsi Pernikahan",
      date: "Sabtu, 15 Desember 2024", 
      time: "19:00 - 22:00 WIB",
      location: "Ballroom Hotel Grand Mahakam",
      address: "Jl. Mahakam Raya No. 6, Jakarta Selatan",
      description: "Resepsi pernikahan untuk merayakan kebahagiaan bersama keluarga dan sahabat tercinta."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-romantic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-primary mb-4">Wedding Details</h2>
          <p className="font-elegant text-xl text-muted-foreground">
            Detail acara pernikahan kami
          </p>
          <FloralDivider className="mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="wedding-card-romantic text-center">
                <div className="mb-6">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4 fill-current" />
                  <h3 className="font-script text-4xl text-primary mb-2">{event.title}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center text-foreground">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <span className="font-elegant">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-foreground">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <span className="font-elegant">{event.time}</span>
                  </div>
                  
                  <div className="flex items-start justify-center text-foreground">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <p className="font-elegant font-semibold">{event.location}</p>
                      <p className="text-sm text-muted-foreground">{event.address}</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>

                <button className="btn-romantic font-elegant">
                  Buka di Google Maps
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="wedding-card max-w-2xl mx-auto">
            <h3 className="font-script text-3xl text-primary mb-4">Dress Code</h3>
            <p className="text-muted-foreground mb-4">
              Kami mengundang Anda untuk mengenakan pakaian formal dengan nuansa warna:
            </p>
            <div className="flex justify-center gap-4 mb-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Mahogany</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-rose rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Rose Gold</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-champagne rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Champagne</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Mohon menghindari warna putih dan hitam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;