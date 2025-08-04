import { FaShoppingBag, FaUsers, FaTruck, FaAward } from 'react-icons/fa';
import aboutImage from '../assets/images/OurStory/About-image.png';
import icon1 from '../assets/images/OurStory/Icon1.png';
import icon2 from '../assets/images/OurStory/Icon2.png';
import icon3 from '../assets/images/OurStory/Icon3.png';
import icon4 from '../assets/images/OurStory/Icon4.png';
import person1 from '../assets/images/OurStory/Person-1.png';
import person2 from '../assets/images/OurStory/Person-2.png';
import person3 from '../assets/images/OurStory/Person-3.png';

const About = () => {
  const stats = [
    {
      icon: <FaShoppingBag className="text-4xl text-red-600" />,
      number: "10.5k",
      label: "Products Sold",
      description: "Quality products delivered"
    },
    {
      icon: <FaUsers className="text-4xl text-red-600" />,
      number: "33k",
      label: "Happy Customers",
      description: "Satisfied customers worldwide"
    },
    {
      icon: <FaTruck className="text-4xl text-red-600" />,
      number: "45.5k",
      label: "Orders Delivered",
      description: "Fast and reliable delivery"
    },
    {
      icon: <FaAward className="text-4xl text-red-600" />,
      number: "25k",
      label: "5-Star Reviews",
      description: "Excellent customer satisfaction"
    }
  ];

  const services = [
    {
      icon: icon1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: icon2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: icon3,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    },
    {
      icon: icon4,
      title: "SECURE PAYMENT",
      description: "Your payment information is safe with us"
    }
  ];

  const team = [
    {
      image: person1,
      name: "Tom Cruise",
      position: "Founder & Chairman",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      image: person2,
      name: "Emma Watson",
      position: "Managing Director",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      image: person3,
      name: "Will Smith",
      position: "Product Designer",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Story
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Launched in 2015, HBK is South Asia&apos;s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, HBK has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                HBK has more than 1 Million products to offer, growing at a very fast pace. HBK offers a diverse assortment in categories ranging from consumer electronics to household goods, books, fashion and much more.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={aboutImage} 
                alt="About us" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</h4>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <img src={service.icon} alt={service.title} className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={member.social.instagram} className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600 py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Shopping?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing products at unbeatable prices.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-red-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;