import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  AlertTriangle,
  Zap,
  ArrowRight,
  ArrowLeft,
  Wrench,
  Search,
  CircleDollarSign,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Voltas AC Error E5 | Indoor Fan Motor Failure | Diagnostic Guide | Atlas Aircon",
  description:
    "Voltas AC Error E5 means indoor fan motor failure. Learn the causes (fan capacitor, motor winding, PCB), DIY checks, and professional repair costs. Atlas Aircon Vadodara — Call +91 97272 57141.",
  keywords: [
    "voltas ac error e5",
    "voltas ac error code e5",
    "voltas ac e5 fault",
    "voltas ac fan not spinning",
    "voltas ac indoor fan error",
    "voltas ac capacitor replacement",
    "voltas ac pcb repair",
    "voltas ac fan motor replacement",
    "ac error e5 meaning",
    "voltas ac troubleshooting",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/fault-codes/voltas-ac-error-e5",
  },
  openGraph: {
    title: "Voltas AC Error E5 — Indoor Fan Motor Failure | Atlas Aircon",
    description:
      "Diagnostic protocol & repair guide for Voltas AC Error E5. Fan not spinning? Suspect: Fan Capacitor or PCB/Motor.",
    url: "https://atlasaircons.com/fault-codes/voltas-ac-error-e5",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Voltas AC Error E5 — Indoor Fan Motor Failure",
  description:
    "Complete diagnostic protocol and repair guide for Voltas AC Error Code E5, which indicates an indoor fan motor failure.",
  author: {
    "@type": "Organization",
    name: "Atlas Aircon",
  },
  publisher: {
    "@type": "Organization",
    name: "Atlas Aircon",
    url: "https://atlasaircons.com",
  },
  mainEntityOfPage:
    "https://atlasaircons.com/fault-codes/voltas-ac-error-e5",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why did my Voltas AC fan motor fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fan motors fail due to prolonged use, dust accumulation on bearings, voltage fluctuations damaging the winding insulation, or a weak starting capacitor that forces the motor to draw excess current.",
      },
    },
    {
      "@type": "Question",
      name: "Can I repair the fan motor or do I have to buy a new one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, the issue is just a weak capacitor (₹850-₹1,200 to replace). If the motor winding itself is burnt (open circuit), replacement is usually more cost-effective than rewinding, costing ₹2,500+.",
      },
    },
    {
      "@type": "Question",
      name: "The fan spins but I still get E5. Why?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This usually means the PCB's Hall Sensor feedback circuit is faulty. Even though the fan is running, the PCB isn't receiving the speed signal. This requires PCB-level repair by a qualified technician.",
      },
    },
  ],
};

export default function VoltasErrorE5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero / Fault Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/ac-error-codes"
                className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Error Codes
              </Link>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full text-sm mb-6">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span className="text-red-300">ACTIVE FAULT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-400">Voltas AC Error E5</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Indoor Fan Motor Failure. The &ldquo;Lungs&rdquo; of your AC have stopped breathing.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Symptom</p>
                <p className="font-bold text-yellow-400">Fan Not Spinning</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Suspect #1
                </p>
                <p className="font-bold text-orange-400">Fan Capacitor</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Suspect #2
                </p>
                <p className="font-bold text-red-400">PCB / Motor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-4 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <strong>TECHNICIAN NOTE:</strong> Always isolate power before
              inspecting high-voltage components. Continuing to run equipment with
              this active code may void warranties or cause permanent mechanical
              failure.
            </p>
          </div>
        </div>
      </section>

      {/* Decoding the Issue */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Decoding the &ldquo;Dead Air&rdquo; Issue
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">
                The E5 Error targets the <strong>indoor blower unit</strong>.
                The AC&apos;s brain (PCB) expects speed feedback from the fan motor.
                If the fan is spinning too slowly, not spinning at all, or spinning
                without sending a signal back, E5 is triggered.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Why it matters:</strong> Without the fan, the cold air stays
                trapped inside the AC unit. This causes the internal coils to turn
                into a block of ice within minutes. The system shuts down to prevent
                this.
              </p>
            </div>

            {/* Basic Checks */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Search className="w-6 h-6 text-blue-600" />
                <span>Basic Checks (Do This First)</span>
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Listen for &ldquo;Humming&rdquo;
                  </h4>
                  <p className="text-gray-600">
                    Turn the AC on. Do you hear a low humming sound from the indoor
                    unit but no air comes out? This usually means the motor is trying
                    to start but can&apos;t (Capacitor failure).
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">
                    The &ldquo;Pen Test&rdquo; (Careful!)
                  </h4>
                  <p className="text-gray-600">
                    With the AC <strong>OFF</strong> and flap open, gently push the
                    blower roller with a pen. Does it spin freely? If it feels stiff
                    or jammed, the motor bearings are seized.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Physical Blockage
                  </h4>
                  <p className="text-gray-600">
                    Sometimes, a piece of paper, plastic, or a rat can physically jam
                    the blower wheel. Check for any foreign objects.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Repair Protocol */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-blue-600" />
                <span>Atlas Aircon Repair Protocol</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our technicians troubleshoot E5 in this order:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Capacitor Check (Most Likely)",
                    desc: "The 1.5uF or 2uF capacitor on the PCB often gets weak. Replacing this cheap part usually fixes the fan.",
                    color: "green",
                  },
                  {
                    step: "02",
                    title: "Motor Winding Test",
                    desc: "We check resistance on the motor wires. Open windings mean the motor is burnt and needs replacement.",
                    color: "yellow",
                  },
                  {
                    step: "03",
                    title: "PCB Feedback Circuit",
                    desc: "If the motor is new but E5 persists, the PCB's \"Hall Sensor\" circuit isn't reading the speed. PCB repair required.",
                    color: "red",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        item.color === "green"
                          ? "bg-green-100 text-green-700"
                          : item.color === "yellow"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Repair Cost */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 mb-12">
              <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5" /> Estimated Repair Cost
                (Atlas Aircon)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Capacitor</p>
                  <p className="text-xl font-bold text-blue-700">
                    ₹850 – ₹1,200
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Motor Replace</p>
                  <p className="text-xl font-bold text-blue-700">₹2,500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Why did my fan motor fail?",
                a: "Fan motors fail due to prolonged use, dust accumulation on bearings, voltage fluctuations damaging the winding insulation, or a weak starting capacitor that forces the motor to draw excess current.",
              },
              {
                q: "Can I repair the motor or do I have to buy a new one?",
                a: "In most cases, the issue is just a weak capacitor (₹850-₹1,200 to replace). If the motor winding itself is burnt, replacement is usually more cost-effective, costing ₹2,500+.",
              },
              {
                q: "The fan spins but I still get E5. Why?",
                a: "This usually means the PCB's Hall Sensor feedback circuit is faulty. Even though the fan is running, the PCB isn't receiving the speed signal. This requires PCB-level repair by a qualified technician.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-gray-200"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Link
              href="/fault-codes/voltas-ac-error-code-f0"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
            >
              <ArrowLeft className="w-5 h-5" /> PREV CODE
            </Link>
            <Link
              href="/ac-error-codes"
              className="text-gray-600 hover:text-blue-600 font-medium transition"
            >
              All Error Codes
            </Link>
            <Link
              href="/fault-codes/voltas-ac-error-h6"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
            >
              NEXT CODE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">
            Can&apos;t Fix the E5 Error?
          </h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Industrial HVAC systems are complex. Don&apos;t risk component failure.
            The Atlas Aircon engineering squad has successfully cleared Voltas AC
            Error E5 across multiple sites. We can dispatch a technician immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919727257141"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              <Phone size={22} />
              Call Expert Now
            </a>
            <a
              href="https://wa.me/919727257141?text=EMERGENCY:+My+system+is+showing+the+Voltas+AC+Error+E5+code.+I+need+support+now."
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition"
            >
              Get Live Troubleshooting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
