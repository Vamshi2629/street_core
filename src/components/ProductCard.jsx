import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
            <Link to={`/product/${product.id}`} className="block">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Badge */}
                    {product.badge && (
                        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white
              ${product.badge === 'Bestseller' ? 'bg-orange' :
                                product.badge === 'New' ? 'bg-gray-900' :
                                    product.badge === 'Premium' ? 'bg-[#7c5c2e]' : 'bg-gold text-gray-900'
                            }`}
                        >
                            {product.badge}
                        </span>
                    )}
                    {/* Discount */}
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-orange text-xs font-bold px-2 py-1 rounded-full">
                        -{discount}%
                    </span>
                    {/* Quick shop overlay */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold text-center py-2.5 rounded-full shadow">
                            Quick Shop
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="p-4">
                    <p className="text-xs text-orange font-medium uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="font-display font-semibold text-gray-900 text-base leading-snug mb-2">{product.name}</h3>
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-400 text-xs">({product.reviews})</span>
                    </div>
                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-900 font-bold text-lg">${product.price}</span>
                        <span className="text-gray-400 text-sm line-through">${product.originalPrice}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
