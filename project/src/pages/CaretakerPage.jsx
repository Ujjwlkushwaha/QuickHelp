// import Navbar from '../components/common/Navbar';
import caretakerImg from '../assets/img.webp';

// const trustedLogos = [
//   { name: 'USA TODAY', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/USA_Today_Logo.svg' },
//   { name: 'Mom.com', src: 'https://seeklogo.com/images/M/mom-com-logo-6B2B2B2B2B-seeklogo.com.png' },
//   { name: 'FORTUNE', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Fortune_Magazine_logo.svg' },
//   { name: 'REAL SIMPLE', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Real_Simple_logo.svg' },
//   { name: 'CNBC', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/CNBC_logo.svg' },
// ];

const CaretakerPage = () => {
  return (
    <div className="h-[80vh] w-screen bg-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">

      {/* <Navbar /> */}
      <main className="w-full h-full">

        {/* Hero Section */}
        <section className=" flex w-full h-full px-40">
          {/* Left: Text */}
          <div className=" h-full w-1/2 flex gap-10 flex-col justify-center">

            <h1 className="">
              Discover Your Caregiver <br /> and Hire with Confidence!
            </h1>

            <p className="">
              Experience the ease and comfort of finding reliable caregivers and trusted care services, all in one place.
    <br />  
              Welcome to our CareMall, dedicated to serving you and your loved ones with the utmost care and respect.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-bounce-slow">
                Find a Caregiver
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border border-blue-600 hover:bg-blue-50 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-bounce-slow delay-200">
                Become a Caregiver
              </button>
            </div>
          </div>


          {/* Right: Image */}
          <div className="h-full flex items-center justify-center">
            <img
              src={caretakerImg}
              alt="Caretaker helping elderly people"
              className=""
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaretakerPage; 