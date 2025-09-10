"use client";
import { PageTransition } from "@/components/page-transition"
import { Car, Plane, Users, Star, Globe, Heart, Target, Zap, Camera, MapPin, Calendar, Shield, Truck, Navigation, ArrowRight, MessageCircle, ExternalLink, Mail } from "lucide-react"
import { useState } from "react";

export default function TransportPage() {
  const destinationMedia = {
    kampala: {
      images: [
        "https://media.gettyimages.com/id/1138570782/photo/kampala-cityscape.jpg?s=612x612&w=0&k=20&c=6Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw=",
        "https://media.gettyimages.com/id/1138570782/photo/kampala-cityscape.jpg?s=612x612&w=0&k=20&c=6Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw=",
      ],
      videos: [
        "https://www.youtube.com/embed/ppqfLQxt2jQ",
        "https://www.youtube.com/embed/ayGnhrrFycE",
        "https://www.youtube.com/embed/NfPG43qIaUA"
      ]
    },
    entebbe: {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Entebbe_Airport.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Entebbe_International_Airport_at_sunset.jpg"
      ],
      videos: [
        "https://www.youtube.com/embed/xB81Xki5mhI",
        "https://www.youtube.com/embed/U-L_GMLkGj0"
      ]
    },
    parks: {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Murchison_Falls_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Queen_Elizabeth_National_Park_Uganda.jpg"
      ],
      videos: [
        "https://www.youtube.com/embed/UcKgDepi338",
        "https://www.youtube.com/embed/OVRYJcJLJW4",
        "https://www.youtube.com/embed/P7XYwVIuHhk"
      ]
    },
    towns: {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Red_pog.svg", // Jinja
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg" // Gulu, Mbarara (generic)
      ],
      videos: [
        "https://www.youtube.com/embed/YlzYwCkx4Qs" // Gulu
      ]
    },
    custom: {
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg"
      ],
      videos: [
        "https://www.youtube.com/embed/366ooN49spY" // Wonders of Uganda
      ]
    }
  };

  const [expanded, setExpanded] = useState<string | null>(null);

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
              <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Why Choose Our Transport?</h2>
              <p className="text-xl text-muted-foreground transition-all duration-700">Reliable and comfortable transport solutions</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-16">
              {/* Professional Drivers */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700 animate-bounce" />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Professional Drivers</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Experienced and licensed drivers for your safety</p>
              </div>

              {/* Reliable Service */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700 animate-bounce" />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Reliable Service</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Punctual and dependable transport solutions</p>
              </div>

              {/* Quality Vehicles - Spans both columns on mobile */}
              <div className="col-span-2 md:col-span-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer" data-aos="zoom-in" data-aos-delay="300">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Car className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700 animate-bounce" />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Quality Vehicles</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Well-maintained and comfortable vehicles</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vehicle Types and Destinations Section */}
        <section className="py-16 bg-blue-50 animate-fade-in-delay">
          <div className="w-full max-w-5xl mx-auto px-6 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-blue-700 transition-all duration-700 hover:text-blue-800 hover:scale-105 cursor-default">Our Vehicles & Destinations</h2>
<p className="text-sm md:text-lg lg:text-xl text-blue-900 transition-all duration-700">Choose from a range of vehicles and destinations to suit your needs</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12">
              {/* Vehicle Types */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border-2 border-blue-300 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2"><Car className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blue-500 animate-bounce" /> <span className="text-sm md:text-base lg:text-xl">Vehicle Types</span></h3>
<ul className="text-sm md:text-base lg:text-lg text-blue-900 space-y-2 md:space-y-3 font-semibold w-full">
                  <li className="flex items-center group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <span className="flex items-center gap-1 md:gap-2"><Car className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> <span className="text-xs md:text-sm lg:text-base">SUVs (4x4, luxury, family)</span></span>
                  </li>
                  <li className="flex items-center group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <span className="flex items-center gap-1 md:gap-2"><Car className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> <span className="text-xs md:text-sm lg:text-base">Saloon Cars (sedan, executive, economy)</span></span>
                  </li>
                  <li className="flex items-center group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <span className="flex items-center gap-1 md:gap-2"><Truck className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> <span className="text-xs md:text-sm lg:text-base">Vans & Minibuses (group travel, airport shuttles)</span></span>
                  </li>
                  <li className="flex items-center group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <span className="flex items-center gap-1 md:gap-2"><Heart className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> <span className="text-xs md:text-sm lg:text-base">Luxury Cars (weddings, VIP events)</span></span>
                  </li>
                  <li className="flex items-center group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <span className="flex items-center gap-1 md:gap-2"><Truck className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> <span className="text-xs md:text-sm lg:text-base">Trucks & Pickups (cargo, moving)</span></span>
                  </li>
                </ul>
              </div>
              {/* Destinations */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border-2 border-yellow-300 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-yellow-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2"><MapPin className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-yellow-500 animate-bounce" /> <span className="text-sm md:text-base lg:text-xl">Destinations</span></h3>
                <ul className="text-sm md:text-base lg:text-lg text-yellow-900 space-y-2 md:space-y-3 font-semibold w-full">
                  <li className="group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <button
                      onClick={() => setExpanded(expanded === "kampala" ? null : "kampala")}
                      className="flex items-center gap-1 md:gap-2 text-yellow-700 hover:text-yellow-900 underline underline-offset-2 font-bold transition-all duration-300 group-hover/item:text-yellow-900 w-full text-left text-xs md:text-sm lg:text-base"
                    >
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> Kampala City & Suburbs
                    </button>
                    {expanded === "kampala" && (
                      <div className="mt-4 space-y-2">
                        {destinationMedia.kampala.images.map((src, i) => (
                          <img key={i} src={src} alt="Kampala" className="rounded-lg w-full max-w-xs" />
                        ))}
                        {destinationMedia.kampala.videos.map((url, i) => (
                          <iframe
                            key={i}
                            width="320"
                            height="180"
                            src={url}
                            title="Kampala Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </li>
                  <li className="group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <button
                      onClick={() => setExpanded(expanded === "entebbe" ? null : "entebbe")}
                      className="flex items-center gap-1 md:gap-2 text-yellow-700 hover:text-yellow-900 underline underline-offset-2 font-bold transition-all duration-300 group-hover/item:text-yellow-900 w-full text-left text-xs md:text-sm lg:text-base"
                    >
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> Entebbe Airport & Surroundings
                    </button>
                    {expanded === "entebbe" && (
                      <div className="mt-4 space-y-2">
                        {destinationMedia.entebbe.images.map((src, i) => (
                          <img key={i} src={src} alt="Entebbe" className="rounded-lg w-full max-w-xs" />
                        ))}
                        {destinationMedia.entebbe.videos.map((url, i) => (
                          <iframe
                            key={i}
                            width="320"
                            height="180"
                            src={url}
                            title="Entebbe Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </li>
                  <li className="group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <button
                      onClick={() => setExpanded(expanded === "parks" ? null : "parks")}
                      className="flex items-center gap-1 md:gap-2 text-yellow-700 hover:text-yellow-900 underline underline-offset-2 font-bold transition-all duration-300 group-hover/item:text-yellow-900 w-full text-left text-xs md:text-sm lg:text-base"
                    >
                      <Globe className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> National Parks & Safari Destinations
                    </button>
                    {expanded === "parks" && (
                      <div className="mt-4 space-y-2">
                        {destinationMedia.parks.images.map((src, i) => (
                          <img key={i} src={src} alt="Parks" className="rounded-lg w-full max-w-xs" />
                        ))}
                        {destinationMedia.parks.videos.map((url, i) => (
                          <iframe
                            key={i}
                            width="320"
                            height="180"
                            src={url}
                            title="Parks Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </li>
                  <li className="group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <button
                      onClick={() => setExpanded(expanded === "towns" ? null : "towns")}
                      className="flex items-center gap-1 md:gap-2 text-yellow-700 hover:text-yellow-900 underline underline-offset-2 font-bold transition-all duration-300 group-hover/item:text-yellow-900 w-full text-left text-xs md:text-sm lg:text-base"
                    >
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> Major Towns & Cities (Jinja, Gulu, Mbarara, etc.)
                    </button>
                    {expanded === "towns" && (
                      <div className="mt-4 space-y-2">
                        {destinationMedia.towns.images.map((src, i) => (
                          <img key={i} src={src} alt="Towns" className="rounded-lg w-full max-w-xs" />
                        ))}
                        {destinationMedia.towns.videos.map((url, i) => (
                          <iframe
                            key={i}
                            width="320"
                            height="180"
                            src={url}
                            title="Towns Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </li>
                  <li className="group/item hover:bg-yellow-100 rounded-lg px-2 md:px-3 py-1 md:py-2 transition-all duration-300">
                    <button
                      onClick={() => setExpanded(expanded === "custom" ? null : "custom")}
                      className="flex items-center gap-1 md:gap-2 text-yellow-700 hover:text-yellow-900 underline underline-offset-2 font-bold transition-all duration-300 group-hover/item:text-yellow-900 w-full text-left text-xs md:text-sm lg:text-base"
                    >
                      <Target className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-600 group-hover/item:scale-110 transition-transform" /> Custom Destinations (on request)
                    </button>
                    {expanded === "custom" && (
                      <div className="mt-4 space-y-2">
                        {destinationMedia.custom.images.map((src, i) => (
                          <img key={i} src={src} alt="Custom" className="rounded-lg w-full max-w-xs" />
                        ))}
                        {destinationMedia.custom.videos.map((url, i) => (
                          <iframe
                            key={i}
                            width="320"
                            height="180"
                            src={url}
                            title="Custom Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </li>
                </ul>
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-yellow-700 hover:scale-105 cursor-default" data-aos="fade-up">Need a Ride?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 transition-all duration-700" data-aos="fade-up" data-aos-delay="100">Book your car hire or transport solution now, or contact us for a custom quote.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/services/tours/transport/suvs" className="px-8 py-4 bg-white text-yellow-800 font-bold rounded-full shadow-2xl hover:bg-yellow-50 hover:text-yellow-900 transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-3 group">
                <Car className="w-6 h-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                Book Transport
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 animate-[fab-superbounce_2.2s_ease-in-out_infinite]" />
              </a>
              <a href="https://wa.me/256745174879" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-yellow-700 text-yellow-800 font-bold rounded-full shadow-2xl hover:bg-yellow-700 hover:text-white transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-3 group">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                WhatsApp Us
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
              <a href="mailto:info@aqr.co.ug" className="px-8 py-4 bg-yellow-700 text-white font-bold rounded-full shadow-2xl hover:bg-yellow-800 hover:text-white transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-3 group">
                <Mail className="w-6 h-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                Email Us
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
              <a href="/services/tours/transport/quote" className="px-8 py-4 bg-yellow-200 text-yellow-900 font-bold rounded-full shadow-2xl hover:bg-yellow-300 hover:text-yellow-900 transition-all duration-500 text-xl hover:scale-105 hover:shadow-3xl flex items-center justify-center gap-3 group">
                <Zap className="w-6 h-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                Request a Quote
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 animate-[fab-superbounce_2.2s_ease-in-out_infinite]" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  )
} 