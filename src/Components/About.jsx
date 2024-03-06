import Image from "../assets/ParentsLover-father.jpg";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col w-full h-screen md:flex-row bg-amber-800">

      <div className="flex items-center justify-center w-full p-0 md:w-1/2 md:p-8 ">
       
        
                 <img
            src={Image}
            alt="About Us"
            className="object-cover w-full h-auto rounded-tr-full rounded-bl-ful"
          />
        </div>
  


      <div className="flex items-center justify-center w-full p-4 bg-gray-100 md:w-1/2 md:p-8">
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl text-amber-800">
            About Us
          </h2>
          <p className="mb-8 text-lg text-gray-700 md:text-xl">
          Welcome to my premier real estate agency, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has built a reputation for excellence and integrity.
            <br/>
            <br/>
          We are committed to staying up-to-date with the latest trends and technologies in the real estate market, and we use our knowledge and expertise to guide our clients through the buying and selling process with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;