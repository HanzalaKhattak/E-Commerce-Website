import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-6xl text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: August 4, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          
          {/* Information Collection */}
          <section>
            <div className="flex items-center mb-4">
              <FaUserShield className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
              <p>
                When you create an account or make a purchase, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Account credentials (email and encrypted password)</li>
                <li>Order history and preferences</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mt-6">Automatically Collected Information</h3>
              <p>
                We may automatically collect certain information when you use our website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>Device information and IP address</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center mb-4">
              <FaLock className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Provide customer service and support</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Improve our products and services</li>
                <li>Personalize your shopping experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
            <div className="space-y-4 text-gray-700">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Trusted third parties who help us operate our website (payment processors, shipping companies)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement appropriate security measures to protect your personal information:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Encryption:</strong> All sensitive data is encrypted using industry-standard protocols</li>
                  <li><strong>Secure Payment Processing:</strong> Payment information is processed through Stripe&apos;s secure PCI DSS compliant platform</li>
                  <li><strong>Firebase Security:</strong> User authentication and data storage secured by Google Firebase</li>
                  <li><strong>Regular Updates:</strong> We regularly update our security measures and software</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and shopping cart contents</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect some website functionality.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correct:</strong> Update or correct inaccurate personal information</li>
                <li><strong>Delete:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our website integrates with the following third-party services:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Google Firebase</h4>
                  <p className="text-sm text-blue-700">Authentication and database services</p>
                  <a href="https://firebase.google.com/support/privacy/" className="text-blue-600 hover:underline text-sm">Privacy Policy</a>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Stripe</h4>
                  <p className="text-sm text-purple-700">Secure payment processing</p>
                  <a href="https://stripe.com/privacy" className="text-purple-600 hover:underline text-sm">Privacy Policy</a>
                </div>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children&apos;s Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Updates</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date at the top of this page.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
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
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@ecommerce-website.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Privacy Street, Data City, DC 12345</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                We will respond to your inquiries within 30 days of receipt.
              </p>
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

export default PrivacyPolicy;
