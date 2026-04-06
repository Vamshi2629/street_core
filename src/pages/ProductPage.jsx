import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const sizes = ['S', 'M', 'L', 'XL']

export default function ProductPage({ onCartOpen }) {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))
    const { addToCart } = useCart()
    const [selectedImg, setSelectedImg] = useState(0)
    const [selectedSize, setSelectedSize] = useState(null)
    const [added, setAdded] = useState(false)
    const [error, setError] = useState(false)

    if (!product) {
        return (
            <main className="pt-24 pb-20 text-center">
                <h1 className="font-display font-bold text-4xl text-gray-900 mt-20 mb-4">Product Not Found</h1>
                <Link to="/collections" className="btn-primary inline-block">Back to Collections</Link>
            </main>
        )
    }

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

    const handleAddToCart = () => {
        if (!selectedSize) {
            setError(true)
            setTimeout(() => setError(false), 2000)
            return
        }
        addToCart(product, selectedSize)
        setAdded(true)
        setTimeout(() => { setAdded(false); onCartOpen && onCartOpen() }, 800)
    }

    return (
        <main className="pt-24 pb-20">
            {/* Breadcrumb */}
            <div className="section-padding max-w-7xl mx-auto py-4">
                <nav className="flex items-center gap-2 text-sm text-gray-400">
                    <Link to="/" className="hover:text-orange transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/collections" className="hover:text-orange transition-colors">Collections</Link>
                    <span>/</span>
                    <span className="text-gray-700 font-medium">{product.name}</span>
                </nav>
            </div>

            {/* Product Detail */}
            <div className="section-padding max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mt-4">
                {/* Image Gallery */}
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/5] mb-4 shadow-lg">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedImg}
                                src={product.images[selectedImg]}
                                alt={product.name}
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {product.badge && (
                            <span className="absolute top-4 left-4 bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {product.badge}
                            </span>
                        )}
                    </div>
                    {/* Thumbnails */}
                    <div className="flex gap-3">
                        {product.images.map((img, i) => (
                            <button
                                key={i}
                                id={`thumb-${i}`}
                                onClick={() => setSelectedImg(i)}
                                className={`rounded-xl overflow-hidden w-24 h-24 border-2 transition-all duration-200 ${selectedImg === i ? 'border-orange shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">{product.category}</p>
                        <h1 className="font-display font-bold text-4xl text-gray-900 leading-tight">{product.name}</h1>
                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm">{product.rating} ({product.reviews} reviews)</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3">
                        <span className="font-display font-bold text-4xl text-gray-900">${product.price}</span>
                        <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                        <span className="bg-orange/10 text-orange text-sm font-bold px-3 py-1 rounded-full">-{discount}%</span>
                    </div>

                    <p className="text-gray-500 leading-relaxed">{product.description}</p>

                    {/* Colors */}
                    <div>
                        <p className="font-semibold text-gray-900 text-sm mb-2">Available Colors</p>
                        <div className="flex gap-2">
                            {product.colors.map((c) => (
                                <div
                                    key={c}
                                    style={{ background: c }}
                                    className="w-8 h-8 rounded-full border-2 border-white shadow cursor-pointer hover:scale-110 transition-transform"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <p className="font-semibold text-gray-900 text-sm">Select Size</p>
                            <button className="text-xs text-orange hover:underline">Size Guide</button>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            {sizes.map((size) => (
                                <motion.button
                                    key={size}
                                    id={`size-${size}`}
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-14 h-12 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${selectedSize === size
                                            ? 'border-orange bg-orange text-white shadow-lg shadow-orange/20'
                                            : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white'
                                        }`}
                                >
                                    {size}
                                </motion.button>
                            ))}
                        </div>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-xs mt-2"
                            >
                                Please select a size to continue
                            </motion.p>
                        )}
                    </div>

                    {/* Add to Cart */}
                    <div className="flex gap-3 flex-wrap">
                        <motion.button
                            id="add-to-cart-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleAddToCart}
                            className={`flex-1 py-4 rounded-full font-semibold text-base transition-all duration-300 ${added
                                    ? 'bg-green-500 text-white'
                                    : 'bg-orange text-white hover:bg-[#d9621f] shadow-lg shadow-orange/30'
                                }`}
                        >
                            {added ? '✓ Added to Cart!' : 'Add to Cart'}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-red-300 hover:text-red-400 transition-colors"
                            aria-label="Wishlist"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Features */}
                    <div className="bg-cream rounded-2xl p-5">
                        <p className="font-semibold text-gray-900 text-sm mb-3">Product Details</p>
                        <ul className="space-y-2">
                            {product.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg className="w-4 h-4 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Shipping badges */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                        {[['🚚', 'Free Shipping'], ['↩️', 'Easy Returns'], ['🛡️', '2-Year Warranty']].map(([icon, label]) => (
                            <div key={label} className="bg-white rounded-xl py-3 px-2 shadow-sm border border-gray-100">
                                <div className="text-xl mb-1">{icon}</div>
                                <p className="text-xs text-gray-600 font-medium">{label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Related Products */}
            {related.length > 0 && (
                <section className="section-padding max-w-7xl mx-auto mt-20">
                    <h2 className="font-display font-bold text-3xl text-gray-900 mb-8">You Might Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {related.map((p) => <ProductCard key={p.id} product={p} />)}
                    </div>
                </section>
            )}
        </main>
    )
}
