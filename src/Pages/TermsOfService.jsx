import { FaFileContract, FaGavel, FaExclamationTriangle, FaEnvelope, FaShoppingCart, FaUserCheck } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaFileContract className="text-6xl text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using our e-commerce platform and services.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: August 4, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          
          {/* Acceptance of Terms */}
          <section>
            <div className="flex items-center mb-4">
              <FaUserCheck className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of our website located at ecommerce-website.com 
                (the &quot;Service&quot;) operated by HBK E-Commerce (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
              </p>
            </div>
          </section>

          {/* Use License */}
          <section>
            <div className="flex items-center mb-4">
              <FaGavel className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Use License</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Permission is granted to temporarily download one copy of the materials on our website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p className="mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Registration</h2>
            <div className="space-y-4 text-gray-700">
              <p>To access certain features of our Service, you may be required to create an account. You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center">
                  <FaExclamationTriangle className="text-yellow-600 mr-2" />
                  <p className="text-yellow-800 font-medium">Important:</p>
                </div>
                <p className="text-yellow-700 mt-2">
                  You are responsible for safeguarding your account credentials. We cannot and will not be liable 
                  for any loss or damage arising from your failure to comply with this security obligation.
                </p>
              </div>
            </div>
          </section>

          {/* Purchases and Payment */}
          <section>
            <div className="flex items-center mb-4">
              <FaShoppingCart className="text-2xl text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Purchases and Payment</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-gray-800">Order Acceptance</h3>
              <p>
                All orders are subject to acceptance by us. We may refuse or cancel any order for any reason, 
                including but not limited to product availability, errors in product or pricing information, 
                or problems identified by our fraud detection systems.
              </p>
              
              <h3 className="text-lg font-medium text-gray-800 mt-6">Pricing and Payment</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All prices are displayed in USD and are subject to change without notice</li>
                <li>Payment is due at the time of purchase and processed through Stripe</li>
                <li>We accept major credit cards and debit cards</li>
                <li>Sales tax will be added where applicable</li>
                <li>Shipping costs are calculated at checkout</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-6">Refunds and Returns</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Returns are accepted within 30 days of purchase</li>
                  <li>Items must be in original condition with tags attached</li>
                  <li>Refunds will be processed to the original payment method</li>
                  <li>Shipping costs are non-refundable unless the return is due to our error</li>
                  <li>Digital products are non-refundable once downloaded</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prohibited Uses</h2>
            <div className="space-y-4 text-gray-700">
              <p>You may not use our Service:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To collect or track personal information of others</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent security features of the Service</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive 
                property of HBK E-Commerce and its licensors. The Service is protected by copyright, trademark, 
                and other laws. Our trademarks and trade dress may not be used in connection with any product 
                or service without our prior written consent.
              </p>
              <h3 className="text-lg font-medium text-gray-800 mt-6">User Content</h3>
              <p>
                Our Service may allow you to post, link, store, share and otherwise make available certain information, 
                text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for Content that you post 
                to the Service, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, 
                publicly display, reproduce, and distribute such Content on and through the Service.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                of the Service, to understand our practices.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  By using our Service, you agree to the collection and use of information in accordance with our 
                  <a href="/privacy-policy" className="text-red-600 hover:underline ml-1">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimers</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-red-800 font-medium mb-2">Important Legal Notice:</p>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>The information on this website is provided on an &quot;as is&quot; basis</li>
                  <li>We disclaim all warranties, whether express or implied</li>
                  <li>We do not warrant that the website will be uninterrupted or error-free</li>
                  <li>We are not responsible for any technical malfunction or other problems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                In no event shall HBK E-Commerce, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your use of the Service.
              </p>
              <p>
                Our total liability to you for all claims arising out of or relating to the use of or any inability 
                to use any portion of the Service or otherwise under these Terms, whether in contract, tort, or otherwise, 
                is limited to the greater of $100 or the amount you paid to access the Service.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                These Terms shall be interpreted and governed by the laws of the State of [Your State], USA, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access 
                or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice 
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
                not limited to a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service or contact us to 
                request account deletion.
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
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@ecommerce-website.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Commerce Street, Business City, BC 12345</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                We will respond to your inquiries within 5 business days.
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

export default TermsOfService;
