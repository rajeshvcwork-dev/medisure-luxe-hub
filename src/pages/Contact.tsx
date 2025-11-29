import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["No. 11-2 Jalan PJS 8/12", "Dataran Mentari", "46150 Petaling Jaya", "Selangor, Malaysia"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+60 12-380 1275"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@medisure.com.my", "sales@medisure.com.my"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 9AM - 1PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We appreciate you taking the time to reach out to us. Your message matters, and we look forward to providing you with clear, meaningful guidance.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      requirements: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get a Quote | Medisure Healthcare Malaysia</title>
        <meta
          name="description"
          content="Contact Medisure Healthcare for hospital linen, medical uniforms, and healthcare textile inquiries. Get a free quote for bulk orders. Located in Subang Jaya, Selangor."
        />
        <meta
          name="keywords"
          content="contact hospital linen supplier, contact medical uniform manufacturer, healthcare textile inquiry Malaysia, Medisure contact"
        />
        <link rel="canonical" href="https://medisure.com.my/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Contact Us"
              title="We’re here to listen, support, and deliver. Reach out anytime"
              subtitle="Get in touch with our team for quotes, fabric samples, or inquiries about our healthcare textiles, hospital linens, medical-grade fabrics, hospitality bedding, and hotel textile solutions. We offer fast support and tailored recommendations for all your textile requirements."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-premium-md">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="+60 12-345 6789"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block font-body text-sm font-medium text-foreground mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Hospital / Hotel name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block font-body text-sm font-medium text-foreground mb-2">
                      Your Requirements *
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your textile requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={100}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h3>
                  <p className="font-body text-muted-foreground mb-8">
                    Have questions about our products or services? Our team is ready to help you find the perfect textile solutions for your healthcare or hospitality needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className="bg-muted p-6 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="font-body text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-xl overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0694849449837!2d101.5833!3d3.0458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDInNDQuOSJOIDEwMcKwMzUnMDAuMCJF!5e0!3m2!1sen!2smy!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Medisure Healthcare Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-4">
              Need Urgent Assistance?
            </h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              For urgent inquiries or bulk orders, call us directly. Our team is available during business hours.
            </p>
            <a
              href="tel:+60123456789"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all shadow-premium-md"
            >
              <Phone className="w-5 h-5" />
              <span>Call +60 12-345 6789</span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
