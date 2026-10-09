import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO } from '../menuData';

export default function LocationContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  const whatsappChatUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${CAFE_INFO.name}! I'd like to ask a question or reserve a cozy table.`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6EDE2] relative border-t border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="font-handwriting text-xl sm:text-2xl text-coffee font-bold block">
            find your seat ☕
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkBrown tracking-tight">
            Visit Us or Say Hello
          </h2>
          <p className="text-darkBrown/75 text-sm sm:text-base leading-relaxed">
            Drop by for a quiet coffee, book a party table, or shoot us a quick text on WhatsApp.
          </p>
        </div>

        {/* Content Grid: Contact Details & Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Info Cards & Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-cream rounded-3xl p-6 sm:p-8 border border-beige/60 shadow-warm space-y-5">
              <h3 className="font-serif font-bold text-xl text-darkBrown">
                Cafe Information
              </h3>

              <div className="space-y-4 text-sm text-darkBrown/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-cream-dark flex items-center justify-center shrink-0 text-coffee border border-beige/50">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-darkBrown">Address</h4>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=The+Sangameshwaram+Cafe+VIIT+College+Yashodhan+Society+Kapil+Nagar+Kondhwa+Budruk+Pune+Maharashtra+411048"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-darkBrown/70 hover:text-coffee transition-colors mt-0.5 block leading-relaxed"
                    >
                      The Sangameshwaram Cafe<br />
                      VIIT College, Yashodhan Society,<br />
                      Kapil Nagar, Kondhwa Budruk,<br />
                      Pune, Maharashtra 411048
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-cream-dark flex items-center justify-center shrink-0 text-coffee border border-beige/50">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-darkBrown">Opening Hours</h4>
                    <p className="text-xs sm:text-sm text-darkBrown/70 mt-0.5">
                      Mon – Fri: {CAFE_INFO.openingHours.weekdays}
                    </p>
                    <p className="text-xs sm:text-sm text-darkBrown/70">
                      Sat – Sun: {CAFE_INFO.openingHours.weekends}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-cream-dark flex items-center justify-center shrink-0 text-coffee border border-beige/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-darkBrown">Call or Message</h4>
                    <p className="text-xs sm:text-sm text-darkBrown/70 mt-0.5">
                      {CAFE_INFO.phone}
                    </p>
                    <p className="text-xs sm:text-sm text-darkBrown/70">
                      {CAFE_INFO.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-sm flex items-center justify-center gap-2.5 shadow-warm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-cream rounded-3xl p-6 sm:p-8 border border-beige/60 shadow-warm">
              <h3 className="font-serif font-bold text-xl text-darkBrown mb-1">
                Drop a Note
              </h3>
              <p className="text-xs text-darkBrown/70 mb-5">
                Have a query or feedback? Leave your message below.
              </p>

              {submitted ? (
                <div className="p-4 rounded-2xl bg-sage/20 border border-sage text-sage-dark flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-sage-dark" />
                  <div>
                    <p className="font-bold text-sm">Thank you, bestie!</p>
                    <p className="text-xs">We received your note and will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-darkBrown mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-4 py-2.5 rounded-2xl bg-cream-light border border-beige/80 text-sm text-darkBrown focus:outline-none focus:ring-2 focus:ring-darkBrown/30 placeholder:text-darkBrown/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-darkBrown mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-2xl bg-cream-light border border-beige/80 text-sm text-darkBrown focus:outline-none focus:ring-2 focus:ring-darkBrown/30 placeholder:text-darkBrown/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-darkBrown mb-1">
                      Message or Table Request
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Can I reserve a corner table for 4 this Saturday?"
                      className="w-full px-4 py-2.5 rounded-2xl bg-cream-light border border-beige/80 text-sm text-darkBrown focus:outline-none focus:ring-2 focus:ring-darkBrown/30 placeholder:text-darkBrown/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-darkBrown text-cream font-medium text-sm hover:bg-coffee shadow-warm hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-beige" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed / Visual Map */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="bg-cream rounded-3xl p-3 sm:p-4 border border-beige/60 shadow-warm flex-1 flex flex-col min-h-[380px]">
              <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden border border-beige/40">
                <iframe
                  title="The Sangameshwar Cafe Location Map"
                  src="https://maps.google.com/maps?q=The+Sangameshwaram+Cafe+VIIT+College+Yashodhan+Society+Kapil+Nagar+Kondhwa+Budruk+Pune+Maharashtra+411048&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[350px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Micro banner below map */}
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-darkBrown/75">
                <span className="font-medium">📍 Landmark: Near VIIT College, Kondhwa Budruk</span>
                <span className="font-handwriting text-sm text-coffee font-bold">free Wi-Fi & parking available ☕</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
