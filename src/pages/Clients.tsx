import { Helmet } from "react-helmet-async";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";

const clients = [
  { name: "GBH Hospital Group", initials: "GBH", category: "Hospital Group" },
  { name: "Regency Hospital", initials: "RH", category: "Private Hospital" },
  { name: "Pantai Hospital Klang", initials: "PH", category: "Hospital" },
  { name: "Pantai Hospital Cheras", initials: "PHC", category: "Hospital" },
  { name: "Sunway Medical Centre", initials: "SMC", category: "Medical Centre" },
  { name: "KPJ Healthcare Berhad", initials: "KPJ", category: "Hospital Group" },
  { name: "KPJ Damansara", initials: "KPJD", category: "Hospital" },
  { name: "KPJ Selangor", initials: "KPJS", category: "Hospital" },
  { name: "KPJ Seremban", initials: "KPJSB", category: "Hospital" },
  { name: "KPJ Tawakkal KL", initials: "KPJT", category: "Hospital" },
  { name: "KPJ Sentosa KL", initials: "KPJSK", category: "Hospital" },
  { name: "KPJ Perdana", initials: "KPJP", category: "Hospital" },
  { name: "Prince Court Medical Centre", initials: "PCM", category: "Medical Centre" },
  { name: "MSU Medical Centre", initials: "MSU", category: "Medical Centre" },
  { name: "De La Cruz Hospital", initials: "DLC", category: "Hospital" },
  { name: "The Regency Hotel", initials: "TRH", category: "Hotel" },
  { name: "Hotel Istana Pasadena", initials: "HIP", category: "Hotel" },
  { name: "Dorsett Grand Subang", initials: "DGS", category: "Hotel" },
];

const categories = [
  { name: "Hospital Groups", count: 2 },
  { name: "Private Hospitals", count: 12 },
  { name: "Medical Centres", count: 3 },
  { name: "Hotels & Resorts", count: 3 },
];

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients - Hospitals, Hotels & Healthcare Groups | Medisure Healthcare</title>
        <meta
          name="description"
          content="Medisure Healthcare serves Malaysia's leading hospitals including KPJ, Pantai, Sunway Medical Centre, Prince Court, and premium hotels. Trusted healthcare textile distributor."
        />
        <meta
          name="keywords"
          content="hospital group supplier, healthcare textile distributor Malaysia, KPJ supplier, Pantai Hospital linen, medical textile clients"
        />
        <link rel="canonical" href="https://medisure.com.my/clients" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Our Clients"
              title="Trusted by Malaysia's Leading Healthcare Institutions"
              subtitle="We are honored to serve hospitals, clinics, hotels, and healthcare groups across Malaysia with premium textile solutions."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <AnimatedSection key={cat.name} delay={index * 100}>
                <div className="text-center">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
                    {cat.count}+
                  </span>
                  <p className="font-body text-primary-foreground/80 mt-2">{cat.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Valued Partners
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                From major hospital groups to boutique hotels, we're proud to support diverse healthcare and hospitality organizations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <AnimatedSection key={client.name} delay={(index % 6) * 50}>
                <div className="bg-card rounded-xl shadow-premium-sm hover:shadow-premium-md transition-all duration-300 p-6 flex flex-col items-center justify-center text-center h-36 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <span className="font-heading font-bold text-xl text-primary">
                      {client.initials}
                    </span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2">
                    {client.name}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Client Testimonial
              </span>
              <blockquote className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                "Medisure Healthcare has been our trusted linen partner for over 5 years. Their commitment to quality and timely delivery has made them an invaluable part of our operations."
              </blockquote>
              <div>
                <p className="font-heading font-semibold text-foreground">Operations Director</p>
                <p className="font-body text-muted-foreground">Leading Private Hospital Group</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-4">
              Join Our Growing Client Base
            </h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Experience the Medisure difference. Premium quality, reliable service, competitive pricing.
            </p>
            <a href="/contact" className="btn-primary">
              Become a Client
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Clients;
