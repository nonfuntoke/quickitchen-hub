import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  MapPin, 
  Globe
} from "lucide-react";
import LinkButton from "@/components/LinkButton";
import LinkSection from "@/components/LinkSection";
import AppStoreBadge from "@/components/AppStoreBadge";
import logo from "@/assets/logo_quickitchen.png";
import appMockup from "@/assets/app-mockup.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Index = () => {
  const socialLinks = [
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
      icon: TikTokIcon,
      label: "TikTok",
      sublabel: "@quickitchen_ma",
    },
  ];

  const contactLinks = [
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
  ];

  const locationLinks = [
    {
      href: "https://maps.google.com/?q=Quickitchen+Casablanca",
      icon: MapPin,
      label: "Casablanca",
      sublabel: "Voir sur la carte",
    },
    {
      href: "https://maps.google.com/?q=Quickitchen+Agadir",
      icon: MapPin,
      label: "Agadir",
      sublabel: "Voir sur la carte",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <main className="flex-1 relative z-10 flex flex-col items-center px-6 py-12 max-w-md mx-auto w-full">
          {/* Header / Logo */}
          <header className="text-center mb-8 opacity-0 animate-scale-in">
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
            <p className="text-muted-foreground text-sm font-medium mb-4">
              Asian Food & More 🍜
            </p>
            {/* French Description */}
            <p 
              className="text-foreground/90 text-sm leading-relaxed max-w-xs mx-auto opacity-0 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Découvrez le meilleur de la cuisine asiatique. Sushi, thaï, vietnamien et bien plus, livrés chez vous à Casablanca et Agadir.
            </p>
          </header>

          {/* Links Container */}
          <div className="w-full space-y-8">
            {/* Social Media */}
            <LinkSection title="Réseaux sociaux" delay={150}>
              {socialLinks.map((link, index) => (
                <LinkButton
                  key={link.href}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                  sublabel={link.sublabel}
                  delay={200 + index * 50}
                />
              ))}
            </LinkSection>

            {/* Contact */}
            <LinkSection title="Nous contacter" delay={350}>
              {contactLinks.map((link, index) => (
                <LinkButton
                  key={link.href}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                  sublabel={link.sublabel}
                  delay={400 + index * 50}
                />
              ))}
            </LinkSection>

            {/* Locations */}
            <LinkSection title="Nos restaurants" delay={500}>
              <div className="grid grid-cols-2 gap-3">
                {locationLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button flex flex-col items-center gap-2 py-4 opacity-0 animate-fade-in-up text-center"
                    style={{ animationDelay: `${550 + index * 50}ms` }}
                  >
                    <MapPin className="w-5 h-5" />
                    <div>
                      <div className="font-semibold text-sm">{link.label}</div>
                      <div className="text-xs opacity-70">{link.sublabel}</div>
                    </div>
                  </a>
                ))}
              </div>
            </LinkSection>

            {/* Website */}
            <LinkSection title="Site web" delay={650}>
              <LinkButton
                href="https://www.quickitchen.ma"
                icon={Globe}
                label="Visiter quickitchen.ma"
                sublabel="Commander en ligne"
                delay={700}
              />
            </LinkSection>
          </div>
        </main>

        {/* Download Section - Light Background */}
        <section className="relative z-10 bg-foreground py-10 px-6 mt-8">
          <div className="max-w-md mx-auto text-center">
            {/* App Mockup Image */}
            <img
              src={appMockup}
              alt="Quickitchen App"
              className="w-full max-w-xs mx-auto mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "750ms" }}
            />
            
            <h2 
              className="text-secondary-foreground font-bold text-lg mb-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              Téléchargez notre application
            </h2>
            <p 
              className="text-secondary-foreground/70 text-sm mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "850ms" }}
            >
              Commandez facilement depuis votre téléphone
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <AppStoreBadge
                store="apple"
                href="https://apps.apple.com/fr/app/quickitchen/id6444902003"
                delay={900}
              />
              <AppStoreBadge
                store="google"
                href="https://play.google.com/store/apps/details?id=com.quickitchen.ma_userapp"
                delay={950}
              />
            </div>
          </div>
        </section>

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
