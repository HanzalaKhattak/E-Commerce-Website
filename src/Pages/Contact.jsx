import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import phoneIcon from '../assets/images/Contact/Iconsphone.png';
import mailIcon from '../assets/images/Contact/Iconsmail.png';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-red-600" />,
      title: "Call To Us",
      details: [
        "We are available 24/7, 7 days a week.",
        "Phone: +8801611112222"
      ]
    },
    {
      icon: <FaEnvelope className="text-2xl text-red-600" />,
      title: "Write To Us",
      details: [
        "Fill out our form and we will contact you within 24 hours.",
        "Emails: customer@hbk.com",
        "Emails: support@hbk.com"
      ]
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              {/* Contact Methods */}
              <div className="space-y-8 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <img 
                        src={index === 0 ? phoneIcon : mailIcon} 
                        alt={info.title}
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FaClock className="text-red-600 mr-2" />
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="text-gray-800 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t pt-8 mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter subject"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300 resize-vertical"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaMapMarkerAlt className="text-red-600 mr-3" />
              Find Us
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9007!2d90.4125181!3d23.7808875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzUxLjIiTiA5MMKwMjQnNDUuMSJF!5e0!3m2!1sen!2sbd!4v1635789012345!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HBK Store Location"
              ></iframe>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">HBK Headquarters</h3>
              <p className="text-gray-600">
                123 Business Avenue, Dhaka 1000, Bangladesh<br />
                Phone: +8801611112222<br />
                Email: info@hbk.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;