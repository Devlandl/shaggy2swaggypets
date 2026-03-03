"use client";

import Link from "next/link";
import { Camera, Heart, Award, Users, Clock, Leaf, Shield, Star, MapPin, Phone } from "lucide-react";
import { FadeIn, FadeInScale, StaggerContainer, StaggerItem, CountUp } from "@/components/AnimatedSection";
import PawParticles from "@/components/PawParticles";

const values = [
  {
    icon: Heart,
    title: "Gentle with Every Pet",
    description: "We are known for handling anxious, nervous, and rescue pets with patience and care. Your pet feels safe with us.",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: Leaf,
    title: "Natural & Organic Products",
    description: "We only use natural, non-toxic grooming products. Safe for sensitive skin - no harsh chemicals ever.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Award,
    title: "Experienced Groomers",
    description: "Our team - including Suzanne and Jessica - has years of experience across all dog and cat breeds. From Chihuahuas to Great Danes.",
    color: "from-amber-400 to-paw-gold",
  },
  {
    icon: Shield,
    title: "Safe & Clean Environment",
    description: "Dogs are kept in separate kennels at all times. No altercations, no stress. We keep our shop clean and sanitized.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Users,
    title: "Your Pet, Your Way",
    description: "We listen to what you want. Breed-standard cut, custom style, or just a bath - we make it happen exactly how you like it.",
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Our customers love our quick turnaround compared to other groomers. Quality work without the long wait.",
    color: "from-teal-400 to-cyan-500",
  },
];

const stats = [
  { number: 192, suffix: "+", label: "Yelp Reviews" },
  { number: 4.7, suffix: "", label: "Star Rating" },
  { number: 251, suffix: "+", label: "Photos on Yelp" },
  { number: 100, suffix: "%", label: "Response Rate" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <PawParticles />
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Riverside&apos;s trusted pet grooming shop on Arlington Ave - where every pet leaves looking and feeling amazing
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 10 1440 30V60H0Z" fill="var(--color-paw-cream)" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-paw-cream relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-paw-peach/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-paw-tan/20 card-hover shadow-sm">
                  <p className="text-5xl font-extrabold bg-gradient-to-r from-paw-brown to-paw-gold bg-clip-text text-transparent leading-tight">
                    <CountUp target={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-500 mt-2 font-semibold uppercase tracking-widest">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-paw-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-paw-peach/15 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-paw-brown font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-paw-dark mt-3 mb-8">More Than Just a Groom</h2>
            </div>
            <div className="bg-gradient-to-br from-paw-cream/60 to-white rounded-3xl p-8 md:p-10 border border-paw-tan/15 shadow-sm relative">
              <div className="absolute -top-4 left-8 text-7xl text-paw-gold/30 font-serif leading-none select-none">&ldquo;</div>
              <div className="space-y-4 text-gray-500 leading-relaxed relative z-10">
                <p>
                  At Shaggy 2 Swaggy, we will take great care of your furry pet for an affordable price. Located at 3411 Arlington Ave in Riverside, we are a community of pet lovers who treat every dog and cat as an individual.
                </p>
                <p>
                  We know that no two pets are alike. That is why we personalize every grooming session to your pet&apos;s unique needs - their breed, size, coat condition, and temperament all matter. We use only natural and organic products because your pet deserves the best.
                </p>
                <p>
                  Whether you are bringing in your loyal Golden Retriever, your tiny Yorkie, or even your cat - our experienced team is ready to make them look and feel amazing. Walk-ins are always welcome!
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-16 bg-gradient-to-r from-paw-brown to-paw-gold rounded-full" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-paw-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-paw-brown/5 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-56 h-56 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-paw-brown font-semibold text-sm uppercase tracking-widest">Our Team</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-paw-dark mt-3">The People Behind the Magic</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-white rounded-3xl p-8 border border-paw-tan/20 text-center card-hover shadow-sm relative overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-paw-brown via-paw-gold to-paw-brown" />
                <div className="w-22 h-22 bg-gradient-to-br from-paw-peach to-paw-gold/40 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-paw-gold/20 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-paw-dark">Suzanne</h3>
                <p className="text-paw-brown text-sm font-semibold mb-3 uppercase tracking-wider">Groomer</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Known for spectacular work and attention to detail. Customers rave about the quality of her grooming.
                </p>
                <div className="flex justify-center gap-1 mt-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="text-paw-gold fill-paw-gold" />
                  ))}
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-3xl p-8 border border-paw-tan/20 text-center card-hover shadow-sm relative overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-paw-gold via-paw-brown to-paw-gold" />
                <div className="w-22 h-22 bg-gradient-to-br from-paw-peach to-paw-gold/40 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-paw-gold/20 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">💇</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-paw-dark">Jessica</h3>
                <p className="text-paw-brown text-sm font-semibold mb-3 uppercase tracking-wider">Groomer</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Expert at fixing bad cuts from other groomers. Customers love her friendly personality and customer service rated 10 out of 10.
                </p>
                <div className="flex justify-center gap-1 mt-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="text-paw-gold fill-paw-gold" />
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-paw-peach/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-paw-brown font-semibold text-sm uppercase tracking-widest">What We Stand For</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-paw-dark mt-3">Why Pet Parents Trust Us</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white rounded-3xl p-7 border border-paw-tan/15 card-hover h-full shadow-sm relative overflow-hidden group">
                  <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-paw-dark mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-paw-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-paw-peach/20 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <FadeInScale>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-paw-tan/20 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-paw-brown to-paw-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-paw-brown/20">
                <MapPin className="text-white" size={28} />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-paw-dark mb-4">Find Us</h2>
              <p className="text-gray-700 mb-2 text-lg font-medium">3411 Arlington Ave, Riverside, CA 92506</p>
              <div className="inline-flex flex-col items-center bg-paw-cream/60 rounded-2xl px-6 py-3 mb-8">
                <p className="text-gray-600 text-sm font-medium">Monday - Saturday: 9AM - 5:30PM</p>
                <p className="text-gray-400 text-sm">Sunday: Closed</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://maps.google.com/?q=3411+Arlington+Ave+Riverside+CA+92506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 text-sm btn-shimmer"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
                <a
                  href="tel:+19517425674"
                  className="inline-flex items-center justify-center gap-2 border-2 border-paw-brown text-paw-brown px-7 py-3.5 rounded-full font-semibold hover:bg-paw-brown hover:text-white transition-all duration-300 text-sm"
                >
                  <Phone size={16} />
                  Call (951) 742-5674
                </a>
              </div>
            </div>
          </FadeInScale>
        </div>
      </section>

      {/* CTA */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <PawParticles />
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">Ready to Meet Us?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Start with a photo quote - it is free, fast, and gives you peace of mind before your visit.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-white text-paw-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-paw-cream hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Camera size={22} />
              Get Your Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
