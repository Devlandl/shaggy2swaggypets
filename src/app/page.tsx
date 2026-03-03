"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Camera,
  MessageSquare,
  CheckCircle,
  Scissors,
  Bath,
  Heart,
  Star,
  ArrowRight,
  Shield,
  Leaf,
  Cat,
  MapPin,
  CreditCard,
  DoorOpen,
  Sparkles,
} from "lucide-react";
import PawParticles from "@/components/PawParticles";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Bath,
    title: "Full Bath & Groom",
    description: "Complete bathing, blow dry, haircut, nail trim, ear cleaning, and a bandana - for dogs and cats.",
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Scissors,
    title: "Haircut & Styling",
    description: "Breed-specific cuts or custom styles. Our groomers Suzanne and Jessica know every breed.",
    accent: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: Heart,
    title: "Nail & Paw Care",
    description: "Nail trimming, filing, and paw pad conditioning - even for nervous or rescue pets.",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Cat,
    title: "Cat Grooming",
    description: "Specialized gentle techniques for cats of all breeds. Bath, haircut, nails, and ears.",
    accent: "from-violet-500/20 to-purple-500/20",
  },
];

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Upload a Photo",
    description: "Snap a pic of your dog or cat. We need to see their size, coat, and condition to quote accurately.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "We Review & Quote",
    description: "Our groomers look at the photo and send you a personalized price - no surprises at pickup.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Book & Bring Them In",
    description: "Love the price? Walk in or schedule an appointment at our Arlington Ave location.",
  },
];

const reviews = [
  {
    name: "D.P.",
    rating: 5,
    text: "Shaggy2swaggy is a clean, amazing grooming place. I have had 51 years going to groomers. By far the best!",
    source: "Nextdoor",
  },
  {
    name: "Verified Customer",
    rating: 5,
    text: "The most welcoming people. Jessica fixed a poorly done cut from another groomer. Customer service is 10/10.",
    source: "Yelp",
  },
  {
    name: "Verified Customer",
    rating: 5,
    text: "Best groomer in Riverside. They really know how to handle my anxious rescue pup. I do not think twice about leaving my dog in their care.",
    source: "Yelp",
  },
  {
    name: "Verified Customer",
    rating: 5,
    text: "Fast turnaround compared to other groomers. My Yorkie was done in no time and looked amazing. Staff is friendly and kind.",
    source: "Yelp",
  },
];

const trustBadges = [
  { icon: Star, label: "4.7 Stars", sublabel: "192+ Yelp Reviews" },
  { icon: Leaf, label: "Natural Products", sublabel: "Organic & Non-Toxic" },
  { icon: Shield, label: "Gentle Care", sublabel: "Great with Nervous Pets" },
  { icon: DoorOpen, label: "Walk-ins Welcome", sublabel: "Mon-Sat 9AM-5:30PM" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden grain-overlay">
        <PawParticles />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 py-28 md:py-40 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
                <Sparkles size={14} className="text-paw-gold" />
                4.7 Stars on Yelp - 192+ Reviews - Riverside, CA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              From Shaggy{" "}
              <br />
              to <span className="text-transparent bg-clip-text bg-gradient-to-r from-paw-gold via-yellow-300 to-paw-gold italic">Swaggy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/75 mb-4 leading-relaxed max-w-lg"
            >
              Upload a photo of your dog or cat and get a personalized grooming quote - no phone calls needed. Every pet is different, and so is our pricing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-white/50 text-sm mb-10"
            >
              <MapPin size={14} />
              <span>3411 Arlington Ave, Riverside, CA 92506</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/quote"
                className="group bg-white text-paw-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-paw-cream transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-xl shadow-black/10 hover:-translate-y-0.5"
              >
                <Camera size={20} />
                Get Your Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/25 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 55 1440 50V80H0V40Z" fill="var(--color-paw-cream)" />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-paw-cream">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <StaggerItem key={badge.label}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-paw-tan/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-paw-brown/10 to-paw-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <badge.icon className="text-paw-brown" size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-paw-dark text-sm">{badge.label}</p>
                    <p className="text-xs text-paw-brown/60">{badge.sublabel}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-paw-cream via-paw-peach/30 to-paw-cream relative overflow-hidden grain-overlay">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-paw-gold/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-72 h-72 bg-paw-brown/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-paw-brown/10 text-paw-brown px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles size={14} className="text-paw-gold" />
              How It Works
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-paw-dark mt-3">
              Get a Quote in <span className="text-transparent bg-clip-text bg-gradient-to-r from-paw-brown to-paw-gold italic">3 Easy Steps</span>
            </h2>
            <p className="text-paw-dark/60 mt-4 max-w-xl mx-auto text-lg">
              No more guessing on the phone. Upload a photo and we will give you an accurate price.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={step.step}>
                <div className="relative text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-paw-tan/20 card-hover shadow-lg shadow-paw-brown/5">
                  {/* Gold top accent bar */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-paw-brown via-paw-gold to-paw-warm rounded-b-full" />
                  {/* Step number watermark */}
                  <span className="absolute top-4 right-6 font-[family-name:var(--font-playfair)] text-7xl font-bold text-paw-gold/10">
                    {step.step}
                  </span>
                  {/* Connector line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-paw-gold/40" />
                  )}
                  <div className="w-20 h-20 bg-gradient-to-br from-paw-brown to-paw-warm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-paw-brown/25 ring-4 ring-paw-gold/10">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-paw-dark mb-3">{step.title}</h3>
                  <p className="text-paw-dark/55 text-sm leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center mt-14">
            <Link
              href="/quote"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-10 py-4 rounded-full font-bold text-lg btn-shimmer hover:shadow-2xl hover:shadow-paw-brown/25 hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
          <path d="M0 30C480 60 960 0 1440 30V60H0V30Z" fill="white" />
        </svg>
      </div>

      {/* Services Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-[5%] w-96 h-96 bg-paw-peach/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-paw-gold/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-paw-gold/10 text-paw-brown px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <Heart size={14} className="text-paw-gold" />
              Dogs & Cats Welcome
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-paw-dark mt-3">
              Pamper Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-paw-brown to-paw-gold italic">Pet</span>
            </h2>
            <p className="text-paw-dark/60 mt-4 max-w-xl mx-auto text-lg">
              From a full spa day to a quick nail trim - we treat every pet like royalty.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="relative bg-gradient-to-b from-paw-cream/60 to-white p-8 rounded-3xl border border-paw-tan/15 card-hover h-full shadow-lg shadow-paw-brown/5">
                  {/* Gradient top border */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-paw-brown via-paw-gold to-paw-warm rounded-b-full" />
                  <div className={`w-16 h-16 bg-gradient-to-br from-paw-brown to-paw-warm rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-paw-brown/20`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-paw-dark mb-2">{service.title}</h3>
                  <p className="text-paw-dark/55 text-sm leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2} className="text-center mt-14">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-8 py-3.5 rounded-full font-semibold btn-shimmer hover:shadow-xl hover:shadow-paw-brown/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Services & Pricing
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
          <path d="M0 30C480 0 960 60 1440 30V60H0V30Z" fill="var(--color-paw-cream)" />
        </svg>
      </div>

      {/* Why Choose Us */}
      <section className="py-24 bg-paw-cream relative overflow-hidden grain-overlay">
        {/* Decorative blobs */}
        <div className="absolute top-10 right-[5%] w-80 h-80 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-paw-brown/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-paw-brown/10 text-paw-brown px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <Shield size={14} className="text-paw-gold" />
              Why Shaggy 2 Swaggy
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-paw-dark mt-3">
              What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-paw-brown to-paw-gold italic">Different</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="relative text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-paw-tan/15 card-hover shadow-lg shadow-paw-brown/5 h-full">
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 rounded-b-full" />
                <div className="w-18 h-18 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/25 ring-4 ring-emerald-500/10">
                  <Leaf className="text-white" size={30} />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-paw-dark text-xl mb-3">Natural & Organic</h3>
                <p className="text-paw-dark/55 text-sm leading-relaxed">Only natural, non-toxic products safe for sensitive skin. No harsh chemicals.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-paw-tan/15 card-hover shadow-lg shadow-paw-brown/5 h-full">
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-400 via-sky-500 to-blue-400 rounded-b-full" />
                <div className="w-18 h-18 bg-gradient-to-br from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/25 ring-4 ring-blue-500/10">
                  <Shield className="text-white" size={30} />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-paw-dark text-xl mb-3">Safe & Separated</h3>
                <p className="text-paw-dark/55 text-sm leading-relaxed">Individual kennels for every pet. No altercations. Great with anxious and rescue pets.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-paw-tan/15 card-hover shadow-lg shadow-paw-brown/5 h-full">
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-400 rounded-b-full" />
                <div className="w-18 h-18 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/25 ring-4 ring-purple-500/10">
                  <CreditCard className="text-white" size={30} />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-paw-dark text-xl mb-3">Flexible Payments</h3>
                <p className="text-paw-dark/55 text-sm leading-relaxed">Cash, card, PayPal, Venmo, and Zelle - whatever is easiest for you.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mb-px">
          <path d="M0 30C480 60 960 0 1440 30V60H0V30Z" fill="var(--color-paw-blush)" />
        </svg>
      </div>

      {/* Reviews */}
      <section className="py-24 bg-gradient-to-b from-paw-blush via-paw-peach/30 to-paw-cream relative overflow-hidden grain-overlay">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-paw-gold/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[5%] w-80 h-80 bg-paw-brown/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-paw-gold/15 text-paw-brown px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <Star size={14} className="text-paw-gold fill-paw-gold" />
              Real Reviews
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-paw-dark mt-3">
              Happy Pets, Happy <span className="text-transparent bg-clip-text bg-gradient-to-r from-paw-brown to-paw-gold italic">Parents</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={20} className="text-paw-gold fill-paw-gold" />
                ))}
              </div>
              <span className="text-paw-dark/50 text-sm font-medium">192+ reviews on Yelp</span>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <StaggerItem key={index}>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-paw-tan/15 card-hover h-full shadow-lg shadow-paw-brown/5">
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-paw-gold/60 via-paw-gold to-paw-gold/60 rounded-b-full" />
                  <div className="quote-mark relative">
                    <div className="flex gap-0.5 mb-4 pt-5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-paw-gold fill-paw-gold" />
                      ))}
                    </div>
                    <p className="text-paw-dark/65 text-sm leading-relaxed mb-6 italic">{review.text}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-paw-tan/15">
                    <p className="font-bold text-paw-dark text-sm">{review.name}</p>
                    <span className="text-[10px] bg-paw-brown/8 text-paw-brown/70 font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">{review.source}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2} className="text-center mt-14">
            <a
              href="https://www.yelp.com/biz/shaggy2swaggypets-riverside-5"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-8 py-3.5 rounded-full font-semibold btn-shimmer hover:shadow-xl hover:shadow-paw-brown/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Read All 192+ Reviews on Yelp
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative hero-gradient overflow-hidden grain-overlay">
        <PawParticles />
        {/* Extra depth blobs */}
        <div className="absolute top-10 left-[15%] w-64 h-64 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="max-w-3xl mx-auto px-4 py-28 text-center relative z-10">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
              <Sparkles size={14} className="text-paw-gold" />
              Ready for a Transformation?
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Make Your Pet <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-paw-gold via-yellow-300 to-paw-gold">Amazing?</span>
            </h2>
            <p className="text-white/75 mb-4 text-lg max-w-xl mx-auto">
              Upload a photo and get a quote in minutes - not hours on the phone.
            </p>
            <p className="text-white/50 mb-12 text-sm">
              Or just walk in! 3411 Arlington Ave, Riverside - Mon-Sat 9AM-5:30PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-paw-brown px-10 py-5 rounded-full font-bold text-lg hover:bg-paw-cream transition-all duration-300 shadow-2xl shadow-black/15 hover:-translate-y-1"
              >
                <Camera size={22} />
                Get Your Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/25 text-white px-8 py-5 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
