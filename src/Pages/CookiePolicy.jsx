import { FaCookie, FaCog, FaInfoCircle, FaEnvelope, FaToggleOn, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaCookie className="text-6xl text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: August 4, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          
          {/* What are Cookies */}
          <section>
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">What are Cookies?</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p>
                Cookies contain information that is transferred to your computer&apos;s hard drive. They help us improve our 
                website and deliver a better, more personalized service by enabling us to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Estimate our audience size and usage patterns</li>
                <li>Store information about your preferences</li>
                <li>Speed up your searches and customize your experience</li>
                <li>Recognize you when you return to our website</li>
              </ul>
            </div>
          </section>

          {/* Types of Cookies */}
          <section>
            <div className="flex items-center mb-4">
              <FaCog className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Types of Cookies We Use</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              
              {/* Essential Cookies */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Essential Cookies (Always Active)</h3>
                <p className="text-green-700 mb-3">
                  These cookies are necessary for the website to function and cannot be switched off in our systems.
                </p>
                <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                  <li>Authentication cookies (login status)</li>
                  <li>Shopping cart functionality</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance</li>
                </ul>
              </div>

              {/* Functional Cookies */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Functional Cookies</h3>
                <p className="text-blue-700 mb-3">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                  <li>Language and region preferences</li>
                  <li>Theme and display settings</li>
                  <li>Remember login information</li>
                  <li>Form data retention</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Analytics Cookies</h3>
                <p className="text-purple-700 mb-3">
                  These cookies help us understand how visitors interact with our website by collecting information anonymously.
                </p>
                <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
                  <li>Google Analytics (website traffic analysis)</li>
                  <li>Page view tracking</li>
                  <li>User behavior patterns</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Marketing Cookies</h3>
                <p className="text-orange-700 mb-3">
                  These cookies are used to deliver advertisements more relevant to you and your interests.
                </p>
                <ul className="list-disc list-inside space-y-1 text-orange-700 text-sm">
                  <li>Targeted advertising</li>
                  <li>Social media integration</li>
                  <li>Cross-site tracking prevention</li>
                  <li>Conversion tracking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Specific Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specific Cookies We Use</h2>
            <div className="space-y-4 text-gray-700">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">auth_token</td>
                      <td className="px-4 py-3">Maintains user login session</td>
                      <td className="px-4 py-3">Session</td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essential</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">cart_data</td>
                      <td className="px-4 py-3">Stores shopping cart contents</td>
                      <td className="px-4 py-3">7 days</td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essential</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">preferences</td>
                      <td className="px-4 py-3">Remembers user preferences</td>
                      <td className="px-4 py-3">30 days</td>
                      <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Functional</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">_ga</td>
                      <td className="px-4 py-3">Google Analytics tracking</td>
                      <td className="px-4 py-3">2 years</td>
                      <td className="px-4 py-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">marketing_consent</td>
                      <td className="px-4 py-3">Tracks marketing consent</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Marketing</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Some cookies on our website are set by third-party services. We have no control over these cookies 
                and they are governed by the privacy policies of the third parties.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Google Analytics</h4>
                  <p className="text-sm text-blue-700 mb-2">Helps us analyze website traffic and user behavior</p>
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline text-sm">Privacy Policy</a>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Stripe</h4>
                  <p className="text-sm text-purple-700 mb-2">Secure payment processing cookies</p>
                  <a href="https://stripe.com/privacy" className="text-purple-600 hover:underline text-sm">Privacy Policy</a>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Firebase</h4>
                  <p className="text-sm text-green-700 mb-2">Authentication and database services</p>
                  <a href="https://firebase.google.com/support/privacy/" className="text-green-600 hover:underline text-sm">Privacy Policy</a>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Social Media</h4>
                  <p className="text-sm text-red-700 mb-2">Social sharing and embedded content</p>
                  <span className="text-red-600 text-sm">Various policies apply</span>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section>
            <div className="flex items-center mb-4">
              <FaToggleOn className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Managing Your Cookie Preferences</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                You have several options for managing cookies on our website:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Browser Settings</h3>
                <p className="mb-4">You can control cookies through your browser settings:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Chrome</h4>
                    <p>Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Firefox</h4>
                    <p>Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Safari</h4>
                    <p>Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Edge</h4>
                    <p>Settings → Site permissions → Cookies and stored data</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center mb-2">
                  <FaShieldAlt className="text-yellow-600 mr-2" />
                  <h3 className="font-semibold text-yellow-800">Important Note</h3>
                </div>
                <p className="text-yellow-700">
                  Disabling cookies may affect the functionality of our website. Some features may not work properly 
                  if you choose to disable certain types of cookies.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Consent */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookie Consent</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                When you first visit our website, you will see a cookie consent banner. You can choose to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Accept All:</strong> Allow all cookies including analytics and marketing cookies</li>
                <li><strong>Necessary Only:</strong> Only allow essential cookies required for website functionality</li>
                <li><strong>Customize:</strong> Choose which categories of cookies to allow</li>
              </ul>
              <p>
                You can change your cookie preferences at any time by clicking the &quot;Cookie Settings&quot; link 
                in our website footer.
              </p>
            </div>
          </section>

          {/* Mobile Apps */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mobile Applications</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our mobile applications may use similar technologies to cookies, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Local storage and session storage</li>
                <li>Device identifiers</li>
                <li>Analytics SDKs</li>
                <li>Push notification tokens</li>
              </ul>
              <p>
                You can manage these preferences through your device settings or within the app settings.
              </p>
            </div>
          </section>

          {/* Changes to Cookie Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Cookie Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material changes 
                by posting the updated policy on our website and updating the &quot;Last updated&quot; date at the top of this page.
              </p>
              <p>
                We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-red-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> cookies@ecommerce-website.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Cookie Street, Web City, WC 12345</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                We will respond to your inquiries within 5 business days.
              </p>
            </div>
          </section>

          {/* Useful Links */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/privacy-policy" className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">Privacy Policy</h3>
                <p className="text-sm text-gray-600">Learn about how we collect and use your personal information</p>
              </Link>
              <Link to="/terms-of-service" className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">Terms of Service</h3>
                <p className="text-sm text-gray-600">Read our terms and conditions for using our website</p>
              </Link>
            </div>
          </section>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
