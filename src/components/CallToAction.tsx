import officeImage from "../assets/office.png";

const CallToAction = () => {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#53389E] rounded-2xl overflow-hidden h-auto lg:h-[400px]">
          <div className="flex flex-col lg:flex-row items-center h-full">
            {/* Left side - Text content */}
            <div className="flex-1 pl-6 pr-6 pt-8 pb-8 sm:p-8 lg:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Give us a shot
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-[#E9D7FE]">
                Join over 4,000+ startups already growing with Untitled.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#7F56D9] text-white rounded-lg font-semibold hover:bg-purple-400 transition order-1 sm:order-2">
                  Get started
                </button>
                <button className="w-full sm:w-auto px-6 py-3 bg-white text-[#344054] rounded-lg font-semibold hover:bg-gray-100 transition order-2 sm:order-1">
                  Learn more
                </button>
              </div>
            </div>
            
            {/* Right side - Office image */}
            <div className="flex-1 h-[250px] sm:h-[300px] lg:h-full relative">
              <img 
                src={officeImage} 
                alt="Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;