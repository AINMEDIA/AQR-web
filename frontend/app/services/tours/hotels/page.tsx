import { PageTransition } from "@/components/page-transition"
import { Hotel, Plane, Train, Bus, ArrowRight, Info, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HotelsPage() {
  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/services-hero.jpeg"
            alt="Hotel & Ticket Reservation"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Hotel & Ticket Reservation</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Book top hotels and reserve your travel tickets with ease.</p>
          </div>
        </section>

        {/* Hotel Booking Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-5xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Hotel Booking</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Find the best hotels for your stay</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-10">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border-2 border-blue-200 flex flex-col items-start" data-aos="zoom-in" data-aos-delay="100">
                <h3 className="text-lg md:text-2xl font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                  <Hotel className="w-5 h-5 md:w-7 md:h-7 text-blue-500 animate-bounce" /> 
                  <span className="text-sm md:text-base lg:text-xl">Featured Destinations</span>
                </h3>
                <ul className="text-sm md:text-lg text-blue-900 space-y-2 md:space-y-3 font-semibold">
                  <li>Kampala City Hotels</li>
                  <li>Entebbe Beach Resorts</li>
                  <li>Jinja Riverside Lodges</li>
                  <li>National Park Safari Lodges</li>
                  <li className="text-xs md:text-base">International Destinations (on request)</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border-2 border-blue-200 flex flex-col items-start" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="text-lg md:text-2xl font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-blue-500 animate-bounce" /> 
                  <span className="text-sm md:text-base lg:text-xl">Amenities</span>
                </h3>
                <ul className="text-sm md:text-lg text-blue-900 space-y-2 md:space-y-3 font-semibold">
                  <li>Free Wi-Fi & Breakfast</li>
                  <li>Airport Shuttle</li>
                  <li>Swimming Pool & Gym</li>
                  <li>Conference Facilities</li>
                  <li>Family & Group Packages</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/about/contact" className="inline-flex px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-2xl hover:bg-blue-800 hover:text-white transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl items-center justify-center gap-3 group">
                Book a Hotel Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ticket Reservation Section */}
        <section className="py-16 bg-white animate-fade-in-delay">
          <div className="w-full max-w-5xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Ticket Reservation</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Reserve your travel tickets easily</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border-2 border-blue-200 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
                <Plane className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mb-3 md:mb-4 animate-bounce" />
                <h3 className="text-sm md:text-xl font-bold text-blue-700 mb-1 md:mb-2">Flight Tickets</h3>
                <p className="text-blue-900 text-xs md:text-base mb-1 md:mb-2 text-center">Book local and international flights at competitive rates.</p>
                <Link href="/about/contact" className="text-blue-700 hover:text-blue-900 underline underline-offset-2 text-xs md:text-sm font-bold transition-all duration-300">Book Now <ArrowRight className="inline w-3 h-3 md:w-4 md:h-4 ml-1" /></Link>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border-2 border-blue-200 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
                <Bus className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mb-3 md:mb-4 animate-bounce" />
                <h3 className="text-sm md:text-xl font-bold text-blue-700 mb-1 md:mb-2">Bus Tickets</h3>
                <p className="text-blue-900 text-xs md:text-base mb-1 md:mb-2 text-center">Reserve seats for intercity and cross-border bus travel.</p>
                <Link href="/about/contact" className="text-blue-700 hover:text-blue-900 underline underline-offset-2 text-xs md:text-sm font-bold transition-all duration-300">Book Now <ArrowRight className="inline w-3 h-3 md:w-4 md:h-4 ml-1" /></Link>
              </div>
              <div className="col-span-2 md:col-span-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border-2 border-blue-200 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
                <Train className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mb-3 md:mb-4 animate-bounce" />
                <h3 className="text-sm md:text-xl font-bold text-blue-700 mb-1 md:mb-2">Train Tickets</h3>
                <p className="text-blue-900 text-xs md:text-base mb-1 md:mb-2 text-center">Book train journeys for a scenic and comfortable experience.</p>
                <Link href="/about/contact" className="text-blue-700 hover:text-blue-900 underline underline-offset-2 text-xs md:text-sm font-bold transition-all duration-300">Book Now <ArrowRight className="inline w-3 h-3 md:w-4 md:h-4 ml-1" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200 animate-fade-in-delay">
          <div className="w-full max-w-4xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Travel Tips</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Make the most of your journey</p>
            </div>
            <ul className="space-y-6 text-blue-900 text-lg">
              <li className="flex items-start gap-3"><Info className="w-6 h-6 text-blue-500 mt-1" /> Book in advance for the best rates and availability.</li>
              <li className="flex items-start gap-3"><Info className="w-6 h-6 text-blue-500 mt-1" /> Check visa and travel requirements for your destination.</li>
              <li className="flex items-start gap-3"><Info className="w-6 h-6 text-blue-500 mt-1" /> Pack essentials and keep travel documents handy.</li>
              <li className="flex items-start gap-3"><Info className="w-6 h-6 text-blue-500 mt-1" /> Contact us for personalized travel advice and support.</li>
            </ul>
          </div>
        </section>
      </div>
    </PageTransition>
  )
} 