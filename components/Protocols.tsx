import Image from "next/image";

const protocols = [
  {
    name: "Deribit",
    logo: "/projects/deribit.png",
    description: "A leading platform for trading Bitcoin and Ethereum options and futures, used for volatility strategies, hedging, and structured exposure in crypto markets."
  },
  {
    name: "Morpho",
    logo: "/projects/morpho.png",
    description: "A peer-to-peer lending protocol that brings capital efficiency and custom risk management to DeFi. Built on Ethereum, it enables isolated lending markets with optimized rates and composable, permissionless design."
  },
  {
    name: "Aragon",
    logo: "/projects/aragon.png",
    description: "A decentralized platform for creating and managing autonomous organizations on Ethereum. It enables transparent governance, voting, and collaborative decision-making without intermediaries."
  }
];

export default function Protocols() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          We are working with some of the best protocols and platforms.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {protocols.map((protocol) => (
            <div key={protocol.name} className="space-y-6">
              <div className="relative h-32 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={protocol.logo}
                  alt={`${protocol.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {protocol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
