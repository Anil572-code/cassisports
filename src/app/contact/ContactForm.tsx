"use client";
import { useState, FormEvent } from "react";

interface FormData { name: string; email: string; phone: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; phone?: string; subject?: string; message?: string; }

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (d: FormData): FormErrors => {
    const e: FormErrors = {};
    if (!d.name.trim()) e.name = "Full name is required.";
    if (!d.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Invalid email address.";
    if (d.phone && !/^[+]?[\d\s\-(]{7,15}$/.test(d.phone)) e.phone = "Invalid phone number.";
    if (!d.subject) e.subject = "Please select a subject.";
    if (!d.message.trim()) e.message = "Message is required.";
    else if (d.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
      <p className="text-gray-600 mb-6">Thank you! We will get back to you within 24 hours.</p>
      <button onClick={() => { setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); setIsSubmitted(false); }} className="btn-primary">Send Another Message</button>
    </div>
  );

  const inputClass = (field: keyof FormErrors) => `w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${errors[field] ? "border-red-400 focus:ring-red-200 bg-red-50" : "border-gray-200 focus:ring-brand-orange/20 focus:border-brand-orange bg-white"}`;
  const ErrorMsg = ({ field }: { field: keyof FormErrors }) => errors[field] ? <p className="mt-1.5 text-sm text-red-600">{errors[field]}</p> : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-brand-orange">*</span></label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={inputClass("name")} />
        <ErrorMsg field="name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email <span className="text-brand-orange">*</span></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClass("email")} />
          <ErrorMsg field="email" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone <span className="text-gray-400 text-xs">(optional)</span></label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass("phone")} />
          <ErrorMsg field="phone" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">Subject <span className="text-brand-orange">*</span></label>
        <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass("subject")}>
          <option value="">Select a subject...</option>
          <option value="facility-booking">Facility Booking</option>
          <option value="lounge-reservation">Lounge Reservation</option>
          <option value="membership">Membership Enquiry</option>
          <option value="corporate">Corporate / Group Booking</option>
          <option value="coaching">Coaching / Classes</option>
          <option value="general">General Enquiry</option>
          <option value="feedback">Feedback</option>
        </select>
        <ErrorMsg field="subject" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message <span className="text-brand-orange">*</span></label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us what you need..." className={`${inputClass("message")} resize-none`} />
        <ErrorMsg field="message" />
      </div>
      <button type="submit" disabled={isSubmitting} className={`w-full btn-primary py-4 text-base ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}`}>
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>
            Sending...
          </span>
        ) : "Send Message"}
      </button>
    </form>
  );
}
