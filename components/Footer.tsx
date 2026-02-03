export default function Footer() {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div>
            <h4 className="font-bold text-2xl mb-6">3Dots Inc.</h4>
            <address className="not-italic text-gray-400 leading-relaxed text-lg space-y-1">
              <p>Suite 9, Ansuya Estate</p>
              <p>673310 Revolution Avenue, Victoria</p>
              <p>Mahé, Republic of Seychelles</p>
            </address>
          </div>

          <div className="flex gap-8 text-gray-400 text-lg">
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
