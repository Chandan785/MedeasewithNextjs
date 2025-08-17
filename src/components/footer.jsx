export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black-400 to-black-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MedEase</h2>
          <p className="text-sm leading-relaxed opacity-80">
            MedEase is revolutionizing the way people manage their medical
            records. We provide seamless, secure, and instant access to your
            health history.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/services" className="hover:text-blue-200">Services</a></li>
            <li><a href="/partners" className="hover:text-blue-200">Partners</a></li>
            <li><a href="/about" className="hover:text-blue-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@medease.com" className="hover:text-blue-200">info@medease.com</a></li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Greater Noida, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-sm">F</a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-sm">T</a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-sm">L</a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-sm">I</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm opacity-75">
        © {new Date().getFullYear()} MedEase. All rights reserved.
      </div>
    </footer>
  );
}
