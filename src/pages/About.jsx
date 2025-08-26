import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 px-6">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-blue-600">About Us</h1>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          Welcome to <span className="font-semibold text-blue-700">Our Car Shop</span>, 
          where <span className="text-blue-500">passion meets performance</span>.  
          We are dedicated to providing you with the best car collection, offering style, 
          speed, and reliability all in one place. Whether you’re looking for a brand-new ride 
          or want to learn more about cars, we’ve got you covered.
        </p>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Mission</h2>
            <p className="text-base leading-relaxed text-gray-600">
              To bring you the latest models, trusted services, and expert advice so 
              that your driving experience is nothing less than perfect. 
              We believe cars are more than just vehicles—they are a lifestyle.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Vision</h2>
            <p className="text-base leading-relaxed text-gray-600">
              To become the leading destination for car enthusiasts by delivering 
              innovation, trust, and satisfaction to every customer we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
