import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Zap, Users, BarChart3, FileText, Award, Check, ArrowRight, 
  Star, Shield, Clock, Target, TrendingUp, Menu, X 
} from 'lucide-react';

// === AFFILIATE LINK UPDATED ===
const AFFILIATE_URL = 'https://warriorplus.com/o2/a/wgqw1qh/0';

interface Testimonial {
  quote: string;
  role: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Persona {
  icon: React.ReactNode;
  title: string;
}

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleCTAClick = () => {
    window.location.href = AFFILIATE_URL;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 680));
    window.location.href = AFFILIATE_URL;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const features: Feature[] = [
    { icon: <Rocket className="w-6 h-6" />, title: "AI Funnel Builder", desc: "Generate high-converting affiliate funnels in minutes. AI writes your copy, designs pages, and optimizes for conversions." },
    { icon: <Zap className="w-6 h-6" />, title: "Marketing Automation", desc: "Set-it-and-forget-it email sequences, SMS, and follow-ups that run automatically." },
    { icon: <Users className="w-6 h-6" />, title: "CRM System", desc: "Complete contact management, lead scoring, tagging, and segmentation." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Sales Analytics", desc: "Real-time dashboards showing exactly what’s working." },
    { icon: <FileText className="w-6 h-6" />, title: "Done-For-You Templates", desc: "50+ proven, high-converting templates for webinars, VSLs, email sequences." },
    { icon: <Award className="w-6 h-6" />, title: "Step-by-Step Training", desc: "Premium training library covering everything from beginner to advanced." }
  ];

  const personas: Persona[] = [
    { icon: <Target className="w-5 h-5" />, title: "Affiliate Marketers" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Digital Marketers" },
    { icon: <Users className="w-5 h-5" />, title: "Online Entrepreneurs" },
    { icon: <Rocket className="w-5 h-5" />, title: "Beginners" },
    { icon: <FileText className="w-5 h-5" />, title: "Freelancers" },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Small Business Owners" }
  ];

  const benefits = [
    "Professional Funnel Templates", "Automated Marketing System", "AI Content Assistance",
    "Campaign Tracking & Analytics", "Customer Management CRM", "Real-Time Growth Dashboard",
    "Lifetime Access to All Features", "All Future Updates Included"
  ];

  const testimonials: Testimonial[] = [
    { quote: "CommissionOS completely changed how I run my affiliate business. I went from spending 12 hours a week building funnels to launching in under an hour.", role: "Affiliate Marketer" },
    { quote: "Finally a platform built for people who actually sell online. The templates are gold.", role: "Online Entrepreneur" },
    { quote: "I’m a total beginner and I was able to set everything up without any tech headaches.", role: "Freelancer" },
    { quote: "My agency now uses CommissionOS for all client campaigns. Incredible ROI.", role: "Agency Owner" },
    { quote: "The combination of AI + CRM + automation is exactly what I was missing.", role: "Small Business Owner" }
  ];
  const faqs: FAQItem[] = [
    { q: "What is CommissionOS?", a: "An all-in-one AI-powered platform for affiliate marketing." },
    { q: "Who is CommissionOS for?", a: "Designed for marketers, entrepreneurs, and beginners." },
    { q: "Do I need technical skills?", a: "No, it's beginner-friendly with AI assistance." },
    { q: "How do I get instant access?", a: "Click any CTA button on this page." },
    { q: "Is there a refund policy?", a: "Yes, 30-Day Money Back Guarantee." }
  ];

  const toggleFAQ = (index: number) => { setOpenFAQ(openFAQ === index ? null : index); };

  const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay }} className={className}>{children}</motion.div>
  );

  return (
    <div className="min-h-screen bg-[#050A14] text-white overflow-hidden">
      <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-[#050A14]/95 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="font-semibold text-2xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CommissionOS</div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection('features')} className="hover:text-[#00D4FF]">Features</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#00D4FF]">Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#00D4FF]">FAQ</button>
          </div>
          <button onClick={handleCTAClick} className="cta-button-sm text-sm">Get Access</button>
        </div>
      </nav>

      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-6xl font-semibold mb-6 tracking-tight">Build, Automate & Scale Your Affiliate Business</h1>
        
        {/* === BREVO FORM INTEGRATED HERE === */}
        <div className="my-12">
          <h2 className="text-2xl mb-6 font-medium">Claim Your Free Bonus</h2>
          <iframe 
            width="540" height="305" 
            src="https://c47c57f7.sibforms.com/v2/serve/MUIFAKRNvUe75AW0ega_SfETgEeXyHtGAhhYKUgkKf1kbl74VMMFaxduLXhssQZCYPOm7Ls_f2t4YHQU-C6tOqV6ifWU5B2FFkRgbVK1_gz8f5zNhKEPCaOnY13qUvX5Xe1i4NDGawKH3LrTHoZmr9yWX4wMcylUhQ12sQ94KOo9KwOsgMj9OfvcazhjZ0FLrMmC587ixz1xihiVsA==" 
            frameBorder="0" scrolling="auto" allowFullScreen 
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}>
          </iframe>
        </div>

        <button onClick={handleCTAClick} className="cta-button text-xl px-11 py-[19px]">
          🚀 Get Instant Access <ArrowRight />
        </button>
      </section>

      <section id="features" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold">Why Choose CommissionOS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
                <div key={i} className="p-8 border border-white/10 rounded-3xl hover:border-[#00D4FF]/30 transition">
                    <div className="mb-4 text-[#00D4FF]">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-[#A5B5D9]">{feature.desc}</p>
                </div>
            ))}
        </div>
      </section> <section id="testimonials" className="bg-[#0A132F] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-semibold mb-16">Why People Love CommissionOS</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl">
                <p className="mb-6 text-[#D3DFEE]">“{t.quote}”</p>
                <div className="font-semibold">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
        <h3 className="text-4xl text-center mb-10">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-2xl p-6">
              <button onClick={() => toggleFAQ(index)} className="w-full text-left font-medium text-lg flex justify-between">
                {faq.q} <span>{openFAQ === index ? '−' : '+'}</span>
              </button>
              {openFAQ === index && <p className="mt-4 text-[#A5B5D9]">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 pt-16 pb-10 text-center">
        <p className="text-[#6478A1] text-sm">© 2026 The Profit Engines. All Rights Reserved.</p>
        <div className="mt-4 text-[12px] text-[#4A5D7E] max-w-lg mx-auto">
          <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links.
        </div>
      </footer>
    </div>
  );
};

export default App;
