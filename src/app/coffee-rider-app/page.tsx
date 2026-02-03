import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Coffee,
  Smartphone,
  BarChart3,
  Users,
  Calculator,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Rider App - Sistem Penjualan Coffee Mobile Shop",
  description:
    "Coffee Rider App adalah sistem lengkap untuk rider coffee mobile shop. Catat penjualan harian, laporan otomatis untuk admin, dan perhitungan gaji yang akurat. Mulai dari Rp 150.000/bulan.",
  keywords:
    "coffee rider app, coffee mobile shop, sistem penjualan kopi, aplikasi rider kopi, laporan penjualan kopi, manajemen coffee shop",
  openGraph: {
    title: "Coffee Rider App - Sistem Penjualan Coffee Mobile Shop",
    description:
      "Sistem lengkap untuk rider coffee mobile shop. Catat penjualan harian, laporan otomatis, dan perhitungan gaji. Early Bird hanya Rp 150.000/bulan!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Rider App - Sistem Penjualan Coffee Mobile Shop",
    description:
      "Sistem lengkap untuk rider coffee mobile shop. Catat penjualan harian, laporan otomatis, dan perhitungan gaji. Early Bird hanya Rp 150.000/bulan!",
  },
};

export default function CoffeeRiderAppPage() {
  const whatsappNumber = "6285888123325"; // Replace with actual WhatsApp number
  const starterMessage = encodeURIComponent(
    "Halo, saya tertarik dengan Coffee Rider App - Starter Package. Mohon informasi lebih lanjut.",
  );
  const earlyBirdMessage = encodeURIComponent(
    "Halo, saya tertarik dengan Coffee Rider App - Early Bird Package. Mohon informasi lebih lanjut.",
  );

  const starterFeatures = [
    "2 Account (Admin + Rider)",
    "Mobile Apps Rider (Playstore)",
    "Daily Sales Rider",
    "Report Sales for Admin",
    "Salary Report",
    "Rider Calculation",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
            <Coffee size={20} />
            <span className="font-medium">Coffee Rider App</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            Kelola Penjualan
            <span className="block text-amber-600">Coffee Mobile Shop</span>
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto mb-8">
            Sistem lengkap untuk rider coffee mobile shop. Catat penjualan
            harian, laporan otomatis untuk admin, dan perhitungan gaji yang
            akurat.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-amber-700">
              <Smartphone className="text-amber-600" size={24} />
              <span>Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <BarChart3 className="text-amber-600" size={24} />
              <span>Sales Report</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <Users className="text-amber-600" size={24} />
              <span>Multi User</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <Calculator className="text-amber-600" size={24} />
              <span>Auto Calculation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">
            Pilih Paket Anda
          </h2>
          <p className="text-center text-amber-700 mb-12 max-w-xl mx-auto">
            Mulai kelola bisnis coffee mobile shop Anda dengan sistem yang
            terintegrasi
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Package */}
            <Card className="relative border-2 border-amber-200 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl text-amber-900">
                  Starter Package
                </CardTitle>
                <CardDescription className="text-amber-600">
                  Untuk memulai bisnis Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-amber-900">
                    240<span className="text-2xl">.000</span>
                  </div>
                  <div className="text-amber-600 font-medium">/ bulan</div>
                  <div className="text-sm text-amber-500 mt-1">
                    (setara Rp 9.200 / hari)
                  </div>
                </div>

                <ul className="space-y-3 text-left mb-8">
                  {starterFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-amber-800"
                    >
                      <Check
                        className="text-green-600 flex-shrink-0"
                        size={20}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${starterMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Hubungi via WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Early Bird Package */}
            <Card className="relative border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Ribbon */}
              <div className="absolute top-4 -right-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-1 rotate-45 text-sm font-bold shadow-lg">
                BEST DEAL
              </div>

              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-2">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-4 py-1">
                    <Sparkles size={14} className="mr-1" />
                    Early Bird
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-amber-900">
                  Early Bird Package
                </CardTitle>
                <CardDescription className="text-amber-600">
                  Penawaran terbatas!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-2">
                  <div className="text-lg text-amber-500 line-through">
                    Rp 240.000
                  </div>
                  <div className="text-5xl font-bold text-amber-900">
                    150<span className="text-2xl">.000</span>
                  </div>
                  <div className="text-amber-600 font-medium">/ bulan</div>
                  <div className="text-sm text-amber-500 mt-1">
                    (setara Rp 5.700 / hari)
                  </div>
                </div>

                <div className="bg-amber-200/50 rounded-lg p-4 mb-6">
                  <p className="text-amber-800 font-semibold">
                    ✨ Semua Fitur di Starter Package
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4 mb-6 border border-orange-200">
                  <p className="text-orange-800 font-bold text-lg mb-1">
                    🔥 Hanya di 2025!
                  </p>
                  <p className="text-orange-700 text-sm">
                    Amankan Early Bird Deal Anda SEKARANG!
                  </p>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-6 text-lg shadow-lg"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${earlyBirdMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Dapatkan Early Bird!
                  </a>
                </Button>

                <p className="text-xs text-amber-600 mt-3">
                  *Harga Early Bird berlaku selama periode promo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-amber-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siap Memulai?</h2>
          <p className="text-amber-200 mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang untuk demo gratis dan konsultasi kebutuhan
            bisnis Anda
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-amber-900 hover:bg-amber-100 px-8 py-6 text-lg"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya ingin tahu lebih lanjut tentang Coffee Rider App")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-950 text-amber-200 text-center">
        <p>&copy; 2025 Coffee Rider App. All rights reserved.</p>
      </footer>
    </div>
  );
}
