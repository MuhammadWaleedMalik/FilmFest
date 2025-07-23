import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Eye } from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Terms of Use',
      content: [
        'By accessing and using FilmFest, you accept and agree to be bound by the terms and provision of this agreement.',
        'FilmFest reserves the right to modify these terms at any time without prior notice.',
        'Users must be at least 18 years old or have parental consent to use our services.',
        'You are responsible for maintaining the confidentiality of your account credentials.'
      ]
    },
    {
      icon: Shield,
      title: 'User Responsibilities',
      content: [
        'Users must provide accurate and truthful information when creating accounts and submitting films.',
        'You retain ownership of your submitted content but grant FilmFest necessary licenses for platform operations.',
        'Prohibited content includes illegal, defamatory, or copyright-infringing material.',
        'Users must respect the intellectual property rights of others.'
      ]
    },
    {
      icon: Scale,
      title: 'Submission Guidelines',
      content: [
        'All film submissions must meet the technical requirements specified by individual festivals.',
        'Submission fees are non-refundable except under specific circumstances outlined in our refund policy.',
        'FilmFest acts as a platform facilitator and does not guarantee acceptance to any festival.',
        'False or misleading information in submissions may result in account suspension.'
      ]
    },
    {
      icon: Eye,
      title: 'Privacy & Data',
      content: [
        'We collect and process personal data in accordance with our Privacy Policy.',
        'User data is protected using industry-standard security measures.',
        'We do not sell personal information to third parties.',
        'Users can request data deletion or modification at any time.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Last updated: January 1, 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to FilmFest. These Terms of Service ("Terms") govern your use of our website, 
            mobile application, and services (collectively, the "Service") operated by FilmFest Inc. 
            ("us", "we", or "our"). Please read these Terms carefully before using our Service.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <section.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="bg-indigo-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Terms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                FilmFest shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, 
                goodwill, or other intangible losses.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at 
                legal@filmfest.com or visit our contact page.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 p-6 bg-indigo-50 rounded-xl"
        >
          <p className="text-gray-600">
            By using FilmFest, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;