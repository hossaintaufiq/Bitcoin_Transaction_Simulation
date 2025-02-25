import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is a cryptocurrency exchange?", answer: "A cryptocurrency exchange is a platform where you can buy, sell, and trade cryptocurrencies." },
    { question: "What products does Binance provide?", answer: "Binance offers spot trading, futures trading, staking, and more financial products for crypto users." },
    { question: "How to buy Bitcoin and other cryptocurrencies on Binance?", answer: "You can buy Bitcoin using a debit card, bank transfer, or P2P trading on Binance." },
    { question: "How to track cryptocurrency prices?", answer: "You can track cryptocurrency prices using market analysis tools and Binance's trading interface." },
    { question: "How to trade cryptocurrencies on Binance?", answer: "Sign up on Binance, deposit funds, and use the trading platform to buy or sell cryptocurrencies." },
    { question: "How to earn from crypto on Binance?", answer: "You can earn through staking, lending, and Binance Earn programs." },
    { question: "Is cryptocurrency trading safe?", answer: "While crypto trading has risks, using secure platforms and proper risk management can enhance safety." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="bg-white py-12 px-6 md:px-16 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className={`pb-3 ${index !== faqs.length - 1 ? "border-b" : ""}`}>
            <button
              className="flex justify-between items-center w-full text-lg font-semibold text-left py-3 focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
