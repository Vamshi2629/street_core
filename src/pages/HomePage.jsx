import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products, testimonials } from '../data/products'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ProductCard from '../components/ProductCard'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
}

export default function HomePage() {
    useScrollReveal()

    return (
        <main>
            {/* ── Hero ── */}
            <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
                {/* Background decorative circles */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange/10 blur-3xl pointer-events-none" />

                <div className="section-padding max-w-7xl mx-auto w-full pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Text */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6"
                    >
                        <motion.span
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 text-orange font-semibold text-sm uppercase tracking-widest"
                        >
                            <span className="w-8 h-px bg-orange" />
                            New Collection 2026
                        </motion.span>
                        <motion.h1
                            variants={fadeUp}
                            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.08]"
                        >
                            Redefine
                            <br />
                            <span className="text-gradient">Your Style</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="text-gray-500 text-lg leading-relaxed max-w-md"
                        >
                            Curated pieces for the modern wardrobe. Premium materials, timeless silhouettes, and effortless elegance — every day.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            <Link to="/collections" id="shop-now-btn">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="btn-primary text-base"
                                >
                                    Shop Now
                                    <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.button>
                            </Link>
                            <Link to="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="btn-outline text-base"
                                >
                                    Our Story
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={fadeUp} className="flex gap-8 pt-4 border-t border-gray-200 mt-2">
                            {[['10K+', 'Happy Customers'], ['100%', 'Premium Quality'], ['Free', 'Worldwide Shipping']].map(([val, label]) => (
                                <div key={label}>
                                    <p className="font-display font-bold text-2xl text-orange">{val}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Hero Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                        className="relative hidden lg:grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <div className="rounded-3xl overflow-hidden h-72 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
                                    alt="Fashion model"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-3xl overflow-hidden h-40 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80"
                                    alt="Fashion detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="rounded-3xl overflow-hidden h-40 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1558171813-e7b9e4b70d3e?w=500&q=80"
                                    alt="Fashion accessories"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-3xl overflow-hidden h-72 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80"
                                    alt="Fashion model 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl px-5 py-4 z-10"
                        >
                            <p className="text-xs text-gray-400 font-medium">This Season</p>
                            <p className="font-display font-bold text-gray-900">SS 2026</p>
                            <div className="flex gap-1 mt-2">
                                {['#1a1a1a', '#F2B949', '#EDD377'].map(c => (
                                    <div key={c} style={{ background: c }} className="w-5 h-5 rounded-full border-2 border-white shadow-sm" />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
                </motion.div>
            </section>

            {/* ── Category Tiles ── */}
            <section className="section-padding max-w-7xl mx-auto py-20">
                <div className="text-center mb-12 reveal">
                    <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Shop by Category</p>
                    <h2 className="font-display font-bold text-4xl text-gray-900">Find Your Look</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { name: 'T-Shirts', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', cat: 'T-Shirts' },
                        { name: 'Hoodies', img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80', cat: 'Hoodies' },
                        { name: 'Jackets', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80', cat: 'Jackets' },
                    ].map((item, i) => (
                        <Link
                            key={item.name}
                            to={`/collections?cat=${item.cat}`}
                            className={`reveal reveal-delay-${i + 1} group relative rounded-3xl overflow-hidden h-80 block`}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-white font-display font-bold text-2xl">{item.name}</h3>
                                <p className="text-white/70 text-sm mt-1 group-hover:text-gold transition-colors">Shop Collection →</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Featured Products ── */}
            <section className="bg-white py-20">
                <div className="section-padding max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div className="reveal">
                            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Curated For You</p>
                            <h2 className="font-display font-bold text-4xl text-gray-900">Featured Pieces</h2>
                        </div>
                        <Link to="/collections" className="reveal hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-orange transition-colors">
                            View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.slice(0, 3).map((p, i) => (
                            <div key={p.id} className={`reveal reveal-delay-${i + 1}`}>
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Brand Banner ── */}
            <section className="relative py-32 overflow-hidden bg-gray-950">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80"
                        alt="Fashion banner"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative section-padding max-w-7xl mx-auto text-center">
                    <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4 reveal">Premium Quality</p>
                    <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight reveal">
                        Crafted for the
                        <br />
                        <em className="not-italic text-gradient">Effortlessly Bold</em>
                    </h2>
                    <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto reveal">
                        Every StreetCore piece is designed with intent — where luxury meets everyday life.
                    </p>
                    <Link to="/collections">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-primary mt-8 inline-block reveal"
                        >
                            Explore Collection
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="section-padding max-w-7xl mx-auto py-20">
                <div className="text-center mb-12 reveal">
                    <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">What They Say</p>
                    <h2 className="font-display font-bold text-4xl text-gray-900">Loved by Many</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={t.id} className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}>
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                                    <p className="text-gray-400 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Newsletter ── */}
            <section className="bg-gradient-to-br from-[#FFF8E7] to-[#FFF3DC] py-20">
                <div className="section-padding max-w-2xl mx-auto text-center">
                    <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3 reveal">Stay in the Loop</p>
                    <h2 className="font-display font-bold text-4xl text-gray-900 mb-3 reveal">Get Early Access</h2>
                    <p className="text-gray-500 mb-8 reveal">Be the first to know about new drops, exclusive deals, and style guides from StreetCore.</p>
                    <form className="flex flex-col sm:flex-row gap-3 justify-center reveal" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-white border border-gray-200 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors shadow-sm"
                        />
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="btn-primary whitespace-nowrap"
                        >
                            Subscribe
                        </motion.button>
                    </form>
                </div>
            </section>
        </main>
    )
}
