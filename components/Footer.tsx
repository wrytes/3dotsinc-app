import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg">
              <Image
                src="/images/3dotshub-150x150.png"
                alt="3Dots Inc. logo"
                width={60}
                height={60}
                className="rounded"
              />
            </div>
            <h4 className="font-bold text-2xl">3Dots Inc.</h4>
          </div>
          <address className="not-italic text-gray-400 leading-relaxed text-lg space-y-1">
            <p>Suite 9, Ansuya Estate</p>
            <p>673310 Revolution Avenue, Victoria</p>
            <p>Mahé, Republic of Seychelles</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
