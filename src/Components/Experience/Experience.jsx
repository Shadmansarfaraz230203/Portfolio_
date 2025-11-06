import React from "react";

const experienceData = [
  {
    Company : "MERN Stack Developer Intern - Greet Labs Pvt Ltd, Bengaluru" ,
    duration : "April 2025 – September 2025",
    JD :"• Developed full-stack applications using React.js and Node.js/Express.js for smooth user experience.",
    JD :"• Built RESTful APIs and integrated with frontends, reducing client–server errors by 25%.",
    JD :"• Optimized JavaScript components, improving frontend performance by 20%.",
    JD :"• Managed MongoDB and SQL databases supporting 10K+ daily transactions.",
    JD :"• Contributed in Agile sprints, achieving 95% on-time delivery of sprint goals."
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Experience</h2>
        <div className="space-y-8 text-left ">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform "
            >
              
              {/* <p className="text-white text-2xl">{edu.degree}</p> */}
              {/* <p className="text-white text-1xl ">
                <strong>:</strong> {exp.year} | <strong>CGPA:</strong> {edu.cgpa}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
