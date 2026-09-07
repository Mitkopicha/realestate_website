"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactPerson: "Miroslav Marinov (English & International)",
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
          Direct Acquisition &amp; Advisory
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
              {/* 1. Miroslav Marinov */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-brass">
                  English &amp; International Desk
                </p>
                <p className="mt-1 font-display text-lg text-bone">Miroslav Marinov</p>
                <p className="font-mono text-sm text-steel">
                  Tel:{" "}
                  <a href="tel:+359890304010" className="text-bone transition-colors hover:text-brass">
                    +359 88 541 1444
                  </a>
                </p>
                <p className="mt-0.5 font-mono text-xs text-steel-dim">
                  English &amp; International Inquiries
                </p>
              </div>

              {/* 2. Borislav Vasilev */}
              <div className="border-t border-hairline/40 pt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-brass">
                  English &amp; International Desk
                </p>
                <p className="mt-1 font-display text-lg text-bone">Borislav Vasilev</p>
                <p className="font-mono text-sm text-steel">
                  Tel:{" "}
                  <a href="tel:+359876756855" className="text-bone transition-colors hover:text-brass">
                    +359 87 675 6855
                  </a>
                </p>
                <p className="mt-0.5 font-mono text-xs text-steel-dim">
                  Bulgarian &amp; International Operations
                </p>
              </div>

              {/* 3. Dimitar Duchev */}
              <div className="border-t border-hairline/40 pt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-brass">
                  Advisory &amp; Acquisitions
                </p>
                <p className="mt-1 font-display text-lg text-bone">Dimitar Duchev</p>
                <p className="font-mono text-sm text-steel">
                  Tel:{" "}
                  <a href="tel:+359890304010" className="text-bone transition-colors hover:text-brass">
                    +359 89 030 4010
                  </a>
                </p>
                <p className="mt-0.5 font-mono text-xs text-steel-dim">
                  Nordic Capital Advisors
                </p>
              </div>

              {/* Official Email */}
              <div className="border-t border-hairline/40 pt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
                  Official Inquiries Email
                </p>
                <a
                  href="mailto:office@nordic-capital-advisors.com"
                  className="mt-1 block font-mono text-sm text-brass underline hover:opacity-80"
                >
                  office@nordic-capital-advisors.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Send an Inquiry Form */}
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
                    <label htmlFor="client-name" className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Erik Johansen"
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="client-email" className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Email Address
                    </label>
                    <input
                      id="client-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="client-phone" className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="client-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+359 XXX XXX XXX"
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-person" className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                      Preferred Contact Person
                    </label>
                    <select
                      id="contact-person"
                      name="contactPerson"
                      className="mt-2 w-full border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    >
                      <option value="Miroslav Marinov (English & International)">
                        Miroslav Marinov (English &amp; International)
                      </option>
                      <option value="Borislav Vasilev (English & International)">
                        Borislav Vasilev (English &amp; International)
                      </option>
                      <option value="Dimitar Duchev (Nordic Capital Advisors)">
                        Dimitar Duchev (Nordic Capital Advisors)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="client-message" className="block font-mono text-xs uppercase tracking-widest text-steel-dim">
                    Message / Details
                  </label>
                  <textarea
                    id="client-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us how we can help you..."
                    className="mt-2 w-full resize-none border border-hairline bg-charcoal p-3 font-mono text-sm text-bone focus:border-brass focus:outline-none"
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
                  <p className="mt-2 text-center font-mono text-xs text-red-400">
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