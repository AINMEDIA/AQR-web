"use client";
import { PageTransition } from "@/components/page-transition"
import { Car, Users, Heart, ArrowRight } from "lucide-react"

export default function TransportPage() {

  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
            alt="Transport"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Car Hire & Transport</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Reliable car hire and transport solutions for your journey.</p>
          </div>
        </section>
        
        {/* Transport Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-7xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              {/* <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Why Choose Our Transport?</h2> */}
              {/* <p className="text-xl text-muted-foreground transition-all duration-700">Reliable and comfortable transport solutions</p> */}
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-16">
              {/* Your Journey, Our Commitment */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Your Journey, Our Commitment.</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100 leading-relaxed mb-2">
                  Choosing us means choosing reliability, comfort, and peace of mind.
                </p>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100 leading-relaxed">
                  We're redefining travel by providing transparent pricing, expert service, and fast, hassle-free bookings through our strong network of trusted partners. Whether it's a short ride or a long-distance trip, we're committed to getting you there safely, comfortably, and on time every single time.
                </p>
              </div>

              {/* Vehicle Types */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <Car className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  <h3 className="text-sm md:text-xl font-bold transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Vehicle Types</h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 justify-center">
                    <Car className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-xs md:text-sm text-gray-600">SUVs (4x4, luxury, family)</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Car className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-xs md:text-sm text-gray-600">Saloon Cars (sedan, executive, economy)</span>
                </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Car className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-xs md:text-sm text-gray-600">Vans & Minibuses (group travel, airport shuttles)</span>
              </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-xs md:text-sm text-gray-600">Luxury Cars (weddings, VIP events)</span>
                </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Car className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    <span className="text-xs md:text-sm text-gray-600">Trucks & Pickups (cargo, moving)</span>
              </div>
            </div>
          </div>

            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="relative py-16 bg-gradient-to-br from-yellow-100 to-yellow-50 animate-fade-in-delay">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center gap-6">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-yellow-700 hover:scale-105 cursor-default" data-aos="fade-up">Ready for your Ride?</h2>
              <a href="/services/tours/transport/booking" className="px-8 py-4 bg-white text-yellow-800 font-bold rounded-full shadow-2xl hover:bg-yellow-50 hover:text-yellow-900 transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-3 group" data-aos="fade-up" data-aos-delay="100">
                <Car className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
                Book Now
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
          </div>
        </section>

      </div>
    </PageTransition>
  )
} 