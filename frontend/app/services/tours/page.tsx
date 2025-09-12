import { PageTransition } from "@/components/page-transition"
import { MapPin, Calendar, Users, Star, Globe, Heart, Target, Zap, Camera, Plane, Mountain, Car, ArrowRight, MessageCircle, ExternalLink } from "lucide-react"
import { tours } from "@/data/tours"

export default function ToursPage() {
  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
            alt="Tour Packages"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Tour Packages</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700 drop-shadow-lg">Explore our curated tour packages for unforgettable experiences.</p>
          </div>
        </section>
        
        {/* Tour Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-7xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Why Choose Our Tours?</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Unforgettable experiences with professional guidance</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-16">
              {/* Expert Guides */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Expert Guides</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Professional and experienced tour guides</p>
              </div>

              {/* Custom Packages */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700 " />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Custom Packages</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Tailored experiences for your preferences</p>
              </div>

              {/* Quality Service - Spans both columns on mobile */}
              <div className="col-span-2 md:col-span-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer" data-aos="zoom-in" data-aos-delay="300">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700 " />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Quality Service</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Premium service and unforgettable memories</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white animate-fade-in-delay">
          <div className="w-full max-w-7xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Popular Tour Packages</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Discover our most popular tour experiences</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="relative h-48 md:h-96 md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400 hover:brightness-110 hover:saturate-150"
                  style={{ backgroundImage: `url('${tour.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-blue-900/60 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                    <Globe className="w-16 h-16 text-blue-400/80 group-hover:text-blue-300 " />
                  </div>
                  <div className="relative z-10 p-3 md:p-6 flex flex-col justify-end h-full">
                    <h3 className="text-sm md:text-xl font-extrabold text-white mb-1 md:mb-2 drop-shadow-lg transition-all duration-700 group-hover:text-blue-200 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                      {tour.title}
                    </h3>
                    <p className="text-white text-xs md:text-sm mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">{tour.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-blue-600/80 text-white text-xs px-2 py-1 rounded-full">{tour.duration}</span>
                      <span className="bg-blue-400/80 text-white text-xs px-2 py-1 rounded-full">{tour.category}</span>
                      <span className="bg-blue-800/80 text-white text-xs px-2 py-1 rounded-full">{tour.location}</span>
                      <span className="bg-blue-900/80 text-white text-xs px-2 py-1 rounded-full">{tour.availability}</span>
                      {tour.price && <span className="bg-blue-700/80 text-white text-xs px-2 py-1 rounded-full">{tour.price}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Features Section */}
        <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200 animate-fade-in-delay">
          <div className="w-full max-w-7xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Tour Features</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">What makes our tours special</p>
            </div>

            <div className="grid grid-cols-2 gap-12">
              {/* Tour Features */}
              <div className="space-y-8" data-aos="fade-right">
                <h3 className="text-2xl font-bold text-blue-700 mb-6 transition-all duration-700 hover:text-blue-800 hover:scale-105 cursor-default">What's Included</h3>
                
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
<Plane className="w-6 h-6 text-blue-600 group-hover:text-blue-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Transportation</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Comfortable and reliable transportation throughout your tour.</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                      <Camera className="w-6 h-6 text-blue-600 group-hover:text-blue-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Photo Opportunities</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Professional photography and stunning photo locations.</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full transition-all duration-500 group-hover:bg-purple-200 group-hover:scale-110">
                      <Heart className="w-6 h-6 text-purple-600 group-hover:text-purple-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Personalized Service</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Tailored experiences to match your interests and preferences.</p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full transition-all duration-500 group-hover:bg-orange-200 group-hover:scale-110">
                      <Globe className="w-6 h-6 text-orange-600 group-hover:text-orange-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Local Expertise</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Insider knowledge and authentic local experiences.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Benefits */}
              <div className="space-y-8" data-aos="fade-left">
                <h3 className="text-2xl font-bold text-blue-700 mb-6 transition-all duration-700 hover:text-blue-800 hover:scale-105 cursor-default">Why Choose Our Tours?</h3>
                
                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
<Star className="w-6 h-6 text-blue-600 group-hover:text-blue-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Premium Quality</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">High-quality service and unforgettable experiences.</p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                      <Zap className="w-6 h-6 text-blue-600 group-hover:text-blue-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Flexible Options</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Customizable packages to suit your schedule and preferences.</p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full transition-all duration-500 group-hover:bg-purple-200 group-hover:scale-110">
                      <Users className="w-6 h-6 text-purple-600 group-hover:text-purple-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Small Groups</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Intimate group sizes for personalized attention.</p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full transition-all duration-500 group-hover:bg-orange-200 group-hover:scale-110">
                      <Car className="w-6 h-6 text-orange-600 group-hover:text-orange-700 " />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Comfortable Travel</h4>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Comfortable vehicles and well-planned itineraries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-center rounded-2xl mt-16 animate-fade-in-up relative overflow-hidden" data-aos="fade-up">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default" data-aos="fade-up">Ready for Your Next Adventure?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 transition-all duration-700" data-aos="fade-up" data-aos-delay="100">Book your unforgettable tour experience with us today or contact our team for a custom package.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <a href="/services/tours/hotels/booking" className="inline-flex px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-2xl hover:bg-blue-50 hover:text-blue-800 transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl items-center justify-center gap-3 group">
                <Globe className="w-6 h-6 group-hover:scale-110 group-hover: transition-all duration-300" />
                Book Now
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
              <a href="https://wa.me/256748840180" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-2xl hover:bg-white hover:text-blue-700 transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl items-center justify-center gap-3 group">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 group-hover: transition-all duration-300" />
                WhatsApp Us
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
} 