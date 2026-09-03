import React from 'react';

export default function InvestorServices() {
  return (
    <section className="py-16 bg-slate-900 text-white border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif text-amber-400 mb-4">
            Investor Concierge & Brokerage Package
          </h2>
          <p className="text-slate-300 text-lg">
            We ensure a seamless, fully-assisted investment experience from the moment you land.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: VIP Viewing Package */}
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4 gap-2">
                <h3 className="text-xl font-bold text-white">Full-Service Viewing Stay</h3>
                <span className="bg-amber-500/20 text-amber-400 font-semibold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  €2,000 Package
                </span>
              </div>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Airport pickup & round-trip transfers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Up to 3 nights hotel accommodation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> 3 days of guided asset & property viewings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Full legal, administrative & notary support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Hosted dinner during your stay
                </li>
              </ul>
            </div>
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-sm font-medium">
              💡 <strong>Special Benefit:</strong> The €2,000 package fee is 100% deductible from the final property price upon closing the deal.
            </div>
          </div>

          {/* Card 2: Post-Acquisition Services */}
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Post-Acquisition & Construction Support</h3>
              <p className="text-slate-300 mb-4">
                Our advisory does not end at the closing table. We provide complete after-sales assistance to add maximum value to your portfolio:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Vetted construction & renovation teams
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Finishing works & interior fit-out oversight
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Custom project estimates & ongoing oversight
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700 text-slate-400 text-sm">
              * Construction and renovation services are quoted individually based on project scope.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}