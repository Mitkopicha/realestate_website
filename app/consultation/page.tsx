"use client";

import { useState } from "react";

export default function PropertyConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    location: "",
    preferredLocation: "",
    propertyType: "",
    budget: "",
    construction: "",
    maintenance: "",
    maintenanceDetails: "",
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    social: "",
    language: "",
    additionalRequirements: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">

      {/* Header */}
      <div className="border-b border-hairline/60 pb-10">

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Sunrise Estates Bulgaria
        </p>

        <h1 className="mt-4 font-display text-3xl text-bone md:text-5xl">
          Feedback Questionnaire
        </h1>

        <p className="mt-4 max-w-3xl text-base text-steel">
          Please fill out the information below so we can better understand your
          requirements. Based on your preferences, we will prepare a personalized
          selection of properties in Bulgaria.
        </p>

      </div>


      {submitted ? (

        <div className="mt-12 border border-brass/40 bg-panel p-10 text-center">

          <h2 className="font-display text-2xl text-bone">
            Thank You!
          </h2>

          <p className="mt-4 text-steel">
            We have received your request. Our team will contact you as soon as possible.
          </p>

        </div>

      ) : (

      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-10"
      >


        {/* Question 1 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            1. Where would you like to purchase a property in Bulgaria?
          </h2>


          <div className="mt-6 grid gap-3 md:grid-cols-2">

            {[
              "On the Black Sea coast",
              "In the mountains",
              "In an urban area",
              "In a rural area",
            ].map((item)=>(
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 border border-hairline p-4 text-sm text-steel hover:border-brass"
              >

                <input
                  type="radio"
                  name="location"
                  value={item}
                  checked={formData.location === item}
                  onChange={(e)=>updateField("location", e.target.value)}
                />

                {item}

              </label>
            ))}

          </div>

        </section>



        {/* Question 2 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            2. Do you have any preferences for the property's location?
          </h2>


          <textarea
            rows={4}
            placeholder="For example: Varna, Burgas, Sofia, Bansko..."
            className="mt-6 w-full border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
            value={formData.preferredLocation}
            onChange={(e)=>
              updateField(
                "preferredLocation",
                e.target.value
              )
            }
          />

        </section>




        {/* Question 3 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            3. What type of property would you like to buy?
          </h2>


          <div className="mt-6 grid gap-3 md:grid-cols-2">


            {[
              "Small studio",
              "One-bedroom apartment",
              "Two-bedroom apartment",
              "Maisonette / Duplex",
              "House near the sea",
              "House in the mountains",
              "House in a rural area",
              "Hotels and holiday resorts",
            ].map((item)=>(

              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 border border-hairline p-4 text-sm text-steel hover:border-brass"
              >

                <input
                  type="radio"
                  name="propertyType"
                  value={item}
                  checked={formData.propertyType === item}
                  onChange={(e)=>
                    updateField(
                      "propertyType",
                      e.target.value
                    )
                  }
                />

                {item}

              </label>

            ))}


          </div>

        </section>


        {/* Question 4 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            4. What is your budget?
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">

            {[
              "Up to €50,000",
              "Up to €75,000",
              "Up to €100,000",
              "Up to €1,000,000",
              "More than €1,000,000",
            ].map((item)=>(

              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 border border-hairline p-4 text-sm text-steel hover:border-brass"
              >

                <input
                  type="radio"
                  name="budget"
                  value={item}
                  checked={formData.budget === item}
                  onChange={(e)=>
                    updateField(
                      "budget",
                      e.target.value
                    )
                  }
                />

                {item}

              </label>

            ))}

          </div>

        </section>



        {/* Question 5 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            5. What stage of construction do you prefer the property to be in?
          </h2>


          <div className="mt-6 space-y-3">

            {[
              "Turnkey and furnished, ready for immediate move-in.",
              "Turnkey and unfurnished, with assistance available for furnishing.",
              "Shell and core (plaster & screed), with material selection options and assistance finding contractors.",
              "Under construction / 'off-plan', with assistance in selecting a verified developer.",
            ].map((item)=>(

              <label
                key={item}
                className="flex cursor-pointer gap-3 border border-hairline p-4 text-sm leading-relaxed text-steel hover:border-brass"
              >

                <input
                  type="radio"
                  name="construction"
                  value={item}
                  checked={formData.construction === item}
                  onChange={(e)=>
                    updateField(
                      "construction",
                      e.target.value
                    )
                  }
                />

                <span>
                  {item}
                </span>

              </label>

            ))}

          </div>

        </section>




        {/* Question 6 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            6. Would you like year-round property maintenance and management services?
          </h2>


          <div className="mt-6 space-y-3">

            {[
              "Yes, with an appropriate service agreement.",
              "No, not needed.",
            ].map((item)=>(

              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 border border-hairline p-4 text-sm text-steel hover:border-brass"
              >

                <input
                  type="radio"
                  name="maintenance"
                  value={item}
                  checked={formData.maintenance === item}
                  onChange={(e)=>
                    updateField(
                      "maintenance",
                      e.target.value
                    )
                  }
                />

                {item}

              </label>

            ))}


          </div>


          <textarea
            rows={3}
            placeholder="Do you have specific maintenance or servicing requirements?"
            className="mt-6 w-full border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
            value={formData.maintenanceDetails}
            onChange={(e)=>
              updateField(
                "maintenanceDetails",
                e.target.value
              )
            }
          />

        </section>




        {/* Question 7 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            7. Leave your contact details so we can get in touch with you
          </h2>


          <div className="mt-6 grid gap-5 md:grid-cols-2">


            <input
              type="text"
              placeholder="Your Name"
              className="border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
              value={formData.name}
              onChange={(e)=>
                updateField(
                  "name",
                  e.target.value
                )
              }
            />


            <input
              type="tel"
              placeholder="Phone"
              className="border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
              value={formData.phone}
              onChange={(e)=>
                updateField(
                  "phone",
                  e.target.value
                )
              }
            />


            <input
              type="tel"
              placeholder="WhatsApp"
              className="border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
              value={formData.whatsapp}
              onChange={(e)=>
                updateField(
                  "whatsapp",
                  e.target.value
                )
              }
            />


            <input
              type="email"
              placeholder="Email"
              className="border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
              value={formData.email}
              onChange={(e)=>
                updateField(
                  "email",
                  e.target.value
                )
              }
            />


            <input
              type="text"
              placeholder="Social Media / Handle"
              className="border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none md:col-span-2"
              value={formData.social}
              onChange={(e)=>
                updateField(
                  "social",
                  e.target.value
                )
              }
            />

          </div>


        </section>




        {/* Question 8 */}
        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            8. Preferred communication language
          </h2>


          <select
            className="mt-6 w-full border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
            value={formData.language}
            onChange={(e)=>
              updateField(
                "language",
                e.target.value
              )
            }
          >

            <option value="">
              Select language
            </option>

            <option>
              Bulgarian
            </option>

            <option>
              English
            </option>

            <option>
              Russian
            </option>

            <option>
              Norwegian / Scandinavian
            </option>

          </select>


        </section>




        {/* Additional Information */}

        <section className="border border-hairline bg-panel p-8">

          <h2 className="font-display text-xl text-bone">
            Additional Requirements
          </h2>


          <textarea
            rows={5}
            placeholder="Share any additional details regarding your desired property..."
            className="mt-6 w-full border border-hairline bg-charcoal p-4 text-sm text-bone focus:border-brass focus:outline-none"
            value={formData.additionalRequirements}
            onChange={(e)=>
              updateField(
                "additionalRequirements",
                e.target.value
              )
            }
          />

        </section>




        <button
          type="submit"
          className="w-full border border-brass bg-brass py-5 font-mono text-xs uppercase tracking-[0.2em] text-charcoal transition-opacity hover:opacity-90"
        >
          Submit Request
        </button>


      </form>

      )}

    </div>
  );
}