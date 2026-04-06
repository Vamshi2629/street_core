import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const values = [
    {
        icon: '♻️',
        title: 'Sustainable by Design',
        desc: 'Every piece is crafted with the environment in mind — from organic fabrics to carbon-neutral shipping.',
    },
    {
        icon: '🧵',
        title: 'Handcrafted Quality',
        desc: 'Each garment is cut and sewn by skilled artisans who put love and precision into every stitch.',
    },
    {
        icon: '🌍',
        title: 'Global Community',
        desc: 'From Tokyo to New York, StreetCore is worn by those who believe style is a form of self-expression.',
    },
]

const team = [
    { name: 'Aria Chen', role: 'Founder & Creative Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { name: 'James Moreau', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Priya Nair', role: 'Sustainability Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
]

export default function AboutPage() {
    useScrollReveal()

    return (
        <main className="pt-24 pb-20">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-gray-950">
                <div className="absolute inset-0 opacity-25">
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80"
                        alt="About StreetCore"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative section-padding max-w-7xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-gold font-semibold text-sm uppercase tracking-widest mb-3"
                    >
                        Our Story
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display font-bold text-5xl md:text-6xl text-white leading-tight max-w-xl"
                    >
                        Fashion with a Purpose
                    </motion.h1>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding max-w-7xl mx-auto py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-4">Where It Began</p>
                        <h2 className="font-display font-bold text-4xl text-gray-900 leading-tight mb-6">
                            Born from a love of<br />
                            <em className="not-italic text-gradient">timeless elegance</em>
                        </h2>
                        <div className="space-y-4 text-gray-500 leading-relaxed">
                            <p>
                                StreetCore was founded in 2021 with a single belief: that clothing should feel as good as it looks.
                                We started in a small studio in Milan, obsessing over fabric quality, silhouettes, and the
                                intersection of minimal design with maximum impact.
                            </p>
                            <p>
                                What began as a small capsule collection has grown into a global community of modern dressers
                                who refuse to compromise on quality, sustainability, or style. Every StreetCore piece is a statement
                                — understated yet powerful.
                            </p>
                            <p>
                                We work directly with certified sustainable mills and ethical manufacturers, ensuring that your
                                purchase makes the world a slightly better place.
                            </p>
                        </div>
                    </div>
                    <div className="reveal grid grid-cols-2 gap-4">
                        <div className="rounded-3xl overflow-hidden h-72 shadow-lg">
                            <img src="https://images.unsplash.com/photo-1558171813-e7b9e4b70d3e?w=400&q=80" alt="Studio" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-3xl overflow-hidden h-72 shadow-lg mt-8">
                            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" alt="Craftsmanship" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-950 py-20">
                <div className="section-padding max-w-7xl mx-auto">
                    <div className="text-center mb-14 reveal">
                        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">What We Stand For</p>
                        <h2 className="font-display font-bold text-4xl text-white">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={v.title} className={`reveal reveal-delay-${i + 1} bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors`}>
                                <div className="text-4xl mb-4">{v.icon}</div>
                                <h3 className="font-display font-bold text-xl text-white mb-3">{v.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-gradient-to-r from-[#FFF8E7] to-[#FFF3DC] py-16">
                <div className="section-padding max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[['2021', 'Founded'], ['10K+', 'Customers'], ['50+', 'Countries'], ['100%', 'Ethical']].map(([val, label], i) => (
                        <div key={label} className={`reveal reveal-delay-${i + 1}`}>
                            <p className="font-display font-bold text-4xl text-orange">{val}</p>
                            <p className="text-gray-500 text-sm mt-1 font-medium">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="section-padding max-w-7xl mx-auto py-20">
                <div className="text-center mb-14 reveal">
                    <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">The People Behind</p>
                    <h2 className="font-display font-bold text-4xl text-gray-900">Meet the Team</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className={`reveal reveal-delay-${i + 1} text-center`}
                        >
                            <div className="rounded-3xl overflow-hidden h-72 mb-4 shadow-md">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-gray-900">{member.name}</h3>
                            <p className="text-orange text-sm mt-1">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding max-w-7xl mx-auto text-center py-4">
                <div className="bg-gray-950 rounded-3xl p-14 reveal">
                    <h2 className="font-display font-bold text-4xl text-white mb-4">Ready to Elevate Your Wardrobe?</h2>
                    <p className="text-gray-400 mb-8">Explore our latest pieces — crafted for those who appreciate the art of dressing well.</p>
                    <Link to="/collections">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-primary">
                            Shop the Collection
                        </motion.button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
