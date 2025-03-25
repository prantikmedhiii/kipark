
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CreditCard, AlertCircle, CheckCircle, Shield, Wallet } from 'lucide-react';

const PaymentServices = () => {
  const paymentMethods = [
    {
      title: "Credit & Debit Cards",
      icon: <CreditCard className="w-10 h-10 text-garret-500" />,
      description: "Pay securely using Visa, Mastercard, American Express, or any other major credit or debit card."
    },
    {
      title: "Bank Transfer",
      icon: <Wallet className="w-10 h-10 text-garret-500" />,
      description: "Make direct transfers to our bank accounts for larger transactions or recurring payments."
    },
    {
      title: "Digital Wallets",
      icon: <Shield className="w-10 h-10 text-garret-500" />,
      description: "Use PayPal, Apple Pay, Google Pay, or other digital wallet solutions for quick and secure payments."
    }
  ];

  const faqs = [
    {
      question: "How can I pay my annual maintenance fees?",
      answer: "Annual maintenance fees can be paid through our online payment portal using credit/debit cards or bank transfers. You can also pay in person at our administrative office."
    },
    {
      question: "Is there an additional charge for using the online payment system?",
      answer: "No, there are no additional charges for using our online payment system. However, your bank or card issuer may apply their own fees for certain transactions."
    },
    {
      question: "How do I get a receipt for my payment?",
      answer: "After completing your payment, an electronic receipt will be automatically generated and sent to your registered email address. You can also download it from your account dashboard."
    },
    {
      question: "What should I do if my payment fails?",
      answer: "If your payment fails, please wait a few minutes and try again. If the problem persists, check that your payment details are correct. For further assistance, contact our support team."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">Payment Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Easily manage your payments and financial transactions with our secure and convenient payment services.
            </p>
          </div>

          <section className="mb-20">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-garret-500 text-white">
                <h2 className="text-2xl font-semibold">Online Payment Portal</h2>
                <p className="mt-2">Access our secure payment system to manage all your transactions</p>
              </div>
              <div className="p-6">
                <div className="bg-garret-50 p-4 rounded-lg mb-6 flex items-start">
                  <AlertCircle className="w-5 h-5 text-garret-500 mt-0.5 flex-shrink-0" />
                  <p className="ml-3 text-sm">
                    To access the payment portal, you need to log in with your registered account credentials. If you don't have an account yet, please contact our customer service team.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Make a payment now</h3>
                    <p className="text-gray-600 text-sm">Secure, fast, and convenient</p>
                  </div>
                  <a 
                    href="#" 
                    className="bg-garret-500 hover:bg-garret-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Access Payment Portal
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Payment Methods</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {method.icon}
                    <h3 className="text-xl font-semibold ml-4">{method.title}</h3>
                  </div>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Payment Process</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-garret-100 text-garret-500 flex items-center justify-center font-bold text-xl mb-4">1</div>
                  <h3 className="font-medium mb-2">Login to Portal</h3>
                  <p className="text-sm text-gray-600">Access your account using your credentials</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-garret-100 text-garret-500 flex items-center justify-center font-bold text-xl mb-4">2</div>
                  <h3 className="font-medium mb-2">Select Service</h3>
                  <p className="text-sm text-gray-600">Choose the service you want to pay for</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-garret-100 text-garret-500 flex items-center justify-center font-bold text-xl mb-4">3</div>
                  <h3 className="font-medium mb-2">Make Payment</h3>
                  <p className="text-sm text-gray-600">Complete payment using your preferred method</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-garret-100 text-garret-500 flex items-center justify-center font-bold text-xl mb-4">4</div>
                  <h3 className="font-medium mb-2">Receive Confirmation</h3>
                  <p className="text-sm text-gray-600">Get your receipt and payment confirmation</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Frequently Asked Questions</h2>
            <div className="bg-white rounded-lg shadow-md divide-y">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-garret-500">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentServices;
