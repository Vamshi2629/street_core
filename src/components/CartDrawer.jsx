import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
    const { cartItems, removeFromCart, updateQty, cartTotal, clearCart } = useCart()

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />
                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                            <h2 className="font-display font-bold text-xl text-gray-900">
                                Your Cart <span className="text-orange text-base font-sans">({cartItems.length})</span>
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close cart"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                            {cartItems.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                                    <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center">
                                        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-display font-semibold text-gray-900 text-lg">Your cart is empty</p>
                                        <p className="text-gray-400 text-sm mt-1">Add some pieces to get started</p>
                                    </div>
                                    <button onClick={onClose} className="btn-primary text-sm px-6 py-2.5">
                                        Browse Collections
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <motion.div
                                        key={item.key}
                                        layout
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex gap-4 bg-gray-50 rounded-xl p-3"
                                    >
                                        <img
                                            src={item.images[0]}
                                            alt={item.name}
                                            className="w-20 h-24 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h4>
                                            <p className="text-xs text-gray-400 mt-0.5">Size: {item.size}</p>
                                            <p className="text-orange font-bold mt-1">${item.price}</p>
                                            {/* Qty */}
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => updateQty(item.key, item.qty - 1)}
                                                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange hover:text-orange transition-colors text-sm font-bold"
                                                >−</button>
                                                <span className="text-sm font-semibold w-4 text-center">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.key, item.qty + 1)}
                                                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange hover:text-orange transition-colors text-sm font-bold"
                                                >+</button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.key)}
                                            className="self-start p-1.5 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-gray-400"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="px-6 py-5 border-t border-gray-100 space-y-4">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">${cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between font-bold text-gray-900 text-lg border-t pt-3">
                                    <span>Total</span>
                                    <span>${cartTotal}</span>
                                </div>
                                <button className="btn-primary w-full text-center">
                                    Checkout — ${cartTotal}
                                </button>
                                <button onClick={clearCart} className="w-full text-center text-xs text-gray-400 hover:text-red-500 transition-colors py-1">
                                    Clear cart
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
