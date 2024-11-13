import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const WhyUs = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-16 my-12 mx-auto w-11/12">
      <div className="flex flex-col items-center w-80 md:w-96 relative">
        <img src={img1} alt="Cepat dan Efisien" className="w-full h-180 rounded-2xl mb-4 shadow-lg" />
        <button className="bg-primary text-white py-4 px-6 text-center font-bold rounded-md hover:bg-blue-400">
          Cepat & Efisien
        </button>
      </div>
      <div className="flex flex-col items-center w-80 md:w-96 relative">
        <img src={img2} alt="Mudah diakses" className="w-full h-180  rounded-2xl mb-4 shadow-lg" />
        <button className="bg-primary text-white py-4 px-6 text-center font-bold rounded-md hover:bg-blue-400">
          Mudah Diakses
        </button>
      </div>
      <div className="flex flex-col items-center w-80 md:w-96 relative">
        <img src={img3} alt="Aman dan Terpercaya" className="w-full h-180 rounded-2xl mb-4 shadow-lg" />
          <button className="bg-primary text-white py-4 px-6 text-center font-bold rounded-md hover:bg-blue-400">
            Aman & Terpercaya
          </button>
      </div>
    </div>
  );
};

export default WhyUs;
