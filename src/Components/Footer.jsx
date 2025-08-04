import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Careers', path: '#' },
      { name: 'Press', path: '#' }
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Shipping Info', path: '#' },
      { name: 'Returns', path: '#' },
      { name: 'Size Guide', path: '#' }
    ],
    account: [
      { name: 'My Account', path: '#' },
      { name: 'Order History', path: '#' },
      { name: 'Wishlist', path: '#' },
      { name: 'Newsletter', path: '#' }
    ],
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'Shop', path: '/shop' },
      { name: 'New Arrivals', path: '/shop' },
      { name: 'Best Sellers', path: '/shop' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-red-600 py-12">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-red-100">Subscribe to our newsletter for the latest deals and updates</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="text-2xl font-bold mb-4 block">
                HBK
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for quality products at affordable prices. We&apos;re committed to providing exceptional customer service and fast, reliable delivery.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-red-500 flex-shrink-0" />
                  <span className="text-gray-400">123 Business Ave, Dhaka 1000, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-red-500 flex-shrink-0" />
                  <span className="text-gray-400">+8801611112222</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-red-500 flex-shrink-0" />
                  <span className="text-gray-400">info@hbk.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h5 className="text-sm font-semibold mb-2">We Accept</h5>
                <div className="flex space-x-3">
                  <div className="bg-white px-3 py-2 rounded text-gray-900 text-sm font-medium">VISA</div>
                  <div className="bg-white px-3 py-2 rounded text-gray-900 text-sm font-medium">MC</div>
                  <div className="bg-white px-3 py-2 rounded text-gray-900 text-sm font-medium">AMEX</div>
                  <div className="bg-white px-3 py-2 rounded text-gray-900 text-sm font-medium">PayPal</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex space-x-6">
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    Terms of Service
                  </Link>
                  <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © {currentYear} HBK. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Made with ❤️ for shopping</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;