import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('sent');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    I am currently available for new opportunities in Accounting and Finance. 
                    Feel free to reach out via phone, email, or LinkedIn.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Phone</h4>
                            <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Email</h4>
                            <p className="text-slate-600">{CONTACT_INFO.email}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Location</h4>
                            <p className="text-slate-600">{CONTACT_INFO.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mock Form */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                        <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Hello, I'd like to discuss..."></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={formStatus !== 'idle'}
                        className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                            formStatus === 'sent' ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900 hover:bg-slate-800'
                        }`}
                    >
                        {formStatus === 'idle' && <>Send Message <Send size={18} /></>}
                        {formStatus === 'sending' && 'Sending...'}
                        {formStatus === 'sent' && 'Message Sent!'}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
