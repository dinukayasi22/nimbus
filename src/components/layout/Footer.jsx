const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Nimbus Airways
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your trusted partner in air travel
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/book" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    Book Flight
                  </a>
                </li>
                <li>
                  <a href="/help" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Email: support@nimbus.com</li>
                <li>Phone: +1 234 567 8900</li>
                <li>Address: 123 Aviation Street</li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Nimbus Airways. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;