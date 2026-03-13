import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      setStep(3);
      clearCart();
      window.scrollTo(0, 0);
    }
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-black text-white px-8 py-3 rounded-full font-bold"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="pt-40 pb-20 px-4 max-w-xl mx-auto text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-serif font-bold text-black mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">Thank you for shopping with Satyaherbs. Your order ID is #SH-{(Math.random() * 1000000).toFixed(0)}.</p>
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-black text-white py-4 rounded-xl font-bold shadow-lg"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div>
          <div className="flex gap-4 mb-8">
            <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-[#c8a45a]' : 'bg-gray-200'}`}></div>
            <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-[#c8a45a]' : 'bg-gray-200'}`}></div>
          </div>

          <h1 className="text-3xl font-serif font-bold text-black mb-8">
            {step === 1 ? 'Shipping Information' : 'Secure Payment'}
          </h1>

          <form onSubmit={handlePlaceOrder} className="space-y-6">
            {step === 1 ? (
              <div className="space-y-4">
                <input required name="name" placeholder="Full Name" className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#c8a45a] outline-none transition-all" value={formData.name} onChange={handleInputChange} />
                <div className="grid grid-cols-2 gap-4">
                  <input required name="email" type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-gray-200 outline-none" value={formData.email} onChange={handleInputChange} />
                  <input required name="phone" placeholder="Phone Number" className="w-full p-4 rounded-xl border border-gray-200 outline-none" value={formData.phone} onChange={handleInputChange} />
                </div>
                <input required name="address" placeholder="Complete Address" className="w-full p-4 rounded-xl border border-gray-200 outline-none" value={formData.address} onChange={handleInputChange} />
                <div className="grid grid-cols-2 gap-4">
                  <input required name="city" placeholder="City" className="w-full p-4 rounded-xl border border-gray-200 outline-none" value={formData.city} onChange={handleInputChange} />
                  <input required name="pincode" placeholder="Pincode" className="w-full p-4 rounded-xl border border-gray-200 outline-none" value={formData.pincode} onChange={handleInputChange} />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 border-2 border-[#c8a45a] bg-[#c8a45a]/5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💳</span>
                    <span className="font-bold">Credit / Debit Card</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-4 border-[#c8a45a]"></div>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <span className="font-bold">UPI (Google Pay, PhonePe)</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-gray-200"></div>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚚</span>
                    <span className="font-bold">Cash on Delivery</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-gray-200"></div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100">
                   <input placeholder="Card Number" className="w-full p-4 rounded-xl border border-gray-200 mb-4" />
                   <div className="grid grid-cols-2 gap-4">
                     <input placeholder="MM/YY" className="p-4 rounded-xl border border-gray-200" />
                     <input placeholder="CVV" className="p-4 rounded-xl border border-gray-200" />
                   </div>
                </div>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-stone transition-all active:scale-[0.98]"
            >
              {step === 1 ? 'Proceed to Payment' : `Pay ₹${cartTotal + 99}`}
            </button>
            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zM7 7a3 3 0 016 0v2H7V7z" /></svg>
              SSL Secure 256-bit Encryption
            </p>
          </form>
        </div>

        {/* Right: Summary */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit sticky top-32">
          <h2 className="text-xl font-serif font-bold text-black mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-16 h-16 bg-cream rounded-lg overflow-hidden border border-gray-50 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-bold text-gray-900">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6 space-y-3">
            <div className="flex justify-between text-gray-600">
              <p>Item Total</p>
              <p>₹{cartTotal}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Shipping</p>
              <p className="text-green-600 font-bold">₹99</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-black pt-2">
              <p>Grand Total</p>
              <p>₹{cartTotal + 99}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
