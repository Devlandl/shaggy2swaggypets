import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Quote requests with photo uploads
  quoteRequests: defineTable({
    customerName: v.string(),
    email: v.string(),
    phone: v.string(),
    dogName: v.string(),
    breed: v.optional(v.string()),
    weight: v.optional(v.string()),
    services: v.array(v.string()),
    notes: v.optional(v.string()),
    photoId: v.id("_storage"),
    photoUrl: v.optional(v.string()),
    status: v.string(), // "pending" | "quoted" | "approved" | "completed"
    quotedPrice: v.optional(v.number()),
    quoteMessage: v.optional(v.string()),
    createdAt: v.number(),
  }),

  // Contact form submissions
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    status: v.string(), // "new" | "read" | "replied"
    createdAt: v.number(),
  }),

  // Site settings (business info, services, pricing)
  settings: defineTable({
    key: v.string(),
    value: v.string(),
  }),
});
