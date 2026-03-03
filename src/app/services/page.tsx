"use client";

import Link from "next/link";
import {
  Scissors,
  Bath,
  Heart,
  Sparkles,
  Wind,
  Dog,
  Cat,
  Camera,
  Leaf,
  CreditCard,
  DollarSign,
  Smartphone,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import PawParticles from "@/components/PawParticles";

const dogServices = [
  {
    icon: Scissors,
    title: "Full Groom",
    description: "The works - bath, blow dry, haircut, nail trim, ear cleaning, and a bandana to show off. We style based on breed standards or your custom request.",
    includes: ["Bath with natural shampoo & conditioner", "Professional blow dry & brush out", "Breed-specific or custom haircut", "Nail trim & file", "Ear cleaning", "Bandana or bow"],
    note: "Price varies by size, breed, and coat condition",
    accent: "from-paw-brown to-paw-gold",
  },
  {
    icon: Bath,
    title: "Bath & Brush",
    description: "A deep-clean bath with our natural, organic products followed by a professional blow dry and thorough brush out. No haircut included.",
    includes: ["Natural shampoo & conditioner", "Deep cleaning", "Professional blow dry", "Full brush out", "Cologne spritz"],
    note: "Price varies by size and coat type",
    accent: "from-paw-warm to-paw-brown",
  },
  {
    icon: Heart,
    title: "Nail Trimming",
    description: "Quick and gentle nail trim and filing. We are experienced with nervous dogs and rescue pups who may be anxious about their paws.",
    includes: ["Nail trim", "Smooth filing", "Paw pad check", "Gentle handling for anxious pets"],
    note: "Walk-ins welcome for nail trims",
    accent: "from-rose-400 to-paw-warm",
  },
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    description: "Fresh breath and cleaner teeth with our gentle brushing and freshening treatment.",
    includes: ["Gentle tooth brushing", "Breath freshening", "Gum check", "Dental treat"],
    note: "Available as add-on to any service",
    accent: "from-amber-400 to-paw-gold",
  },
  {
    icon: Wind,
    title: "De-shedding Treatment",
    description: "Perfect for heavy shedders. We remove loose undercoat to reduce shedding at home significantly.",
    includes: ["De-shedding shampoo", "Undercoat removal", "Blow out treatment", "Finishing brush"],
    note: "Can be added to any service for $10+",
    accent: "from-teal-400 to-emerald-500",
  },
  {
    icon: Dog,
    title: "Flea & Tick Treatment",
    description: "Medicated flea bath to eliminate pests and soothe irritated skin. Safe, gentle, and effective.",
    includes: ["Medicated flea shampoo", "Thorough rinse & treatment", "Skin soothing conditioner", "Prevention tips"],
    note: "Ask about our prevention recommendations",
    accent: "from-blue-400 to-indigo-500",
  },
];

const catServices = [
  {
    title: "Cat Bath & Haircut Package",
    price: "Starting at $100",
    includes: ["Full bath", "Haircut & styling", "Ear cleaning", "Nail trim"],
  },
  {
    title: "Short-Hair Cat Bath",
    price: "Starting at $60",
    includes: ["Bath & shampoo", "Blow dry", "Brush out"],
  },
  {
    title: "Long-Hair Cat Bath",
    price: "Starting at $70",
    includes: ["Bath & conditioner", "Blow dry", "Thorough brush out"],
  },
  {
    title: "De-shedding Add-on",
    price: "+$10",
    includes: ["Available with any cat service"],
  },
];

const catAccents = [
  "from-paw-brown to-paw-gold",
  "from-paw-warm to-paw-brown",
  "from-rose-400 to-paw-warm",
  "from-amber-400 to-paw-gold",
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <PawParticles />
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Dogs and cats welcome - we use natural, organic products safe for sensitive skin
            </p>
          </FadeIn>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 10 1440 30V60H0Z" className="fill-paw-cream" />
          </svg>
        </div>
      </section>

      {/* Why No Prices + Natural Products */}
      <section className="py-14 bg-paw-cream relative overflow-hidden">
        <div className="absolute top-10 left-0 w-72 h-72 bg-paw-peach/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem>
              <div className="bg-white rounded-3xl p-8 border border-paw-tan/20 text-center card-hover h-full shadow-sm">
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-paw-dark mb-3">Why We Quote by Photo</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A 10 lb Yorkie and a 90 lb Golden Retriever need very different things. Coat type, matting level, size, and temperament all affect pricing. By seeing your pet first, we give you an honest, accurate price - no surprises at pickup.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-6 py-3 rounded-full font-semibold mt-6 hover:shadow-lg hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 text-sm btn-shimmer"
                >
                  <Camera size={18} />
                  Upload a Photo for Your Quote
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-3xl p-8 border border-paw-tan/20 text-center card-hover h-full shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-green-600" size={26} />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-paw-dark mb-3">Natural & Organic Products</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We are committed to using only natural and organic grooming products. Our non-toxic formulations are gentle on sensitive skin and safe for all pets. No harsh chemicals ever.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Dog Services */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-paw-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-paw-peach/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-paw-brown/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-paw-brown to-paw-gold rounded-2xl flex items-center justify-center shadow-lg shadow-paw-brown/20">
                <Dog className="text-white" size={24} />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-paw-dark">Dog Grooming</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dogServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-3xl p-8 border border-paw-tan/15 card-hover relative overflow-hidden h-full shadow-sm">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent}`} />
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.accent} opacity-[0.04] rounded-full blur-2xl`} />
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.accent} rounded-2xl flex items-center justify-center shrink-0 shadow-md`}>
                      <service.icon className="text-white" size={26} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-paw-dark">{service.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="ml-[4.5rem]">
                    <p className="text-xs font-semibold text-paw-brown uppercase tracking-wider mb-2">Includes:</p>
                    <ul className="space-y-1.5">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-paw-gold rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.note && (
                      <p className="text-xs text-paw-brown/70 mt-3 italic">{service.note}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cat Services */}
      <section className="py-20 bg-paw-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-paw-brown/5 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-paw-brown to-paw-gold rounded-2xl flex items-center justify-center shadow-lg shadow-paw-brown/20">
                <Cat className="text-white" size={24} />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-paw-dark">Cat Grooming</h2>
            </div>
            <p className="text-gray-500 text-sm mb-12 max-w-lg">
              Our experienced groomers are skilled in handling cats of all breeds and temperaments. We specialize in gentle techniques that help anxious or nervous cats feel comfortable.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {catServices.map((service, index) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-3xl p-7 border border-paw-tan/20 card-hover h-full shadow-sm relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${catAccents[index % catAccents.length]}`} />
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-paw-dark mb-1">{service.title}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-paw-brown to-paw-gold bg-clip-text text-transparent mb-4">{service.price}</p>
                  <ul className="space-y-1.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-paw-gold rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Payment Methods */}
      <FadeIn>
        <section className="py-14 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-paw-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-paw-peach/10 rounded-full blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-paw-dark text-center mb-6">We Accept</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: DollarSign, label: "Cash" },
                { icon: CreditCard, label: "Credit/Debit" },
                { icon: Smartphone, label: "PayPal" },
                { icon: Smartphone, label: "Venmo" },
                { icon: Smartphone, label: "Zelle" },
              ].map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-2 bg-paw-cream/70 border border-paw-tan/20 rounded-2xl px-5 py-3 text-sm font-medium text-paw-dark card-hover"
                >
                  <method.icon size={16} className="text-paw-brown" />
                  {method.label}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <PawParticles />
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">Not Sure What Your Pet Needs?</h2>
            <p className="text-white/80 mb-3 text-lg">
              Upload a photo and tell us your concerns - we will recommend the right services and give you a quote.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Or walk in! 3411 Arlington Ave, Riverside - Mon-Sat 9AM-5:30PM
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-white text-paw-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-paw-cream hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Camera size={22} />
              Get Your Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
