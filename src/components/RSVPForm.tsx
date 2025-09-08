import { useState } from "react";
import { Heart, Send, Users, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import FloralDivider from "./FloralDivider";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guests: "",
    dietaryReqs: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "RSVP Berhasil Dikirim!",
      description: "Terima kasih atas konfirmasi kehadiran Anda. Kami sangat menantikan kehadiran Anda di hari bahagia kami.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      attendance: "",
      guests: "",
      dietaryReqs: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-primary mb-4">RSVP</h2>
          <p className="font-elegant text-xl text-muted-foreground mb-8">
            Konfirmasi kehadiran Anda di hari bahagia kami
          </p>
          <FloralDivider />
        </div>

        <div className="wedding-card-romantic">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4 fill-current" />
            <p className="text-muted-foreground leading-relaxed">
              Kehadiran dan doa restu dari Anda merupakan kebahagiaan terbesar bagi kami. 
              Mohon konfirmasi kehadiran Anda sebelum tanggal 10 Desember 2024.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-elegant font-medium text-foreground mb-2">
                  Nama Lengkap *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-elegant font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="email@contoh.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-elegant font-medium text-foreground mb-2">
                  Nomor Telepon
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="08123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-elegant font-medium text-foreground mb-2">
                  Konfirmasi Kehadiran *
                </label>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                >
                  <option value="">Pilih konfirmasi</option>
                  <option value="hadir">Hadir</option>
                  <option value="tidak-hadir">Tidak dapat hadir</option>
                </select>
              </div>
            </div>

            {formData.attendance === "hadir" && (
              <div className="grid md:grid-cols-2 gap-6 fade-in-up">
                <div>
                  <label className="block text-sm font-elegant font-medium text-foreground mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Jumlah Tamu
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="">Pilih jumlah tamu</option>
                    <option value="1">1 orang</option>
                    <option value="2">2 orang</option>
                    <option value="3">3 orang</option>
                    <option value="4">4 orang</option>
                    <option value="5+">5+ orang</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-elegant font-medium text-foreground mb-2">
                    <Utensils className="w-4 h-4 inline mr-2" />
                    Preferensi Makanan
                  </label>
                  <select
                    name="dietaryReqs"
                    value={formData.dietaryReqs}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="">Tidak ada preferensi khusus</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="halal">Halal</option>
                    <option value="no-spicy">Tidak pedas</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-elegant font-medium text-foreground mb-2">
                Ucapan & Doa
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full"
                placeholder="Tuliskan ucapan dan doa terbaik untuk kami..."
              />
            </div>

            <div className="text-center">
              <Button type="submit" className="btn-romantic font-elegant text-lg px-8 py-3">
                <Send className="w-5 h-5 mr-2" />
                Kirim RSVP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;