"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactPerson: "Miroslav (English & International)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {/* Header */}
      <div className="border-b border-hairline/60 pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Direct Acquisition & Advisory
        </p>
        <h1 className="mt-4 font-display text-3xl text-bone md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-base text-steel">
          Get in touch with our team directly or send us a message to discuss investment opportunities across Bulgaria.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-12">
        {/* Direct Contact Details */}
        <div className="md:col-span-5">
          <div className="border border-hairline/80 bg-panel p-8">
            <h2 className="font-display text-xl text-bone">Direct Advisory Contacts</h2>
            <p className="mt-2 text-sm text-steel">
              Our team provides end-to-end support: property selection, legal verification, site viewings, and transaction closing.
            </p>

            <div className="mt-8 space-y-6 border-t border-hairline/60 pt-6">
              {/* 1. Bulgarian Language Desk (Borislav) */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-brass">
                  Bulgarian Language Desk
                </p>
                <p className="mt-1 font-display text-lg text-bone">Borislav Vasilev</p>
                <p className="font-mono text-sm text-steel">
                  Tel:{" "}
                  <a href="tel:+359876756855" className="text-bone hover:text-brass transition-colors">
                    +359 87 675 6855
                  </a>
                </p>
                <p className="font-mono text-xs text-steel-dim mt-0.5">
                  Bulgarian Inquiries & Local Operations
                </p>
              </div>

              {/* 2. English & International Desk (Miroslav) */}
              <div className="border-t border-hairline/40 pt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-brass">
                  English & International Desk
                </p>
                <p className="mt-1 font-display text-lg text-bone">Miroslav</p>
                <p className="font-mono text-sm text-steel">
                  Tel:{" "}
                  <a href="tel:+359890304010" className="text-bone hover:text-brass transition-colors">
                    +359 89 030 4010
                  </a>
                </p>
                <p className="font-mono text-xs text-steel-dim mt-0.5">
                  English & International Inquiries
                </p>
              </div>

              {/* Email */}
              <div className="border-t border-hairline/40 pt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
                  Official Inquiries Email
                </p>
                <a
                  href="mailto:office@nordic-capital-advisors.com"
                  className="font-mono text-sm text-brass underline hover:opacity-80 block mt-1"
                >
                  office@nordic-capital-advisors.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Direct Inquiry Form */}
        <div className="md:col-span-7">
          <div className="border border-hairline/80 bg-panel p-8">
            <h2 className="font-display text-2xl text-bone">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-steel">
              Fill out the form below to reach us directly.
            </p>

            {status === "success" ? (
              <div className="mt-8 border border-brass/40 bg-charcoal/60 p-6 text-center">
                <p className="font-display text-xl text-bone">Message Sent</p>
                <p className="mt-2 text-sm text-steel">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Contact Inputs */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Erik Johansen"
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+359 XXX XXX XXX"
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Preferred Contact Person
                    </label>
                    <select
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    >
                      <option value="Miroslav (English & International)">Miroslav (English & International)</option>
                      <option value="Borislav Vasilev (Bulgarian)">Borislav Vasilev (Bulgarian)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                    Message / Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can help you..."
                    className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full border border-brass bg-brass py-4 font-mono text-xs uppercase tracking-widest text-charcoal transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Inquiry"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 font-mono text-xs text-center mt-2">
                    Failed to send message. Please try again or email office@nordic-capital-advisors.com directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}