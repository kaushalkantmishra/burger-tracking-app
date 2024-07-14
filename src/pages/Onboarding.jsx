import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import getStartedImage from "../assets/Progressbutton.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const images = [image1, image2, image3];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col items-center justify-end min-h-screen p-4 text-white bg-cover"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="bg-orange-500 m-4 p-4 rounded-3xl text-center">
        <h1 className="text-3xl font-bold">We serve incomparable delicacies</h1>
        <p className="mt-8">
          All the best restaurants with their top menu waiting for you, they
          can’t wait for your order!
        </p>
        <div className="mt-4">
          {images.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-8 h-2 rounded-lg mx-1 ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
        <div className="mt-16 flex justify-between w-full px-4">
          {currentIndex < images.length - 1 ? (
            <>
              <button className="text-white" onClick={handleSkip}>
                Skip
              </button>
              <button
                className="text-white flex items-center"
                onClick={handleNext}
              >
                Next <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </>
          ) : (
            <div className="flex justify-center w-full">
              <button
                onClick={handleNext}
                className="bg-transparent border-none"
              >
                <img
                  src={getStartedImage}
                  alt="Get Started"
                  className="w-32 h-auto"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
