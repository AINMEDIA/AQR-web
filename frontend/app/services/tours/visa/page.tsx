import { PageTransition } from "@/components/page-transition"
import { FileText, CheckCircle, HelpCircle, ArrowRight, Info } from "lucide-react"
import Link from "next/link"

export default function VisaPage() {
  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
            alt="Visa Application"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Visa Application</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Get expert help with your visa application process.</p>
          </div>
        </section>

        {/* Visa Requirements Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-5xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Visa Requirements</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">What you need to apply for a visa</p>
            </div>
            <ul className="space-y-6 text-blue-900 text-lg">
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-blue-500 mt-1" /> Valid passport with at least 6 months validity</li>
<li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-blue-500 mt-1" /> Completed visa application form</li>
<li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-blue-500 mt-1" /> Passport-sized photographs</li>
<li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-blue-500 mt-1" /> Proof of accommodation and travel itinerary</li>
<li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-blue-500 mt-1" /> Proof of funds and return ticket</li>
<li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-blue-500 mt-1" /> Additional documents (varies by country)</li>
            </ul>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 bg-white animate-fade-in-delay">
          <div className="w-full max-w-5xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Application Process</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Step-by-step guide to your visa application</p>
            </div>
            <ol className="space-y-6 text-blue-900 text-lg list-decimal list-inside">
              <li className="flex items-start gap-3"><FileText className="w-6 h-6 text-blue-500 mt-1" /> Gather all required documents</li>
              <li className="flex items-start gap-3"><FileText className="w-6 h-6 text-blue-500 mt-1" /> Fill out the visa application form</li>
              <li className="flex items-start gap-3"><FileText className="w-6 h-6 text-blue-500 mt-1" /> Submit your application to the relevant embassy or online portal</li>
              <li className="flex items-start gap-3"><FileText className="w-6 h-6 text-blue-500 mt-1" /> Pay the visa application fee</li>
              <li className="flex items-start gap-3"><FileText className="w-6 h-6 text-blue-500 mt-1" /> Attend an interview (if required)</li>
              <li className="flex items-start gap-3"><FileText className="w-6 h-6 text-blue-500 mt-1" /> Wait for processing and collect your visa</li>
            </ol>
            <div className="text-center mt-8">
              <Link href="/about/contact" className="inline-flex px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-2xl hover:bg-blue-800 hover:text-white transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl items-center justify-center gap-3 group">
                Get Visa Help <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Visa FAQs Section */}
        <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200 animate-fade-in-delay">
          <div className="w-full max-w-4xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Visa FAQs</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Quick answers to common questions</p>
            </div>
            <ul className="space-y-8 text-blue-900 text-lg">
              <li className="flex items-start gap-3"><HelpCircle className="w-6 h-6 text-blue-500 mt-1" /> <span><strong>How long does it take to process a visa?</strong><br />Processing times vary by country and visa type, but typically range from a few days to several weeks.</span></li>
              <li className="flex items-start gap-3"><HelpCircle className="w-6 h-6 text-blue-500 mt-1" /> <span><strong>Can I get a visa on arrival?</strong><br />Some countries offer visa on arrival for certain nationalities. Check with the destination embassy for details.</span></li>
              <li className="flex items-start gap-3"><HelpCircle className="w-6 h-6 text-blue-500 mt-1" /> <span><strong>What if my visa is denied?</strong><br />If your visa is denied, you may reapply or appeal the decision. Contact us for guidance.</span></li>
              <li className="flex items-start gap-3"><HelpCircle className="w-6 h-6 text-blue-500 mt-1" /> <span><strong>Do I need a visa for transit?</strong><br />Transit visa requirements depend on your route and destination. We can help you check if you need one.</span></li>
            </ul>
          </div>
        </section>
      </div>
    </PageTransition>
  )
} 