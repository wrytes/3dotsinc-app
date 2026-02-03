const faqs = [
  {
    question: "Does your company offer financial services to clients or manage external capital?",
    answer: "No. We do not manage third-party capital or provide financial services to external clients. All trading and investment activity is conducted with internal capital."
  },
  {
    question: "Why does your company hold Bitcoin as part of its strategy?",
    answer: "We view Bitcoin as a long-term, censorship-resistant monetary asset — a store of value that also enhances our brand, network alignment, and treasury resilience."
  },
  {
    question: "What is the purpose of combining trading and software expertise?",
    answer: "A deep technical understanding of protocols, smart contracts and tokenomics allows us to build and execute advanced trading strategies and financial models in decentralized markets."
  },
  {
    question: "How do you generate yield in DeFi?",
    answer: "We participate in decentralized lending, liquidity provisioning and options strategies across protocols like Morpho Blue and Deribit using capital-efficient, risk-managed frameworks to generate yield."
  }
];

export default function FAQs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">FAQs</h2>

        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
