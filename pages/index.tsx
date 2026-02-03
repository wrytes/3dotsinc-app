import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>3Dots Inc. - Deep Finance. Bitcoin Native. Web3 Ready.</title>
        <meta name="description" content="3Dots Inc. - Financial strategy meets crypto assets since 2020" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Deep Finance. Bitcoin Native. Web3 Ready.
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Financial strategy meets crypto assets since 2020
            </p>
          </section>

          {/* Bitcoin Philosophy Section */}
          <section className="py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <div>
                <blockquote className="text-2xl md:text-3xl font-serif italic">
                  "Bitcoin is the most secure, decentralized, and censorship-resistant monetary good ever created."
                </blockquote>
              </div>
            </div>
          </section>

          {/* Technical Expertise Section */}
          <section className="py-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700">
              Blockchain knowledge is non-optional for strategy development
            </p>
          </section>

          {/* Partners Section */}
          <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 h-32 mb-4 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Deribit</span>
                </div>
                <p className="text-gray-700">Options and futures platform</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 h-32 mb-4 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Morpho</span>
                </div>
                <p className="text-gray-700">Peer-to-peer lending protocol</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 h-32 mb-4 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Aragon</span>
                </div>
                <p className="text-gray-700">Autonomous organizations platform</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
            <div className="space-y-4">
              <details className="border rounded-lg p-4">
                <summary className="cursor-pointer font-semibold">What services do you offer?</summary>
                <p className="mt-4 text-gray-700">We provide financial strategy and crypto asset management services.</p>
              </details>
              <details className="border rounded-lg p-4">
                <summary className="cursor-pointer font-semibold">Do you hold Bitcoin?</summary>
                <p className="mt-4 text-gray-700">Yes, we are Bitcoin native and believe in its long-term value.</p>
              </details>
              <details className="border rounded-lg p-4">
                <summary className="cursor-pointer font-semibold">What is your technical expertise?</summary>
                <p className="mt-4 text-gray-700">Our team has deep blockchain and Web3 technical knowledge.</p>
              </details>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 border-t mt-16">
            <div className="text-center text-gray-600">
              <p className="mb-2">Suite 9, Ansuya Estate, Victoria, Seychelles</p>
              <div className="space-x-4">
                <a href="#" className="hover:text-gray-900">Contact Us</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
