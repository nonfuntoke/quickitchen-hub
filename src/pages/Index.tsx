import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  MapPin, 
  Globe,
  Smartphone
} from "lucide-react";
import LinkButton from "@/components/LinkButton";
import logo from "@/assets/logo_quickitchen.png";

const Index = () => {
  const links = [
    {
      href: "https://instagram.com/quickitchen.ma",
      icon: Instagram,
      label: "Instagram",
      sublabel: "@quickitchen.ma",
    },
    {
      href: "https://facebook.com/quickitchen-ma",
      icon: Facebook,
      label: "Facebook",
      sublabel: "Quickitchen Morocco",
    },
    {
      href: "https://tiktok.com/@quickitchen_ma",
      icon: Smartphone,
      label: "TikTok",
      sublabel: "@quickitchen_ma",
    },
    {
      href: "https://wa.me/212663000000",
      icon: MessageCircle,
      label: "WhatsApp Casablanca",
      sublabel: "+212 663 000 000",
    },
    {
      href: "https://wa.me/212661287072",
      icon: MessageCircle,
      label: "WhatsApp Agadir",
      sublabel: "+212 661 287 072",
    },
    {
      href: "https://maps.google.com/?q=Quickitchen+Casablanca",
      icon: MapPin,
      label: "Localisation Casablanca",
      sublabel: "Voir sur la carte",
    },
    {
      href: "https://maps.google.com/?q=Quickitchen+Agadir",
      icon: MapPin,
      label: "Localisation Agadir",
      sublabel: "Voir sur la carte",
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.quickitchen.ma_userapp",
      icon: Smartphone,
      label: "Télécharger sur Google Play",
      sublabel: "Application Android",
    },
    {
      href: "https://apps.apple.com/fr/app/quickitchen/id6444902003",
      icon: Smartphone,
      label: "Télécharger sur App Store",
      sublabel: "Application iOS",
    },
    {
      href: "https://www.quickitchen.ma",
      icon: Globe,
      label: "Visiter le Site Web",
      sublabel: "quickitchen.ma",
    },
  ];

  return (
    <>
      {/* SEO Meta */}
      <title>Quickitchen - Asian Food & More | Liens</title>
      <meta name="description" content="Découvrez Quickitchen - Asian Food & More. Suivez-nous sur les réseaux sociaux, contactez-nous via WhatsApp ou téléchargez notre application." />

      <div className="min-h-screen flex flex-col">
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <main className="flex-1 relative z-10 flex flex-col items-center px-6 py-12 max-w-md mx-auto w-full">
          {/* Header / Logo */}
          <header className="text-center mb-10 opacity-0 animate-scale-in">
            <div className="logo-glow inline-block rounded-3xl overflow-hidden mb-6">
              <img
                src={logo}
                alt="Quickitchen Logo"
                className="w-28 h-28 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Quickitchen
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Asian Food & More 🍜
            </p>
          </header>

          {/* Links */}
          <nav className="w-full space-y-4" aria-label="Social links and contact">
            {links.map((link, index) => (
              <LinkButton
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                sublabel={link.sublabel}
                delay={100 + index * 50}
              />
            ))}
          </nav>
        </main>

        {/* Footer */}
        <footer className="relative z-10 text-center py-8 px-6">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Quickitchen. Tous droits réservés.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;
