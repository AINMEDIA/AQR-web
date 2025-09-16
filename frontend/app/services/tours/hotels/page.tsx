import { PageTransition } from "@/components/page-transition"
import { Hotel, ArrowRight, CheckCircle, Star, Shield, Clock, Globe, Users, Headphones, Plane, Bus, Ship, Target, Wallet, Heart } from "lucide-react"
import Link from "next/link"

export default function HotelsPage() {
  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
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
          <div className="w-full max-w-7xl mx-auto px-6 animate-scale-in">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {/* Left Big Card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Hotel className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700" />
            </div>
                <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Seamless Stays and Smooth Journeys.</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100 leading-relaxed">
                  We're taking the stress out of travel by handling your hotel bookings and ticket reservations from start to finish. With our trusted partners, transparent pricing, and fast service, we ensure you get the best deals, the right accommodations, and hassle-free reservations so you can focus on enjoying the journey, not planning it.
                </p>
              </div>

              {/* Right Side - 2 Cards */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Hotel Reservations Card */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border-2 border-blue-200 flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="200">
                  <h3 className="text-sm md:text-lg font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                    <Hotel className="w-4 h-4 md:w-5 md:h-5 text-blue-500" /> 
                    <span className="text-xs md:text-sm">Hotel Reservations</span>
                  </h3>
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-start gap-2 text-left">
                      <Star className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Wide Selection of Hotels - From budget-friendly stays to luxury resorts.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Best Price Guarantee - Transparent rates with no hidden fees.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Fast & Easy Booking - Quick reservations tailored to your schedule.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Globe className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Global Network - Stay anywhere, whether local or international.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Users className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Personalized Recommendations - Hotels matched to your needs and preferences.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Headphones className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">24/7 Support - Assistance before, during, and after your stay.</span>
                    </div>
                  </div>
                  <Link href="/services/tours/hotels/booking" className="w-full px-4 py-2 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-500 text-sm hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                    Book Hotel Now
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>

                {/* Ticketing Card */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border-2 border-blue-200 flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="300">
                  <h3 className="text-sm md:text-lg font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500" /> 
                    <span className="text-xs md:text-sm">Ticketing</span>
                  </h3>
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-start gap-2 text-left">
                      <Plane className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Flight Bookings – Domestic and international flights at competitive rates.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Bus className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Bus & Coach Tickets – Convenient options for city and upcountry travel.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Ship className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Ferry & Cruise Reservations – For waterway travel and leisure trips.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Target className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Multi-Destination Planning – Perfect for tours and complex itineraries.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Wallet className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Flexible Payments – Secure and convenient payment options.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Heart className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">24/7 Support – Assistance with cancellations, changes, or emergencies.</span>
                    </div>
                  </div>
                  <Link href="/services/tours/tickets/booking" className="w-full px-4 py-2 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-500 text-sm hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                    Book Tickets Now
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>
            </div>
            </div>
          </div>
        </section>


      </div>
    </PageTransition>
  )
} 