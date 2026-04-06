import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactInfo = [
    { icon: '📍', title: 'Visit Us', detail: '12 Rue du Fashion, Milan, Italy' },
    { icon: '✉️', title: 'Email Us', detail: 'vamshiboda948@gmail.com' },
]

export default function ContactPage() {
    useScrollReveal()
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <main className="pt-24 pb-20">
            {/* Header */}
            <div className="bg-hero section-padding max-w-7xl mx-auto py-16 text-center">
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">
                    Get in Touch
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display font-bold text-5xl text-gray-900">
                    We'd Love to Hear From You
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-500 mt-3 text-base max-w-md mx-auto">
                    Whether it's about an order, a collaboration, or just to say hello — our team is here for you.
                </motion.p>
            </div>

            <div className="section-padding max-w-7xl mx-auto mt-16 grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="reveal">
                        <h2 className="font-display font-bold text-3xl text-gray-900 mb-2">Let's Connect</h2>
                        <p className="text-gray-500 leading-relaxed">
                            We typically respond within 24 hours. For urgent inquiries, feel free to call or reach us via email.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {contactInfo.map((info, i) => (
                            <div key={info.title} className={`reveal reveal-delay-${i + 1} flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow`}>
                                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{info.title}</p>
                                    <p className="text-gray-500 text-sm mt-0.5">{info.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="reveal bg-gray-950 rounded-2xl p-6">
                        <p className="font-semibold text-white text-sm mb-4">Follow Our Journey</p>
                        <div className="flex gap-3">
                            {['Instagram', 'Twitter', 'Pinterest', 'TikTok'].map((s) => (
                                <button key={s} className="bg-gray-800 hover:bg-orange text-gray-400 hover:text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-200">
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="reveal">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl shadow-sm p-12 text-center"
                        >
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-500 text-sm">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                            <button
                                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                                className="btn-primary mt-6"
                            >
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl shadow-sm p-8 space-y-5"
                        >
                            <h3 className="font-display font-bold text-2xl text-gray-900">Send a Message</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        id="name" name="name" type="text" required
                                        value={formData.name} onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        id="email" name="email" type="email" required
                                        value={formData.email} onChange={handleChange}
                                        placeholder="Your email"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <select
                                    id="subject" name="subject" required
                                    value={formData.subject} onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gold transition-colors cursor-pointer"
                                >
                                    <option value="">Select a subject...</option>
                                    <option>Order Inquiry</option>
                                    <option>Returns & Exchanges</option>
                                    <option>Partnership / Collaboration</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message" name="message" required rows={5}
                                    value={formData.message} onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
                                />
                            </div>
                            <motion.button
                                id="contact-submit-btn"
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-primary w-full text-center flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </motion.button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    )
}
