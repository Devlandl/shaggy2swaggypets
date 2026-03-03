import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Generate upload URL for dog photos
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// Submit a new quote request
export const submitQuoteRequest = mutation({
  args: {
    customerName: v.string(),
    email: v.string(),
    phone: v.string(),
    dogName: v.string(),
    breed: v.optional(v.string()),
    weight: v.optional(v.string()),
    services: v.array(v.string()),
    notes: v.optional(v.string()),
    photoId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const photoUrl = await ctx.storage.getUrl(args.photoId);
    return await ctx.db.insert("quoteRequests", {
      ...args,
      photoUrl: photoUrl ?? undefined,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

// Get all quote requests (admin)
export const listQuoteRequests = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("quoteRequests")
      .order("desc")
      .collect();
  },
});

// Get a single quote request
export const getQuoteRequest = query({
  args: { id: v.id("quoteRequests") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Update quote (admin sends price back)
export const sendQuote = mutation({
  args: {
    id: v.id("quoteRequests"),
    quotedPrice: v.number(),
    quoteMessage: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "quoted",
      quotedPrice: args.quotedPrice,
      quoteMessage: args.quoteMessage,
    });
  },
});

// Update status
export const updateStatus = mutation({
  args: {
    id: v.id("quoteRequests"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});

// Count pending quotes
export const countPending = query({
  handler: async (ctx) => {
    const pending = await ctx.db
      .query("quoteRequests")
      .filter((q) => q.eq(q.field("status"), "pending"))
      .collect();
    return pending.length;
  },
});
