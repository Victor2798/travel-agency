const Home = () => {
  return (
    <div
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/src/assets/hero.png')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          Explore the World with Us
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 text-center">
          Discover amazing places at exclusive deals
        </p>
        <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transition duration-300 hover:scale-105 transform">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
