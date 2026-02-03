import Head from "next/head";
import Hero from "@/components/Hero";
import TextSection from "@/components/TextSection";
import ImageTextSection from "@/components/ImageTextSection";
import Protocols from "@/components/Protocols";
import FAQs from "@/components/FAQs";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>3Dots Inc. - Deep Finance. Bitcoin Native. Web3 Ready.</title>
        <meta name="description" content="We are a privately held company focused on financial strategy, digital assets, and advanced market models." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen">
        {/* Skip to content link */}
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded shadow-lg z-50">
          Skip to content
        </a>

        <div id="content">
          {/* Hero Section */}
          <Hero />

          {/* Text Section 1: Bitcoin Philosophy */}
          <TextSection
            title="Bitcoin is the most secure, decentralized, and censorship-resistant monetary good ever created."
            subtitle="It represents time and energy captured in digital form — a commodity independent of any central authority. With a fixed supply and global accessibility, Bitcoin stands as the foundation of a more open, fair, and undemocratic financial system."
            bgColor="bg-gray-50"
          />

          {/* Text Section 2: Foundation & Trading */}
          <TextSection
            title="This foundation matters when building robust, profitable trading strategies."
            subtitle="Deep technical knowledge of smart contracts, blockchain architecture, and token mechanics allows us to design models that are resilient, adaptive, and aligned with the structural shifts of decentralized finance."
            bgColor="bg-white"
          />

          {/* Image + Text Section: Technical Understanding */}
          <ImageTextSection
            imageSrc="/images/bitcoin.jpg"
            imageAlt="Bitcoin trading"
            subtitle="Understanding the mechanics of Bitcoin, Web3, and decentralized systems isn't optional"
            text={[
              "It requires a technical edge — understanding Bitcoin as a monetary protocol and DeFi as programmable capital.",
              "We combine strategic exposure to Bitcoin and Ethereum, yield from DeFi, and volatility trading. Our approach is capital-efficient, risk-managed, and built on deep knowledge of decentralized finance."
            ]}
            imagePosition="left"
            bgColor="bg-gray-50"
          />

          {/* Protocols Section */}
          <Protocols />

          {/* FAQs Section */}
          <FAQs />

          {/* Partnership Section */}
          <Partnership />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
