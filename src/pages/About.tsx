import { Helmet } from "react-helmet-async";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";

import heroMedicalUniforms from "@/assets/hero-medical-uniforms.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on quality. Every product undergoes rigorous testing to meet healthcare standards.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description: "We build long-term relationships with our clients, understanding their unique needs and challenges.",
  },
  {
    icon: Heart,
    title: "Care & Compassion",
    description: "We understand that our products directly impact patient care and guest experiences.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent supply, on-time delivery, and dependable service you can count on.",
  },
];

const milestones = [
  { year: "2018", title: "Company Founded", description: "Medisure Healthcare established in Selangor, Malaysia" },
  { year: "2019", title: "First Major Contract", description: "Secured partnership with leading hospital group" },
  { year: "2020", title: "COVID-19 Response", description: "Scaled production to support healthcare frontliners" },
  { year: "2022", title: "Expansion", description: "Expanded into hotel linen and hospitality sector" },
  { year: "2024", title: "Industry Leader", description: "Recognized as preferred supplier for 20+ institutions" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Medisure Healthcare | Leading Hospital Linen Supplier Malaysia</title>
        <meta
          name="description"
          content="Since 2018, Medisure Healthcare has been Malaysia's trusted hospital linen supplier, medical textile manufacturer, and healthcare fabric provider. Learn about our mission and values."
        />
        <meta
          name="keywords"
          content="leading hospital linen supplier, medical textile manufacturer Malaysia, healthcare textile company, about Medisure Healthcare"
        />
        <link rel="canonical" href="https://medisure.com.my/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="About Us"
              title="Your Trusted Healthcare Textile Partner Since 2018"
              subtitle="Building Malaysia's healthcare infrastructure one textile at a time"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src={heroMedicalUniforms}
                  alt="Medisure Healthcare team"
                  className="w-full rounded-2xl shadow-premium-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-premium-md">
                  <span className="font-heading text-4xl font-bold">7+</span>
                  <p className="font-body text-sm">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Building Trust Through Quality
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Since 2018, Medisure Healthcare has built a strong reputation as a premium supplier 
                    of hospital linen, hotel linen, medical uniforms, surgical textiles, and healthcare 
                    fabrics. We support hospitals, clinics, hotels, and healthcare institutions across 
                    Malaysia with dependable supply, industry-grade hygiene standards, and customized 
                    textile solutions.
                  </p>
                  <p>
                    Our journey began with a simple mission: to provide Malaysian healthcare facilities 
                    with premium-quality textiles that meet international standards while being 
                    competitively priced. Today, we're proud to serve over 20 major healthcare 
                    institutions and hotels across the nation.
                  </p>
                  <p>
                    We understand the critical role textiles play in patient care and guest experiences. 
                    That's why we invest in advanced manufacturing processes, rigorous quality control, 
                    and continuous innovation to deliver products that exceed expectations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card p-8 rounded-2xl shadow-premium-sm h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To be Malaysia's most trusted healthcare textile partner by delivering premium-quality 
                  hospital linen, medical uniforms, and hospitality textiles that enhance patient care, 
                  staff comfort, and guest experiences while maintaining the highest standards of 
                  hygiene and durability.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-card p-8 rounded-2xl shadow-premium-sm h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To become Southeast Asia's leading healthcare textile solutions provider, known for 
                  innovation, sustainability, and unwavering commitment to quality. We envision a 
                  future where every healthcare facility and hospitality venue has access to 
                  world-class textiles at competitive prices.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading
              badge="Our Values"
              title="What Drives Us Every Day"
              subtitle="Our core values guide every decision we make and every product we deliver"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading
              badge="Our Journey"
              title="Milestones & Achievements"
              light
            />
          </AnimatedSection>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-background/20 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 100}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`inline-block ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                        <span className="font-heading text-3xl font-bold text-primary">{milestone.year}</span>
                        <h4 className="font-heading text-xl font-semibold text-background mt-2">{milestone.title}</h4>
                        <p className="font-body text-background/70 mt-1">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-primary rounded-full z-10 flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join the growing list of healthcare institutions and hotels that trust Medisure for their textile needs.
            </p>
            <a href="/contact" className="bg-background text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:bg-background/90 transition-all shadow-premium-md">
              Contact Us Today
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
