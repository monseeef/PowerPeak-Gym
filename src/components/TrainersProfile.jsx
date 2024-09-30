import React from "react";
import { Instagram, Twitter, Linkedin, Award } from "lucide-react";
import alexImage from "../assets/charles.jpg";
import sarahImage from "../assets/sarah.jpg";
import mikeImage from "../assets/mike.jpg";

const TrainersProfile = () => {
  const trainers = [
    {
      name: "Alex Johnson",
      specialty: "Strength & Conditioning",
      image: alexImage,
      bio: "10+ years in strength training and sports performance.",
      achievement: "Certified Strength and Conditioning Specialist",
      instagram: "https://instagram.com/alexj",
      twitter: "https://twitter.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
    },
    {
      name: "Sarah Lee",
      specialty: "Yoga & Pilates",
      image: sarahImage,
      bio: "Helping clients achieve mind-body balance through yoga.",
      achievement: "500-Hour Registered Yoga Teacher",
      instagram: "https://instagram.com/sarahlee",
      twitter: "https://twitter.com/sarahlee",
      linkedin: "https://linkedin.com/in/sarahlee",
    },
    {
      name: "Mike Torres",
      specialty: "CrossFit & HIIT",
      image: mikeImage,
      bio: "Specializes in high-intensity workouts for all levels.",
      achievement: "CrossFit Level 3 Trainer",
      instagram: "https://instagram.com/miket",
      twitter: "https://twitter.com/miket",
      linkedin: "https://linkedin.com/in/miket",
    },
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 font-montserrat text-white">
          <span className="text-orange-500">Elite</span> Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-orange-500 font-medium">
                    {trainer.specialty}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{trainer.bio}</p>
                <div className="flex items-center mb-4">
                  <Award className="text-orange-500 mr-2" size={20} />
                  <span className="text-white text-sm">
                    {trainer.achievement}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={trainer.instagram}
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                    aria-label={`${trainer.name}'s Instagram`}
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={trainer.twitter}
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                    aria-label={`${trainer.name}'s Twitter`}
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href={trainer.linkedin}
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                    aria-label={`${trainer.name}'s LinkedIn`}
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersProfile;
