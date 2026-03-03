"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { MapPin, Phone, Mail, Clock, CheckCircle, CreditCard, DoorOpen, Instagram, Sparkles, Heart, Send } from "lucide-react";
import { FadeIn, FadeInScale, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import PawParticles from "@/components/PawParticles";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitContact = useMutation(api.contacts.submit);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Location",
      gradient: "from-rose-100 via-pink-50 to-rose-50",
      iconColor: "text-rose-500",
      content: (
        <>
          <p className="text-gray-500 text-sm">3411 Arlington Ave</p>
          <p className="text-gray-500 text-sm">Riverside, CA 92506</p>
          <a
            href="https://maps.google.com/?q=3411+Arlington+Ave+Riverside+CA+92506"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paw-brown text-xs font-medium hover:underline mt-1 inline-block"
          >
            Get Directions
          </a>
        </>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      gradient: "from-blue-100 via-sky-50 to-blue-50",
      iconColor: "text-blue-500",
      content: (
        <>
          <a href="tel:+19517425674" className="text-paw-brown text-sm hover:underline">(951) 742-5674</a>
          <p className="text-xs text-gray-400 mt-0.5">Average response time: 9 hours</p>
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      gradient: "from-amber-100 via-yellow-50 to-amber-50",
      iconColor: "text-amber-500",
      content: (
        <a href="mailto:shaggy2swaggypets@gmail.com" className="text-paw-brown text-sm hover:underline">shaggy2swaggypets@gmail.com</a>
      ),
    },
    {
      icon: Instagram,
      title: "Instagram",
      gradient: "from-purple-100 via-fuchsia-50 to-pink-50",
      iconColor: "text-purple-500",
      content: (
        <a href="https://instagram.com/shaggy2swaggypets" target="_blank" rel="noopener noreferrer" className="text-paw-brown text-sm hover:underline">@shaggy2swaggypets</a>
      ),
    },
    {
      icon: Clock,
      title: "Hours",
      gradient: "from-emerald-100 via-green-50 to-emerald-50",
      iconColor: "text-emerald-500",
      content: (
        <>
          <p className="text-gray-500 text-sm">Mon - Sat: 9AM - 5:30PM</p>
          <p className="text-gray-500 text-sm">Sun: Closed</p>
        </>
      ),
    },
    {
      icon: DoorOpen,
      title: "Walk-ins Welcome!",
      gradient: "from-orange-100 via-amber-50 to-orange-50",
      iconColor: "text-orange-500",
      content: <p className="text-gray-500 text-sm">No appointment needed - just stop by</p>,
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      gradient: "from-teal-100 via-cyan-50 to-teal-50",
      iconColor: "text-teal-500",
      content: <p className="text-gray-500 text-sm">Cash, Credit/Debit, PayPal, Venmo, Zelle</p>,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative hero-gradient py-20 overflow-hidden">
        <PawParticles />
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/80 text-lg">Have a question? We would love to hear from you - walk-ins always welcome!</p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 10 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative blur blobs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-paw-peach/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-paw-gold/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-paw-cream/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Contact Info */}
            <SlideInLeft>
              <div className="bg-gradient-to-br from-paw-cream/40 via-white to-paw-peach/20 rounded-3xl border border-paw-gold/10 p-8 shadow-sm">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-paw-dark mb-8">Get in Touch</h2>
                <StaggerContainer className="space-y-5">
                  {contactItems.map((item) => (
                    <StaggerItem key={item.title}>
                      <div className="flex items-start gap-4 group">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
                          <item.icon className={item.iconColor} size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-paw-dark">{item.title}</p>
                          {item.content}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideInLeft>

            {/* Form */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-white via-paw-cream/30 to-paw-peach/10 rounded-3xl border border-paw-gold/10 p-8 shadow-sm">
                {isSubmitted ? (
                  <FadeInScale>
                    <div className="text-center py-16">
                      {/* Celebratory success state */}
                      <div className="relative inline-block mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-50 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-100/50">
                          <CheckCircle className="text-green-500" size={42} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-paw-gold to-amber-300 rounded-full flex items-center justify-center shadow-md animate-bounce">
                          <Sparkles className="text-white" size={16} />
                        </div>
                        <div className="absolute -bottom-1 -left-3 w-7 h-7 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full flex items-center justify-center shadow-md">
                          <Heart className="text-white" size={14} />
                        </div>
                      </div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-paw-dark mb-3">Message Sent!</h3>
                      <p className="text-gray-500 text-sm max-w-xs mx-auto">Thank you for reaching out! We will get back to you as soon as possible.</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs text-paw-brown/70 bg-paw-cream/50 px-4 py-2 rounded-full">
                        <Clock size={14} />
                        <span>Average reply time: 9 hours</span>
                      </div>
                    </div>
                  </FadeInScale>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-paw-dark mb-2">Send Us a Message</h2>
                      <p className="text-gray-500 text-sm mb-6">Or call us at (951) 742-5674 - we respond to 100% of messages!</p>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-paw-dark mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white focus:shadow-lg focus:shadow-paw-brown/5 text-sm transition-all duration-300 placeholder:text-gray-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-paw-dark mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white focus:shadow-lg focus:shadow-paw-brown/5 text-sm transition-all duration-300 placeholder:text-gray-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-paw-dark mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white focus:shadow-lg focus:shadow-paw-brown/5 text-sm transition-all duration-300 placeholder:text-gray-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-paw-dark mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white focus:shadow-lg focus:shadow-paw-brown/5 text-sm resize-none transition-all duration-300 placeholder:text-gray-300"
                        placeholder="Tell us about your pet and what services you are interested in..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-paw-brown to-paw-warm text-white py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 btn-shimmer flex items-center justify-center gap-2 text-base"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <FadeIn>
        <section className="relative bg-gradient-to-b from-white via-paw-cream/30 to-paw-peach/20 pt-12 pb-0">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-paw-gold/30 to-transparent" />

          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-paw-dark mb-2">Find Us Here</h2>
              <p className="text-gray-500 text-sm">3411 Arlington Ave, Riverside, CA 92506</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-paw-brown/10 border border-paw-gold/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d-117.3827!3d33.9534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3411+Arlington+Ave+Riverside+CA+92506!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shaggy 2 Swaggy Pet Grooming location"
              />
            </div>
          </div>
          <div className="h-12" />
        </section>
      </FadeIn>
    </>
  );
}
