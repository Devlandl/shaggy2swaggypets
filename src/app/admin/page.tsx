"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { Id } from "../../../convex/_generated/dataModel";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  DollarSign,
  CheckCircle,
  Eye,
  Send,
  Dog,
  Scissors,
  X,
} from "lucide-react";

export default function AdminPage() {
  const quotes = useQuery(api.quotes.listQuoteRequests);
  const contacts = useQuery(api.contacts.list);
  const sendQuote = useMutation(api.quotes.sendQuote);
  const updateStatus = useMutation(api.quotes.updateStatus);

  const [selectedQuote, setSelectedQuote] = useState<Id<"quoteRequests"> | null>(null);
  const [quotePrice, setQuotePrice] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");
  const [tab, setTab] = useState<"quotes" | "contacts">("quotes");

  const selected = quotes?.find((q) => q._id === selectedQuote);

  const handleSendQuote = async () => {
    if (!selectedQuote || !quotePrice) return;
    await sendQuote({
      id: selectedQuote,
      quotedPrice: parseFloat(quotePrice),
      quoteMessage: quoteMessage || undefined,
    });
    setQuotePrice("");
    setQuoteMessage("");
    setSelectedQuote(null);
  };

  const pendingCount = quotes?.filter((q) => q.status === "pending").length ?? 0;
  const contactCount = contacts?.filter((c) => c.status === "new").length ?? 0;

  const statusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "quoted": return "bg-blue-100 text-blue-700";
      case "approved": return "bg-green-100 text-green-700";
      case "completed": return "bg-gray-100 text-gray-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-paw-dark text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scissors size={24} />
            <h1 className="text-xl font-bold">Shaggy 2 Swaggy - Admin</h1>
          </div>
          <Link href="/" className="text-sm text-gray-400 hover:text-white">View Site</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="text-yellow-600" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-paw-dark">{pendingCount}</p>
                <p className="text-xs text-gray-500">Pending Quotes</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-paw-dark">
                  {quotes?.filter((q) => q.status === "quoted").length ?? 0}
                </p>
                <p className="text-xs text-gray-500">Quoted</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-paw-dark">
                  {quotes?.filter((q) => q.status === "completed").length ?? 0}
                </p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Dog className="text-purple-600" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-paw-dark">{quotes?.length ?? 0}</p>
                <p className="text-xs text-gray-500">Total Requests</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("quotes")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              tab === "quotes" ? "bg-paw-brown text-white" : "bg-white text-gray-600 border"
            }`}
          >
            Quote Requests {pendingCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{pendingCount}</span>
            )}
          </button>
          <button
            onClick={() => setTab("contacts")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              tab === "contacts" ? "bg-paw-brown text-white" : "bg-white text-gray-600 border"
            }`}
          >
            Contact Messages {contactCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{contactCount}</span>
            )}
          </button>
        </div>

        {/* Quote Requests */}
        {tab === "quotes" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="lg:col-span-2 space-y-3">
              {!quotes ? (
                <div className="bg-white rounded-xl p-8 text-center text-gray-400">Loading...</div>
              ) : quotes.length === 0 ? (
                <div className="bg-white rounded-xl p-8 text-center text-gray-400">No quote requests yet</div>
              ) : (
                quotes.map((quote) => (
                  <div
                    key={quote._id}
                    onClick={() => setSelectedQuote(quote._id)}
                    className={`bg-white rounded-xl p-4 border cursor-pointer transition-all hover:shadow-sm ${
                      selectedQuote === quote._id ? "ring-2 ring-paw-brown" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {quote.photoUrl && (
                        <Image
                          src={quote.photoUrl}
                          alt={quote.dogName}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-paw-dark">{quote.dogName}</p>
                            <p className="text-xs text-gray-500">{quote.customerName} - {quote.email}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ${statusColor(quote.status)}`}>
                            {quote.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {quote.services.map((s) => (
                            <span key={s} className="text-xs bg-paw-cream px-2 py-0.5 rounded text-paw-brown">
                              {s}
                            </span>
                          ))}
                        </div>
                        {quote.breed && (
                          <p className="text-xs text-gray-400 mt-1">{quote.breed} {quote.weight && `- ${quote.weight}`}</p>
                        )}
                        {quote.quotedPrice && (
                          <p className="text-sm font-bold text-green-600 mt-1">${quote.quotedPrice}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-1">
              {selected ? (
                <div className="bg-white rounded-xl border sticky top-24">
                  {selected.photoUrl && (
                    <Image
                      src={selected.photoUrl}
                      alt={selected.dogName}
                      width={400}
                      height={300}
                      className="w-full h-60 object-cover rounded-t-xl"
                    />
                  )}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-paw-dark">{selected.dogName}</h3>
                      <button onClick={() => setSelectedQuote(null)}>
                        <X size={18} className="text-gray-400" />
                      </button>
                    </div>
                    <div className="space-y-2 text-sm mb-4">
                      <p><span className="text-gray-500">Owner:</span> {selected.customerName}</p>
                      <p><span className="text-gray-500">Email:</span> {selected.email}</p>
                      <p><span className="text-gray-500">Phone:</span> {selected.phone}</p>
                      {selected.breed && <p><span className="text-gray-500">Breed:</span> {selected.breed}</p>}
                      {selected.weight && <p><span className="text-gray-500">Weight:</span> {selected.weight}</p>}
                      {selected.notes && <p><span className="text-gray-500">Notes:</span> {selected.notes}</p>}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {selected.services.map((s) => (
                        <span key={s} className="text-xs bg-paw-brown/10 px-2 py-1 rounded text-paw-brown font-medium">
                          {s}
                        </span>
                      ))}
                    </div>

                    {selected.status === "pending" && (
                      <div className="border-t pt-4 space-y-3">
                        <h4 className="font-semibold text-sm text-paw-dark">Send a Quote</h4>
                        <div>
                          <label className="text-xs text-gray-500">Price ($)</label>
                          <input
                            type="number"
                            step="0.01"
                            value={quotePrice}
                            onChange={(e) => setQuotePrice(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-sm mt-1"
                            placeholder="75.00"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Message (optional)</label>
                          <textarea
                            value={quoteMessage}
                            onChange={(e) => setQuoteMessage(e.target.value)}
                            rows={2}
                            className="w-full px-3 py-2 border rounded-lg text-sm mt-1 resize-none"
                            placeholder="Based on coat condition..."
                          />
                        </div>
                        <button
                          onClick={handleSendQuote}
                          disabled={!quotePrice}
                          className="w-full bg-paw-brown text-white py-2.5 rounded-lg font-semibold text-sm disabled:opacity-40 hover:bg-paw-dark transition-colors flex items-center justify-center gap-2"
                        >
                          <Send size={16} />
                          Send Quote
                        </button>
                      </div>
                    )}

                    {selected.status === "quoted" && (
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-500 mb-1">Quoted Price</p>
                        <p className="text-2xl font-bold text-green-600">${selected.quotedPrice}</p>
                        {selected.quoteMessage && (
                          <p className="text-sm text-gray-500 mt-2">{selected.quoteMessage}</p>
                        )}
                        <button
                          onClick={() => updateStatus({ id: selected._id, status: "completed" })}
                          className="w-full mt-4 bg-green-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <CheckCircle size={16} />
                          Mark Completed
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl border p-8 text-center text-gray-400">
                  <Eye size={32} className="mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Select a quote request to view details</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {tab === "contacts" && (
          <div className="space-y-3">
            {!contacts ? (
              <div className="bg-white rounded-xl p-8 text-center text-gray-400">Loading...</div>
            ) : contacts.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center text-gray-400">No messages yet</div>
            ) : (
              contacts.map((contact) => (
                <div key={contact._id} className="bg-white rounded-xl p-5 border">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-paw-dark">{contact.name}</p>
                      <p className="text-xs text-gray-500">{contact.email} {contact.phone && `- ${contact.phone}`}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      contact.status === "new" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{contact.message}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(contact.createdAt).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit",
                    })}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
