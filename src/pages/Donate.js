import React, { useState } from 'react';
import Razorpay from 'razorpay';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('general');

  const donationAmounts = [
    { amount: '500', label: '₹500', description: 'Feeds a family for a week' },
    { amount: '1000', label: '₹1,000', description: 'Covers medicine for 5 patients' },
    { amount: '2500', label: '₹2,500', description: 'Sponsors a child\'s education' },
    { amount: '5000', label: '₹5,000', description: 'Supports a free surgery' },
    { amount: '10000', label: '₹10,000', description: 'Runs health camp for 100 people' }
  ];

  const causes = [
    { value: 'general', label: 'General Donation', description: 'Support our overall mission' },
    { value: 'healthcare', label: 'Healthcare', description: 'Free surgeries and medical care' },
    { value: 'education', label: 'Education', description: 'Scholarships and school support' },
    { value: 'community', label: 'Community Development', description: 'Village empowerment programs' }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount) {
      alert('Please select or enter a donation amount.');
      return;
    }

    // Razorpay configuration - Replace with your actual values
    const razorpayKeyId = 'YOUR_RAZORPAY_KEY_ID'; // Replace with your Razorpay Key ID
    
    const options = {
      key: razorpayKeyId,
      amount: amount * 100, // Amount in paise (multiply by 100)
      currency: 'INR',
      name: 'Shyam Narayan Seva Sansthan',
      description: `Donation for ${selectedCause}`,
      image: '/logo.png', // Your NGO logo
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Here you can send the payment details to your backend
        console.log('Payment successful:', response);
      },
      prefill: {
        name: 'Donor Name',
        email: 'donor@example.com',
        contact: '9999999999'
      },
      notes: {
        cause: selectedCause,
        amount: amount
      },
      theme: {
        color: '#f97316' // Orange color matching your theme
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-700 to-green-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Make a Difference</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your contribution can transform lives. Support our healthcare, education, and community programs to create lasting impact.
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Donation Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose Your Donation</h2>
                  
                  {/* Cause Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Select a Cause</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {causes.map((cause) => (
                        <label
                          key={cause.value}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                            selectedCause === cause.value
                              ? 'border-teal-500 bg-teal-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="cause"
                            value={cause.value}
                            checked={selectedCause === cause.value}
                            onChange={(e) => setSelectedCause(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                              selectedCause === cause.value
                                ? 'border-teal-500 bg-teal-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedCause === cause.value && (
                                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">{cause.label}</div>
                              <div className="text-sm text-gray-600">{cause.description}</div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Select Amount</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {donationAmounts.map((item) => (
                        <button
                          key={item.amount}
                          onClick={() => handleAmountSelect(item.amount)}
                          className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                            selectedAmount === item.amount
                              ? 'border-teal-500 bg-teal-50 text-teal-700'
                              : 'border-gray-200 hover:border-gray-300 text-gray-700'
                          }`}
                        >
                          <div className="font-bold text-lg">{item.label}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </button>
                      ))}
                    </div>
                    
                    {/* Custom Amount */}
                    <div>
                      <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                        Or enter custom amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          id="customAmount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="Enter amount"
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <button
                    onClick={handleDonate}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Donate Now
                  </button>
                </div>

                {/* Impact Information */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Impact</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                        <span className="text-gray-700">₹500</span>
                        <span className="text-sm text-gray-600">Feeds a family for a week</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                        <span className="text-gray-700">₹1,000</span>
                        <span className="text-sm text-gray-600">Covers medicine for 5 patients</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <span className="text-gray-700">₹2,500</span>
                        <span className="text-sm text-gray-600">Sponsors a child's education</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700">₹5,000</span>
                        <span className="text-sm text-gray-600">Supports a free surgery</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Donate?</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>100% of donations go directly to programs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Transparent financial reporting</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tax-deductible donations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Regular impact updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Payment Methods</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bank Transfer</h3>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Account Name:</strong> Shyam Narayan Seva Sansthan</p>
                  <p><strong>Account Number:</strong> 43942139793</p>
                  <p><strong>IFSC Code:</strong> SBIN0018042</p>
                  <p><strong>Bank:</strong> State Bank of India</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Wallets</h3>
                <div className="text-gray-600 space-y-2">
                  <p>Google Pay</p>
                  <p>PhonePe</p>
                  <p>Paytm</p>
                  <p>UPI: info@shyamnarayan.org</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Online Payment</h3>
                <div className="text-gray-600 space-y-2">
                  <p>Credit/Debit Cards</p>
                  <p>Net Banking</p>
                  <p>UPI</p>
                  <p>Wallets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Every Rupee Counts</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join thousands of donors who are making a difference in the lives of underprivileged communities. Your support helps us continue our mission of providing healthcare, education, and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More About Us
              </a>
              <a
                href="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                See Our Impact
              </a>
          </div>
        </div>
        </section>
    </div>
  );
};

export default Donate;
