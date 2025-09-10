"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Zap } from "lucide-react";

// Super interactive CSS keyframes
const superFabStyle = `
@keyframes fab-glow {
  0%, 100% { box-shadow: 0 0 0 0 #2046c8, 0 0 32px 8px #2046c8cc; }
  50% { box-shadow: 0 0 0 8px #2046c800, 0 0 48px 16px #2046c8cc; }
}
@keyframes fab-bounce {
  0%, 100% { transform: scale(1) translateY(0); }
  20% { transform: scale(1.08) translateY(-8px); }
  40% { transform: scale(0.98) translateY(2px); }
  60% { transform: scale(1.04) translateY(-4px); }
  80% { transform: scale(1.01) translateY(1px); }
}
@keyframes fab-confetti {
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-60px) scale(0.5); }
}
@keyframes fab-superbounce {
  0%, 100% { transform: translateY(0); }
  10% { transform: translateY(-30px); }
  20% { transform: translateY(0); }
  30% { transform: translateY(-20px); }
  40% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  60% { transform: translateY(0); }
  70% { transform: translateY(-8px); }
  80% { transform: translateY(0); }
  90% { transform: translateY(-4px); }
}
@keyframes fab-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
  20%, 40%, 60%, 80% { transform: translateX(6px); }
}
@keyframes fab-firework {
  0% { opacity: 1; transform: scale(1) translateY(0); }
  100% { opacity: 0; transform: scale(0.5) translateY(-60px); }
}
`;

function ConfettiBurst({ show }: { show: boolean }) {
  const confetti = Array.from({ length: 8 });
  return (
    <>
      {show && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-50">
          {confetti.map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `calc(50% + ${32 * Math.cos((i / 8) * 2 * Math.PI)}px)`,
                top: `calc(50% + ${32 * Math.sin((i / 8) * 2 * Math.PI)}px)`,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: ["#fbbf24", "#f87171", "#34d399", "#60a5fa", "#a78bfa", "#f472b6", "#facc15", "#38bdf8"][i],
                animation: "fab-confetti 0.9s cubic-bezier(.6,-0.28,.74,.05) forwards",
                animationDelay: `${i * 0.04}s`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

function FireworkBurst({ show }: { show: boolean }) {
  const sparks = Array.from({ length: 12 });
  return (
    <>
      {show && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-50">
          {sparks.map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `calc(50% + ${36 * Math.cos((i / 12) * 2 * Math.PI)}px)`,
                top: `calc(50% + ${36 * Math.sin((i / 12) * 2 * Math.PI)}px)`,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: ["#fff", "#fbbf24", "#f87171", "#34d399", "#60a5fa", "#a78bfa", "#f472b6", "#facc15", "#38bdf8", "#fde68a", "#fca5a5", "#a7f3d0"][i],
                animation: "fab-firework 1.1s cubic-bezier(.6,-0.28,.74,.05) forwards",
                animationDelay: `${i * 0.03}s`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

const ICONS = ["💬", "👋", "🤖", "🚗"];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning! Need help?";
  if (hour < 18) return "Good afternoon! Need help?";
  return "Good evening! Need help?";
}


export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [shake, setShake] = useState(false);
  const [iconIdx, setIconIdx] = useState(0);
  const bounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const shakeTimeout = useRef<NodeJS.Timeout | null>(null);
  const tooltipTimeout = useRef<NodeJS.Timeout | null>(null);
  const iconInterval = useRef<NodeJS.Timeout | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: "", email: "", contact: "", subject: "", message: "" });
  const [emailStatus, setEmailStatus] = useState<null | "success" | "error" | "sending">(null);

  // Add a single change handler for all fields
  const handleEmailFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailForm(f => ({ ...f, [name]: value }));
  };

  // Simplified animations - only show tooltip after 5s
  useEffect(() => {
    tooltipTimeout.current = setTimeout(() => setShowTooltip(true), 5000);
    return () => { if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current); };
  }, []);


  // Removed periodic bounce and shake animations for better performance
  // Removed icon cycling for better performance

  // Show actions on hover
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  // Ripple and firework on click
  // const handleClick = (e: React.MouseEvent) => {
  //   setRipple(true);
  //   setShowFirework(true);
  //   setTimeout(() => setRipple(false), 500);
  //   setTimeout(() => setShowFirework(false), 1200);
  // };

  // Email modal submit handler
  const handleEmailSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setEmailStatus("sending");
      // Simulate sending for static site
      setTimeout(() => {
        setEmailStatus("success");
        setEmailForm({ name: "", email: "", contact: "", subject: "", message: "" });
        setTimeout(() => setShowEmailModal(false), 2000);
      }, 1000);
    } catch (error) {
      console.error("Email submit error:", error);
      setEmailStatus("idle");
    }
  };

  // Simplified floating animation
  const bounceAnim = "animate-float";
  const shakeAnim = shake ? "animate-fab-shake" : "";

  return (
    <>
      <style>{superFabStyle}</style>
      {/* Email Modal */}
      {showEmailModal && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40"
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-modal-title"
        >
          <form onSubmit={handleEmailSubmit} className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in">
            <button 
              type="button" 
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" 
              onClick={() => setShowEmailModal(false)}
              aria-label="Close dialog"
            >
              &times;
            </button>
            <h2 id="email-modal-title" className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h2>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Your Name*" 
              className="w-full mb-3 px-4 py-2 border rounded" 
              value={emailForm.name} 
              onChange={handleEmailFormChange}
              aria-label="Your Name" 
            />
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Your Email" 
              className="w-full mb-3 px-4 py-2 border rounded" 
              value={emailForm.email} 
              onChange={handleEmailFormChange}
              aria-label="Your Email"
            />
            <input 
              type="text" 
              name="contact" 
              required
              placeholder="Phone or WhatsApp*" 
              className="w-full mb-3 px-4 py-2 border rounded" 
              value={emailForm.contact} 
              onChange={handleEmailFormChange}
              aria-label="Phone or WhatsApp"
            />
            <input 
              type="text" 
              name="subject" 
              required 
              placeholder="Subject" 
              className="w-full mb-3 px-4 py-2 border rounded" 
              value={emailForm.subject} 
              onChange={handleEmailFormChange}
              aria-label="Subject"
            />
            <textarea 
              name="message" 
              required 
              placeholder="Your Message" 
              className="w-full mb-3 px-4 py-2 border rounded min-h-[100px]" 
              value={emailForm.message} 
              onChange={handleEmailFormChange}
              aria-label="Your Message"
            />
            <Button type="submit" className="w-full bg-blue-800 text-white hover:bg-blue-900">Send Message</Button>
            {emailStatus === "sending" && <div className="mt-2 text-blue-600" aria-live="polite">Sending...</div>}
            {emailStatus === "success" && <div className="mt-2 text-blue-600" aria-live="polite">Message sent!</div>}
            {emailStatus === "error" && <div className="mt-2 text-red-600" aria-live="polite">Failed to send. Please try again.</div>}
          </form>
        </div>
      )}
      <div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2 md:gap-3 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Actions */}
        <div className={`flex flex-col items-end gap-2 md:gap-3 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}>
          {/* Request a Quote Button */}
          <div className="relative">
            <Button
              asChild
              className="bg-blue-500 text-white hover:bg-blue-600 font-bold px-4 md:px-6 py-2 rounded-lg shadow-lg text-sm md:text-base"
            >
              <a href="/about/contact">
                <Zap className="mr-1 md:mr-2 w-4 h-4" /> 
                <span className="hidden sm:inline">Request a Quote</span>
                <span className="sm:hidden">Quote</span>
              </a>
            </Button>
          </div>
          
          {/* WhatsApp Button */}
          <Button
            asChild
            variant="secondary"
            className="bg-blue-500 text-white hover:bg-blue-600 shadow-lg px-3 md:px-4 py-2 text-sm md:text-base"
          >
            <a href="https://wa.me/256745174879" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1 md:mr-2 w-4 h-4" /> 
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </Button>
          
          {/* Email Button */}
          <Button
            variant="secondary"
            className="bg-blue-800 text-white hover:bg-blue-900 shadow-lg px-3 md:px-4 py-2 text-sm md:text-base"
            onClick={() => setShowEmailModal(true)}
          >
            <Mail className="mr-1 md:mr-2 w-4 h-4" /> 
            <span className="hidden sm:inline">Email</span>
            <span className="sm:hidden">Mail</span>
          </Button>
        </div>
        {/* Main Circular Animated FAB */}
        <div className={`relative ${bounceAnim} ${shakeAnim}`}>
          <div 
            className="relative w-24 h-24 md:w-32 md:h-32 cursor-pointer group"
          >
            {/* Animated Concentric Circles */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-spin opacity-30"></div>
            <div className="absolute inset-3 rounded-full border-3 border-blue-300 animate-spin opacity-40" style={{animationDuration: '3s', animationDirection: 'reverse'}}></div>
            <div className="absolute inset-6 rounded-full border-2 border-blue-200 animate-spin opacity-50" style={{animationDuration: '2s'}}></div>
            
            {/* Center Blue Circle with animated gradient */}
            <div className="absolute inset-6 md:inset-8 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-xl group-hover:from-blue-600 group-hover:via-blue-700 group-hover:to-blue-800 transition-all duration-300 group-hover:scale-110 animate-pulse">
              <div className="text-center">
                <div className="text-white font-bold text-xs md:text-sm tracking-wide mb-1">START</div>
              </div>
            </div>
            
            {/* Moving pulse animation for the center */}
            <div className="absolute inset-6 md:inset-8 rounded-full bg-blue-500 animate-ping opacity-20"></div>
            
            {/* Additional rotating elements for more movement */}
            <div className="absolute inset-1 rounded-full border-2 border-blue-500 opacity-20 animate-spin" style={{animationDuration: '4s'}}></div>
            <div className="absolute inset-5 rounded-full border border-blue-400 opacity-30 animate-spin" style={{animationDuration: '1.5s', animationDirection: 'reverse'}}></div>

          </div>

        </div>
      </div>
    </>
  );
} 