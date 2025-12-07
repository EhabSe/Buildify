import team from "../../assets/team.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between md:px-16 md:py-20 px-6 py-12 bg-white rounded-xl shadow-lg">
      <div className="md:w-1/2 w-full mb-10">
        <h1 className="md:text-5xl text-3xl font-bold">
          UNLOCK YOUR CREATIVE FLOW
        </h1>
        <p className="mt-5 text-xl text-gray-600">
          Simplify your projects, collaborate effortlessly, and bring ideas to
          life with our intuitive platform
        </p>
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 w-full mb-10">
        <img
          className="rounded-lg shadow-lg w-full md:max-w-sm"
          src={team}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
