import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products, categories } from '../data/products'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ProductCard from '../components/ProductCard'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rated']

export default function CollectionsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'All')
    const [sortBy, setSortBy] = useState('Featured')
    useScrollReveal()

    useEffect(() => {
        const cat = searchParams.get('cat')
        if (cat && categories.includes(cat)) setActiveCategory(cat)
    }, [searchParams])

    const setCategory = (cat) => {
        setActiveCategory(cat)
        if (cat === 'All') {
            setSearchParams({})
        } else {
            setSearchParams({ cat })
        }
    }

    const filtered = products.filter((p) =>
        activeCategory === 'All' ? true : p.category === activeCategory
    )

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price
        if (sortBy === 'Price: High to Low') return b.price - a.price
        if (sortBy === 'Best Rated') return b.rating - a.rating
        return 0
    })

    return (
        <main className="pt-24 pb-20">
            {/* Page Header */}
            <div className="bg-hero section-padding max-w-7xl mx-auto py-16 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-orange font-semibold text-sm uppercase tracking-widest mb-2"
                >
                    Browse All
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display font-bold text-5xl text-gray-900"
                >
                    Our Collections
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-500 mt-3 text-base"
                >
                    {filtered.length} pieces in {activeCategory === 'All' ? 'all categories' : activeCategory}
                </motion.p>
            </div>

            <div className="section-padding max-w-7xl mx-auto mt-10">
                {/* Filters & Sort */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                    {/* Category filters */}
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Category filters">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
                                onClick={() => setCategory(cat)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                                        ? 'bg-gray-900 text-white shadow-md'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                    {/* Sort */}
                    <select
                        id="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:border-gold cursor-pointer"
                    >
                        {sortOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                </div>

                {/* Product Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + sortBy}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {sorted.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <ProductCard product={p} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {sorted.length === 0 && (
                    <div className="text-center py-24">
                        <p className="font-display font-semibold text-2xl text-gray-400">No items found</p>
                        <button onClick={() => setCategory('All')} className="btn-primary mt-4">
                            View All
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}
