"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {
  Camera,
  Upload,
  X,
  CheckCircle,
  Dog,
  Cat,
  Scissors,
  Bath,
  Heart,
  Sparkles,
  Wind,
  PartyPopper,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn, FadeInScale } from "@/components/AnimatedSection";
import PawParticles from "@/components/PawParticles";

const serviceOptions = [
  { id: "full-groom", label: "Full Groom", icon: Scissors, description: "Bath, haircut, nails, ears, bandana" },
  { id: "bath-brush", label: "Bath & Brush", icon: Bath, description: "Shampoo, conditioner, blow dry" },
  { id: "nail-trim", label: "Nail Trim", icon: Heart, description: "Trim and file nails" },
  { id: "teeth-cleaning", label: "Teeth Cleaning", icon: Sparkles, description: "Brushing and freshening" },
  { id: "deshedding", label: "De-shedding", icon: Wind, description: "Remove loose undercoat (+$10)" },
  { id: "flea-treatment", label: "Flea Treatment", icon: Dog, description: "Flea bath and prevention" },
  { id: "cat-bath-haircut", label: "Cat Bath & Haircut", icon: Cat, description: "Full cat package (from $100)" },
  { id: "cat-bath-only", label: "Cat Bath Only", icon: Cat, description: "Short-hair $60 / Long-hair $70" },
];

const weightOptions = [
  "Under 15 lbs",
  "15 - 30 lbs",
  "30 - 50 lbs",
  "50 - 75 lbs",
  "Over 75 lbs",
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    dogName: "",
    breed: "",
    weight: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateUploadUrl = useMutation(api.quotes.generateUploadUrl);
  const submitQuoteRequest = useMutation(api.quotes.submitQuoteRequest);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    if (!photo) return;
    setIsSubmitting(true);

    try {
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": photo.type },
        body: photo,
      });
      const { storageId } = await result.json();

      const quoteData = {
        customerName: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        dogName: formData.dogName,
        breed: formData.breed || undefined,
        weight: formData.weight || undefined,
        services: selectedServices,
        notes: formData.notes || undefined,
        photoId: storageId,
      };

      await submitQuoteRequest(quoteData);

      // Send email notification to groomer (non-blocking)
      fetch("/api/notify-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...quoteData,
          photoUrl: result.ok ? `${process.env.NEXT_PUBLIC_CONVEX_SITE_URL}/getFile?storageId=${storageId}` : undefined,
        }),
      }).catch(() => {
        // Email notification is best-effort - don't block the user
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-paw-cream relative overflow-hidden">
        {/* Celebratory blur blobs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-paw-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-paw-peach/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

        <FadeInScale>
          <div className="text-center max-w-md relative z-10 bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl shadow-paw-brown/10 border border-white/80">
            {/* Confetti ring */}
            <div className="relative w-28 h-28 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-200 via-emerald-100 to-green-50 animate-pulse" />
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
                >
                  <CheckCircle className="text-green-500" size={48} />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <PartyPopper className="text-paw-gold" size={22} />
                <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-paw-dark">Quote Request Sent!</h1>
                <PartyPopper className="text-paw-gold -scale-x-100" size={22} />
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We have received your photo and service request. Our groomer will review it and send you a personalized quote within a few hours.
              </p>
              <div className="bg-paw-cream/60 rounded-2xl px-5 py-3 mb-8 border border-paw-tan/20">
                <p className="text-sm text-gray-400">
                  Check your email at <strong className="text-paw-brown">{formData.email}</strong> for our response.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 btn-shimmer"
              >
                Back to Home
              </Link>
            </motion.div>
          </div>
        </FadeInScale>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paw-cream/30 relative">
      {/* Background blur blobs for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-paw-peach/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-paw-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-paw-tan/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <section className="relative hero-gradient py-16 overflow-hidden">
        <PawParticles />
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white mb-3">Get a Grooming Quote</h1>
            <p className="text-white/80 text-lg">Upload a photo of your pet and tell us what they need</p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 10 1440 30V60H0Z" fill="rgb(var(--color-paw-cream-rgb, 255 253 247) / 0.3)" />
          </svg>
        </div>
      </section>

      {/* Progress Steps + Wizard Content */}
      <div className="max-w-3xl mx-auto px-4 py-10 relative z-10">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {[
            { num: 1, label: "Upload Photo" },
            { num: 2, label: "Select Services" },
            { num: 3, label: "Your Info" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <motion.div
                  animate={{
                    scale: step === s.num ? 1.15 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-md transition-all duration-300 ${
                    step > s.num
                      ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-green-200/50"
                      : step === s.num
                      ? "bg-gradient-to-br from-paw-brown to-paw-warm text-white shadow-paw-brown/30 ring-4 ring-paw-brown/10"
                      : "bg-white text-gray-300 border-2 border-gray-200 shadow-sm"
                  }`}
                >
                  {step > s.num ? <CheckCircle size={20} /> : s.num}
                </motion.div>
                <span className={`text-xs font-semibold hidden sm:block transition-colors ${
                  step >= s.num ? "text-paw-brown" : "text-gray-300"
                }`}>
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div className="flex items-center mx-2 mb-5 sm:mb-0">
                  <div className="w-16 sm:w-24 h-1 rounded-full overflow-hidden bg-gray-200">
                    <motion.div
                      animate={{ width: step > s.num ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-paw-brown to-paw-warm rounded-full"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-paw-brown/5 border border-white/60 p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {/* Step 1: Upload Photo */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg mx-auto"
              >
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-paw-dark mb-2 text-center">Upload a Photo of Your Pet</h2>
                <p className="text-gray-400 text-center mb-8 text-sm">
                  A clear, full-body photo helps us give the most accurate quote
                </p>

                {!photoPreview ? (
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="relative group border-2 border-dashed border-transparent rounded-3xl p-14 text-center cursor-pointer transition-all duration-300 bg-gradient-to-br from-paw-cream/50 to-paw-peach/20 hover:from-paw-cream to-paw-peach/30"
                    style={{
                      backgroundClip: "padding-box",
                    }}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-paw-brown/30 via-paw-gold/30 to-paw-peach/30 -z-10 group-hover:from-paw-brown/50 group-hover:via-paw-gold/50 group-hover:to-paw-peach/50 transition-all duration-300" style={{ margin: "-2px" }} />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-paw-cream/80 to-white/90 -z-[5]" />

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-paw-peach to-paw-gold/30 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-paw-peach/30 group-hover:shadow-xl group-hover:shadow-paw-gold/30 transition-shadow duration-300">
                        <Camera className="text-paw-brown" size={34} />
                      </div>
                      <p className="font-semibold text-paw-dark mb-1 text-base">Tap to Upload a Photo</p>
                      <p className="text-sm text-gray-400 mb-5">JPG, PNG, or HEIC - Max 10MB</p>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-7 py-3 rounded-full text-sm font-semibold btn-shimmer shadow-lg shadow-paw-brown/20 group-hover:shadow-xl group-hover:shadow-paw-brown/30 transition-shadow">
                        <Upload size={16} />
                        Choose Photo
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-paw-brown/15 ring-1 ring-black/5"
                  >
                    {/* Decorative frame */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-paw-brown/10 via-transparent to-paw-gold/10 z-10 pointer-events-none" />
                    <Image
                      src={photoPreview}
                      alt="Your pet"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <button
                      onClick={() => {
                        setPhoto(null);
                        setPhotoPreview(null);
                      }}
                      className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-red-600 shadow-lg transition-colors z-20"
                    >
                      <X size={18} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4 z-10">
                      <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-lg">
                        <CheckCircle size={13} />
                        Photo Ready
                      </div>
                    </div>
                  </motion.div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoSelect}
                  className="hidden"
                />

                <button
                  onClick={() => setStep(2)}
                  disabled={!photo}
                  className="w-full mt-8 bg-gradient-to-r from-paw-brown to-paw-warm text-white py-3.5 rounded-full font-semibold disabled:opacity-40 hover:shadow-lg hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 btn-shimmer"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* Step 2: Select Services */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg mx-auto"
              >
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-paw-dark mb-2 text-center">What Does Your Pup Need?</h2>
                <p className="text-gray-400 text-center mb-8 text-sm">Select all services you are interested in</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <motion.button
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleService(service.id)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                          isSelected
                            ? "border-paw-brown bg-gradient-to-br from-paw-peach/40 via-paw-cream to-paw-gold/15 shadow-lg shadow-paw-brown/10 ring-1 ring-paw-brown/10"
                            : "border-gray-100 bg-white/60 hover:border-paw-tan/40 hover:bg-paw-cream/30 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isSelected
                              ? "bg-gradient-to-br from-paw-brown to-paw-gold text-white shadow-lg shadow-paw-brown/25"
                              : "bg-gray-50 text-gray-300 border border-gray-100"
                          }`}>
                            <service.icon size={20} />
                          </div>
                          <div className="min-w-0">
                            <p className={`font-semibold text-sm transition-colors ${isSelected ? "text-paw-brown" : "text-paw-dark"}`}>{service.label}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{service.description}</p>
                          </div>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto shrink-0"
                            >
                              <CheckCircle className="text-paw-brown" size={18} />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {selectedServices.length > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-paw-brown font-medium mt-4"
                  >
                    {selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected
                  </motion.p>
                )}

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-200 text-gray-500 py-3.5 rounded-full font-semibold hover:bg-white hover:border-gray-300 hover:text-gray-700 transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={selectedServices.length === 0}
                    className="flex-1 bg-gradient-to-r from-paw-brown to-paw-warm text-white py-3.5 rounded-full font-semibold disabled:opacity-40 hover:shadow-lg hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 btn-shimmer"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Your Info */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg mx-auto"
              >
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-paw-dark mb-2 text-center">Almost Done!</h2>
                <p className="text-gray-400 text-center mb-8 text-sm">Tell us about you and your pup</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-paw-dark mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white text-sm transition-all duration-200 placeholder:text-gray-300 shadow-sm"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-paw-dark mb-1.5">Pet&apos;s Name *</label>
                      <input
                        type="text"
                        value={formData.dogName}
                        onChange={(e) => setFormData({ ...formData, dogName: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white text-sm transition-all duration-200 placeholder:text-gray-300 shadow-sm"
                        placeholder="Buddy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-paw-dark mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white text-sm transition-all duration-200 placeholder:text-gray-300 shadow-sm"
                        placeholder="jane@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-paw-dark mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white text-sm transition-all duration-200 placeholder:text-gray-300 shadow-sm"
                        placeholder="(951) 555-1234"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-paw-dark mb-1.5">Breed (optional)</label>
                      <input
                        type="text"
                        value={formData.breed}
                        onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white text-sm transition-all duration-200 placeholder:text-gray-300 shadow-sm"
                        placeholder="Golden Doodle"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-paw-dark mb-1.5">Weight (optional)</label>
                      <select
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white text-sm transition-all duration-200 shadow-sm"
                      >
                        <option value="">Select weight range</option>
                        {weightOptions.map((w) => (
                          <option key={w} value={w}>{w}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-paw-dark mb-1.5">Anything else we should know?</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-paw-brown/20 focus:border-paw-brown focus:bg-white text-sm resize-none transition-all duration-200 placeholder:text-gray-300 shadow-sm"
                      placeholder="Matting, anxiety, special needs, preferred style..."
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-gray-200 text-gray-500 py-3.5 rounded-full font-semibold hover:bg-white hover:border-gray-300 hover:text-gray-700 transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.customerName ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.dogName
                    }
                    className="flex-1 bg-gradient-to-r from-paw-brown to-paw-warm text-white py-3.5 rounded-full font-semibold disabled:opacity-40 hover:shadow-lg hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 btn-shimmer"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
