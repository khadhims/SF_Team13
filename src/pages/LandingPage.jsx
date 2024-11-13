import Navbar from "../components/Navbar";
import ImageBg from "../components/ImageBg";
import WhyUs from "../components/WhyUs";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <ImageBg />
      <div className="px-8"> {/* Mengganti .container */}
        <div className="text-center text-gray-900 text-2xl font-semibold my-6">
          <h1>Kenapa QuickBus?</h1>
        </div>
        <WhyUs />
      </div>
    </div>
  );
};

export default LandingPage;
