import cardsImage from "../assets/cards.png";

const HeroSection = () => {
  return (
    <section className="h-auto bg-[#53389e] overflow-hidden">
      <div
        className="flex flex-col items-start md:items-center px-4 md:px-8 pt-16 md:pt-24"
      >
        <p className="text-[#E9D7FE] text-lg mb-8 text-left md:text-center w-full md:w-auto">
          Super. Simple. Banking.
        </p>

        <h1 className="text-white text-4xl md:text-7xl font-semibold leading-tight mb-8 max-w-4xl text-left md:text-center">
          Banking technology
          <br />
          that has your back.
        </h1>

        <p className="text-[#E9D7FE] text-xl mb-12 max-w-2xl text-left md:text-center">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4 w-full sm:w-auto">
          <button className="bg-[#7F56D9] text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 transition text-lg sm:text-base order-1 sm:order-2">
            Sign up
          </button>
          <button className="bg-white text-[#344054] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center space-x-2 text-lg sm:text-base order-2 sm:order-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Demo</span>
          </button>
        </div>

      </div>
      <div className="w-full flex justify-center mt-20 md:mt-4">
        <div className="max-w-7xl px-4 md:px-8">
          <img src={cardsImage} alt="Credit Cards" className="w-full h-auto scale-125 sm:scale-110 md:scale-100" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
