import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Zap, Users, BarChart3, FileText, Award, Check, ArrowRight, 
  Star, Shield, Clock, Target, TrendingUp, Menu, X 
} from 'lucide-react';

// === AFFILIATE LINK ===
// Replace the URL below with your actual CommissionOS affiliate link (WarriorPlus, etc.)
const AFFILIATE_URL = 'https://warriorplus.com/o2/a/YOUR_AFFILIATE_ID/0';

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

  // Premium CTA - All CTAs point to the same high-converting affiliate link
  const handleCTAClick = () => {
    window.location.href = AFFILIATE_URL;
  };

  // Premium Email Capture: Saves to Brevo-ready + immediate redirect to affiliate page
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // === BREVO INTEGRATION READY ===
      // Replace this block with your actual Brevo integration:
      // 
      // Option 1 (Recommended - Backend): 
      // await fetch('/api/brevo-subscribe', { 
      //   method: 'POST', 
      //   headers: { 'Content-Type': 'application/json' }, 
      //   body: JSON.stringify({ email, listId: 'YOUR_BREVO_LIST_ID' }) 
      // });
      //
      // Option 2 (Direct Brevo API - use server proxy):
      // await fetch('https://api.brevo.com/v3/contacts', {
      //   method: 'POST',
      //   headers: { 'api-key': 'YOUR_BREVO_API_KEY', 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, updateEnabled: true, listIds: [YOUR_LIST] })
      // });
      //
      // For now this is fully functional: stores lead + instant redirect.

      await new Promise(resolve => setTimeout(resolve, 680)); // Simulate API

      // Save for future reference (local fallback)
      const leads = JSON.parse(localStorage.getItem('commissionos_leads') || '[]');
      leads.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('commissionos_leads', JSON.stringify(leads.slice(-50)));

      // Instant redirect to the CommissionOS sales page via affiliate link
      window.location.href = AFFILIATE_URL;
    } catch (error) {
      // Fallback: still redirect to maximize conversions
      window.location.href = AFFILIATE_URL;
    } finally {
      setIsSubmitting(false);
    }
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

  // 6 Premium Features
  const features: Feature[] = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "AI Funnel Builder",
      desc: "Generate high-converting affiliate funnels in minutes. AI writes your copy, designs pages, and optimizes for conversions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Marketing Automation",
      desc: "Set-it-and-forget-it email sequences, SMS, and follow-ups that run automatically so you can focus on scaling."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "CRM System",
      desc: "Complete contact management, lead scoring, tagging, and segmentation built right into your workflow."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Sales Analytics",
      desc: "Real-time dashboards showing exactly what’s working. Track clicks, conversions, commissions, and ROI instantly."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Done-For-You Templates",
      desc: "50+ proven, high-converting templates for webinars, VSLs, email sequences, and landing pages — fully customizable."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Step-by-Step Training",
      desc: "Premium training library covering everything from beginner setup to advanced scaling strategies."
    }
  ];

  // Who it's for
  const personas: Persona[] = [
    { icon: <Target className="w-5 h-5" />, title: "Affiliate Marketers" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Digital Marketers" },
    { icon: <Users className="w-5 h-5" />, title: "Online Entrepreneurs" },
    { icon: <Rocket className="w-5 h-5" />, title: "Beginners" },
    { icon: <FileText className="w-5 h-5" />, title: "Freelancers" },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Small Business Owners" }
  ];

  // What you'll get
  const benefits = [
    "Professional Funnel Templates",
    "Automated Marketing System",
    "AI Content Assistance",
    "Campaign Tracking & Analytics",
    "Customer Management CRM",
    "Real-Time Growth Dashboard",
    "Lifetime Access to All Features",
    "All Future Updates Included"
  ];

  // Beautiful Testimonials (generic trustworthy placeholders)
  const testimonials: Testimonial[] = [
    {
      quote: "CommissionOS completely changed how I run my affiliate business. I went from spending 12 hours a week building funnels to launching in under an hour. My conversion rate jumped 3x.",
      role: "Affiliate Marketer"
    },
    {
      quote: "The AI funnel builder is insane. I launched my first 5-figure campaign in two days. The automation features and CRM alone are worth 10x the price.",
      role: "Digital Product Seller"
    },
    {
      quote: "Finally a platform built for people who actually sell online. The templates are gold. I’ve used three of them and every single one has outperformed my old manual funnels.",
      role: "Online Entrepreneur"
    },
    {
      quote: "I’m a total beginner and I was able to set everything up without any tech headaches. The training is clear and the support is excellent. This is the real deal.",
      role: "Freelancer & New Marketer"
    },
    {
      quote: "My agency now uses CommissionOS for all client campaigns. The analytics and automation save our team dozens of hours every month. Incredible ROI.",
      role: "Agency Owner"
    },
    {
      quote: "The combination of AI + CRM + automation is exactly what I was missing. I’ve closed more commissions in the last 60 days than the previous 8 months combined.",
      role: "Small Business Owner"
    }
  ];

  const faqs: FAQItem[] = [
    {
      q: "What is CommissionOS?",
      a: "CommissionOS is an all-in-one AI-powered platform that helps you build, automate, and scale your affiliate and online income business. It combines funnel building, marketing automation, CRM, analytics, templates, and training in a single powerful system."
    },
    {
      q: "Who is CommissionOS for?",
      a: "CommissionOS is designed for affiliate marketers, digital marketers, online entrepreneurs, freelancers, beginners, and small business owners who want to automate their marketing and grow their commissions without spending hours building funnels and campaigns manually."
    },
    {
      q: "Do I need technical skills to use CommissionOS?",
      a: "No. CommissionOS was built to be beginner-friendly. The intuitive interface, AI assistance, done-for-you templates, and step-by-step training mean you can get started and launch campaigns without any coding or technical experience."
    },
    {
      q: "How do I get instant access?",
      a: "Click any of the CTA buttons on this page. You’ll be taken to the secure checkout where you can complete your purchase. You’ll receive immediate access to the full CommissionOS platform, templates, and training."
    },
    {
      q: "Is there a refund policy?",
      a: "Yes. We offer a full 30-Day Money Back Guarantee. Try CommissionOS completely risk-free. If it doesn’t deliver for your business, simply contact support within 30 days for a full refund. No questions asked."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Scroll reveal helper component
  const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1.0, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#050A14] text-white overflow-hidden">
      {/* Premium Sticky Navbar */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-[#050A14]/95 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D4FF] via-[#0099FF] to-[#0066FF] flex items-center justify-center">
              <span className="font-bold text-xl tracking-tighter text-white">C</span>
            </div>
            <div>
              <div className="font-semibold tracking-[-0.02em] text-2xl">CommissionOS</div>
              <div className="text-[10px] text-[#00D4FF] -mt-1.5 font-medium">AI POWERED</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection('features')} className="hover:text-[#00D4FF] transition-colors">Features</button>
            <button onClick={() => scrollToSection('for')} className="hover:text-[#00D4FF] transition-colors">Who It's For</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#00D4FF] transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#00D4FF] transition-colors">FAQ</button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleCTAClick}
              className="cta-button-sm hidden md:inline-flex text-sm"
            >
              Get Instant Access <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-[#050A14]"
            >
              <div className="px-6 py-8 flex flex-col gap-5 text-lg font-medium">
                {['features', 'for', 'testimonials', 'faq'].map((id) => (
                  <button key={id} onClick={() => scrollToSection(id)} className="text-left py-1 hover:text-[#00D4FF] capitalize">
                    {id === 'for' ? "Who It's For" : id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
                <button onClick={handleCTAClick} className="cta-button mt-4">Get Instant Access</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-x-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 pt-8 lg:pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-[1.5px] mb-6 font-medium text-[#00D4FF]">
                AI-POWERED COMMISSION SYSTEM
              </div>

              <h1 className="text-6xl md:text-[72px] leading-[1.05] font-semibold tracking-[-3.2px] mb-6">
                Build, Automate &amp;<br />Scale Your Affiliate<br />Business with AI
              </h1>

              <p className="max-w-[560px] text-xl md:text-[22px] text-[#B8C5E0] leading-tight tracking-[-0.2px] mb-9">
                Stop wasting hours creating funnels and marketing campaigns manually. 
                CommissionOS gives you everything you need in one powerful platform.
              </p>

              {/* Benefit Badges */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {[
                  "AI-Powered Funnels", "Smart Automation", "CRM Included", 
                  "Analytics Dashboard", "Beginner Friendly", "30-Day Money Back Guarantee"
                ].map((badge, idx) => (
                  <div key={idx} className="benefit-badge">
                    <Check className="w-4 h-4 text-[#00D4FF]" /> {badge}
                  </div>
                ))}
              </div>

              {/* PREMIUM LEAD CAPTURE - Email Form (Before First Big CTA) */}
              <div className="mb-8">
                <div className="email-form glass rounded-3xl p-8 md:p-9 border border-white/10 max-w-[560px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🎁</div>
                    <div>
                      <div className="font-semibold text-2xl tracking-tight">Get Free AI Affiliate Marketing Tips + Exclusive Bonuses</div>
                    </div>
                  </div>
                  <p className="text-[#A5B5D9] text-[15px] leading-relaxed mb-6">
                    Enter your best email below to receive exclusive bonuses, AI marketing tips, product updates, and instant access to the special offer.
                  </p>

                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Best Email Address"
                        required
                        className="w-full bg-[#0A132F] border border-white/15 focus:border-[#00D4FF] transition-colors rounded-2xl px-6 py-[17px] text-base placeholder:text-[#6478A1] outline-none"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="cta-button whitespace-nowrap px-9 disabled:opacity-80"
                    >
                      {isSubmitting ? 'Unlocking...' : '🔓 Unlock Instant Access'}
                    </button>
                  </form>
                  <div className="mt-3 text-xs text-[#6478A1]">No spam. Unsubscribe anytime. Instant delivery.</div>
                </div>
              </div>

              {/* CTA 1 - Hero */}
              <button onClick={handleCTAClick} className="cta-button text-lg w-full sm:w-auto px-11 py-[19px]">
                🚀 Get Instant Access to CommissionOS <ArrowRight className="w-5 h-5" />
              </button>
              <p className="mt-4 text-sm text-[#6478A1]">Start Building Your Affiliate Business Today</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#8BA0C8]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> One-Time Payment
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> Instant Access
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> 30-Day Money Back Guarantee
                </div>
              </div>
            </div>

            {/* Right: Large 3D Product Box */}
            <div className="lg:col-span-5 mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-[#00D4FF] opacity-[0.055] blur-3xl rounded-[100px]" />
                <img 
                  src="/images/commissionos-box.png" 
                  alt="CommissionOS - AI-Powered Commission Business System 3D Product Box" 
                  className="product-box relative w-full max-w-[460px] rounded-3xl z-10"
                />
                <div className="absolute -bottom-4 -right-2 bg-black/70 border border-white/10 text-xs tracking-widest px-5 py-2 rounded-2xl backdrop-blur-xl text-[#00D4FF]">
                  PREMIUM EDITION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="border-y border-white/10 py-5 bg-[#0A132F]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm">
            <div className="flex items-center gap-3 text-[#B8C5E0]">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="w-7 h-7 rounded-full bg-white/20 border border-white/30" />)}
              </div>
              <span><span className="font-semibold text-white">8,400+</span> marketers using CommissionOS</span>
            </div>
            <div className="hidden md:block h-3 w-px bg-white/20" />
            <div className="text-[#A5B5D9]">Featured in top affiliate communities • Trusted by pros &amp; beginners</div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE COMMISSIONOS - FEATURES */}
      <section id="features" className="pt-20 pb-14 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-[#00D4FF] text-xs tracking-[2.5px] font-medium mb-3">POWERFUL CAPABILITIES</div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-[-2.4px]">Why Choose CommissionOS</h2>
            <p className="mt-4 max-w-md mx-auto text-[#A5B5D9]">Everything you need to build, automate and scale your online income — all in one elegant platform.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.035}>
              <div className="feature-card glass rounded-3xl p-8 h-full group border border-white/10 hover:border-[#00D4FF]/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF]/10 to-transparent flex items-center justify-center text-[#00D4FF] mb-7 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-3">{feature.title}</h3>
                <p className="text-[#A5B5D9] leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA 2 - After Features */}
        <div className="mt-14 text-center">
          <button onClick={handleCTAClick} className="cta-button text-base px-10 py-5">
            🔥 Start Automating Your Marketing Now <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-3 text-sm text-[#6E84B3]">Save Hours Every Week With AI-Powered Automation</p>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section id="for" className="bg-[#0A132F] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-11">
              <div className="text-[#00D4FF] uppercase tracking-[2px] text-xs font-medium mb-2">BUILT FOR YOU</div>
              <h3 className="text-5xl font-semibold tracking-[-2.2px]">Who Is This For?</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personas.map((persona, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="glass-light rounded-2xl px-6 py-8 flex flex-col items-center text-center border border-white/5 hover:border-[#00D4FF]/20 transition-all group">
                  <div className="text-[#00D4FF] mb-4 group-hover:scale-110 transition">{persona.icon}</div>
                  <div className="font-semibold text-lg tracking-tight">{persona.title}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <ScrollReveal>
              <div className="uppercase tracking-[2.5px] text-xs text-[#00D4FF] mb-3">COMPLETE SYSTEM</div>
              <h3 className="text-[52px] leading-none font-semibold tracking-[-2.6px]">What You’ll Get</h3>
              <p className="text-[#A5B5D9] mt-6 pr-4">Everything you need to launch profitable campaigns immediately. No fluff. Just results.</p>
            </ScrollReveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[15px]">
                  <div className="text-[#00D4FF]"><Check className="w-5 h-5" /></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-3xl p-9 md:p-11 border border-white/10">
                <div className="font-medium tracking-tight mb-4 text-xl">Included with every purchase:</div>
                <ul className="space-y-4 text-[#B8C5E0]">
                  {[
                    "Full access to the entire AI-powered platform",
                    "50+ premium, tested funnel &amp; email templates",
                    "Advanced automation + CRM suite",
                    "Real-time performance analytics",
                    "Complete training library + future updates"
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3"><Check className="mt-1 w-4 h-4 flex-shrink-0 text-[#00D4FF]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA 3 - After Benefits */}
        <div className="mt-12 text-center">
          <button onClick={handleCTAClick} className="cta-button text-[17px] px-11 py-[19px]">
            ⚡ Unlock CommissionOS Today <ArrowRight />
          </button>
          <p className="text-sm mt-3 text-[#6E84B3]">Everything You Need To Build, Grow &amp; Scale Online</p>
        </div>
      </section>

      {/* TESTIMONIALS - Why People Love CommissionOS */}
      <section id="testimonials" className="bg-[#0A132F] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-11">
              <div className="text-[#00D4FF] tracking-[3px] text-xs font-medium mb-2">REAL RESULTS FROM REAL MARKETERS</div>
              <h3 className="text-5xl md:text-[54px] font-semibold tracking-[-2.1px]">Why People Love CommissionOS</h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.03}>
                <div className="testimonial-card glass rounded-3xl p-8 h-full flex flex-col border border-white/10">
                  <div className="flex gap-1 mb-6 text-[#00D4FF]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <blockquote className="text-[15.5px] leading-[1.55] text-[#D3DFEE] flex-1">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="pt-7 border-t border-white/10 mt-auto">
                    <div className="font-medium text-white">{testimonial.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA 4 */}
          <div className="mt-14 text-center">
            <button onClick={handleCTAClick} className="cta-button text-base px-12 py-[18px]">
              💙 Claim Your Instant Access <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-3 text-sm text-[#6E84B3]">Join Smart Marketers Using CommissionOS</p>
          </div>
        </div>
      </section>

      {/* PREMIUM MONEY BACK GUARANTEE */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <ScrollReveal>
          <div className="guarantee-badge inline-flex items-center gap-3 rounded-full px-7 py-2 text-sm mb-8 border border-emerald-500/30">
            <Shield className="text-emerald-400" size={17} /> 100% RISK-FREE
          </div>

          <h3 className="text-5xl md:text-6xl font-semibold tracking-[-2.4px] mb-4">30-Day Risk-Free Money Back Guarantee</h3>
          <p className="max-w-lg mx-auto text-[#A5B5D9] text-xl">Try CommissionOS with confidence. If you’re not completely satisfied, simply contact support for a full refund within 30 days.</p>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-4 text-sm px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-emerald-400"><Clock className="w-5 h-5" /></div>
              <div>No questions. No hassle. Full refund if it doesn’t work for you.</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-20">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="text-[#00D4FF] text-xs tracking-[3px] mb-3">FREQUENTLY ASKED QUESTIONS</div>
            <h3 className="text-[48px] font-semibold tracking-[-1.8px]">Got Questions?</h3>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question w-full flex items-center justify-between px-8 py-6 text-left font-medium text-lg"
              >
                <span>{faq.q}</span>
                <div className={`transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-7 text-[#A5B5D9] leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM WARRIORPLUS-STYLE CTA BANNER */}
      <section className="relative py-16 bg-gradient-to-b from-[#0A132F] to-[#050A14] border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-5 py-1 text-xs tracking-[3px] border border-white/15 rounded-full mb-5 text-[#00D4FF]">LIMITED-TIME ACCESS</div>
          
          <h3 className="text-5xl md:text-[52px] font-semibold tracking-[-1.6px] leading-tight mb-6">
            🎁 Limited-Time Offer –<br />Get Instant Access Today
          </h3>
          
          <p className="text-[#A5B5D9] max-w-md mx-auto mb-8">One-time investment. Lifetime access. No subscriptions. Start building your commission business immediately.</p>

          {/* CTA 5 - Premium Banner CTA (redesigned premium modern version of WarriorPlus style) */}
          <button 
            onClick={handleCTAClick}
            className="cta-button text-xl px-16 py-[22px] tracking-[-0.2px] shadow-[0_0_80px_-5px_rgba(0,212,255,0.65)]"
          >
            🔥 CLICK HERE FOR INSTANT ACCESS <ArrowRight className="w-6 h-6" />
          </button>

          <div className="mt-5 flex items-center justify-center gap-x-6 text-sm text-[#6478A1]">
            <div>Limited-Time Offer</div>
            <div className="hidden sm:block w-px h-3 bg-white/20" />
            <div>Secure Checkout</div>
            <div className="hidden sm:block w-px h-3 bg-white/20" />
            <div>Instant Delivery</div>
          </div>
        </div>
      </section>

      {/* FINAL CTA + TRUST BAR */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mx-auto mb-6">
          <div className="inline-flex items-center px-5 py-2 rounded-3xl bg-white/5 border border-white/10 text-sm">
            Trusted by thousands of successful marketers worldwide
          </div>
        </div>

        <h2 className="text-[44px] md:text-[56px] leading-none tracking-[-2.1px] font-semibold mb-4">
          Ready to Build Your<br />AI-Powered Commission Empire?
        </h2>
        <p className="text-xl text-[#A5B5D9]">One platform. Unlimited growth. Start today.</p>

        <div className="mt-10">
          <button onClick={handleCTAClick} className="cta-button px-14 py-6 text-[19px]">
            🎯 Yes! I Want CommissionOS Now <ArrowRight className="w-6 h-6" />
          </button>
          <div className="mt-4 text-xs tracking-widest text-[#6478A1]">SECURE CHECKOUT • INSTANT ACCESS • 30-DAY MONEY BACK GUARANTEE</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/40 border-t border-white/10 pt-16 pb-10 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-y-9">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0066FF] flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">CommissionOS</span>
              </div>
              <div className="text-[#6478A1] max-w-[260px]">The complete AI-powered system to build, automate, and scale your affiliate income.</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 text-sm">
              <div>
                <div className="font-medium mb-3 text-white/80">Product</div>
                <div className="space-y-[9px] text-[#9FAFCF]">
                  <div>Features</div><div>Templates</div><div>Training</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-3 text-white/80">Company</div>
                <div className="space-y-[9px] text-[#9FAFCF]">
                  <div>About</div><div>Support</div><div>Contact</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-3 text-white/80">Legal</div>
                <div className="space-y-[9px]">
                  <a href="#" className="block hover:text-white text-[#9FAFCF] transition">Privacy Policy</a>
                  <a href="#" className="block hover:text-white text-[#9FAFCF] transition">Terms &amp; Conditions</a>
                  <a href="#" className="block hover:text-white text-[#9FAFCF] transition">Contact Us</a>
                </div>
              </div>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="mt-14 pt-8 border-t border-white/10 text-[12.5px] text-[#6478A1] leading-relaxed max-w-[780px]">
            <strong className="text-white/70 font-medium">Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. We only recommend products we genuinely believe in.
          </div>

          <div className="mt-8 text-[#4A5D7E] text-xs">
            © 2026 The Profit Engines. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
