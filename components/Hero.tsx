import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Deep Finance.<br />
              Bitcoin Native.<br />
              Web3 Ready.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are a privately held company focused on financial strategy, digital assets, and advanced market models. Since 2020, we've operated at the intersection of macro strategy, decentralized protocols, and crypto-native infrastructure — with a particular emphasis on Bitcoin as a treasury reserve asset and financial instrument.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/building.jpg"
              alt="Modern office building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
