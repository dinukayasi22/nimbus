const Help = () => {
    const faqs = [
      {
        question: "How do I book a flight?",
        answer: "You can book a flight by navigating to the 'Book' section, selecting your desired dates and destinations, and following the booking process."
      },
      {
        question: "What is the baggage allowance?",
        answer: "Each passenger is allowed one carry-on bag (7kg) and one checked bag (23kg) included in the ticket price. Additional baggage can be purchased."
      },
      {
        question: "How can I change my booking?",
        answer: "To modify your booking, please log in to your account and go to the 'My Bookings' section. You can make changes up to 24 hours before departure."
      },
      // Add more FAQs as needed
    ];
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Help Center
        </h2>
  
        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Contact Support
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Email Support
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    support@nimbus.com
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Phone Support
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +1 234 567 8900
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Help;