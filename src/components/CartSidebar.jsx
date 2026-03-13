import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isSidebarOpen, setIsSidebarOpen } = useCart();

  if (!isSidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Cart Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
          {/* Header */}
          <div className="px-6 py-6 bg-stone text-white flex items-center justify-between">
            <h2 className="text-xl font-bold font-serif uppercase tracking-wider">Your Shopping Bag</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Your Bag is Empty</h3>
                  <p className="text-gray-500">Looks like you haven't added anything yet.</p>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="bg-[#c8a45a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b08e4a] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <li key={item.id} className="py-6 flex space-x-4">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-100 rounded-lg overflow-hidden bg-cream">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-center object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/100';
                        }}
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-11V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm text-gray-500">₹{item.price}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 bg-gray-50 hover:bg-gray-100 font-bold"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-bold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-1 bg-gray-50 hover:bg-gray-100 font-bold"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-bold text-gray-900">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-6 bg-gray-50 space-y-4">
              <div className="flex justify-between text-base font-bold text-gray-900">
                <p>Subtotal</p>
                <p>₹{cartTotal}</p>
              </div>
              <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/cart"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center justify-center px-6 py-4 border border-stone text-stone font-bold rounded-full hover:bg-stone hover:text-white transition-all text-sm uppercase tracking-wider"
                >
                  View Bag
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center justify-center px-6 py-4 bg-black text-white font-bold rounded-full hover:bg-stone transition-all text-sm uppercase tracking-wider shadow-lg hover:shadow-xl"
                >
                  Checkout
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2 py-4">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">100% Secure Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
