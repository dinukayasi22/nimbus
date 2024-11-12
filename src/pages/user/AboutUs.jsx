const AboutUs = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          Welcome to Nimbus Airways
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nimbus Airways has been serving passengers since 2024, providing exceptional
              flight experiences with comfort and safety as our top priorities.
            </p>
          </div>
          <div className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To provide safe, reliable, and comfortable air travel while maintaining
              the highest standards of customer service and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;